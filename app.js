/* ===================================================================
   CyberQuiz — lógica do aplicativo
   - Run única de N perguntas (config.questionsPerRun) sorteadas do banco
   - Dificuldade progride conforme o desempenho do usuário
   - Coleta nome, e-mail e (com permissão do navegador) localização
   - Envia os dados para um Web App do Google Apps Script
   - Função secreta: mensagem de "dupla visualização" (máx. 2x por navegador)
   =================================================================== */
(function () {
  "use strict";

  var CFG = window.CYBERQUIZ_CONFIG || {};
  var POOL = (window.CYBERQUIZ_QUESTIONS || []).slice();

  var N = CFG.questionsPerRun || 10;
  var SECRET_KEY = "cq_secret_views";   // chave no localStorage

  // ---------- util ----------
  var $ = function (id) { return document.getElementById(id); };

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function normalize(s) {
    return (s || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, ""); // remove acentos
  }

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function escapeHtml(s) {
    return (s || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---------- estado ----------
  var state = {
    name: "", email: "",
    location: null,          // {lat,lng,accuracy} ou {error}
    run: [],                 // perguntas sorteadas desta run
    idx: 0,
    correct: 0,
    selected: null,          // índice selecionado na pergunta atual
    locked: false,           // true após confirmar
    answers: []              // histórico [{q, chosen, correct, ok, d, t}]
  };

  // ---------- seleção adaptativa ----------
  // Monta a run de N perguntas; a dificuldade sobe quando o usuário acerta.
  // Começa pelas básicas; conforme a precisão parcial melhora, puxa intermediárias.
  var deckBasic = shuffle(POOL.filter(function (q) { return q.d === "b"; }));
  var deckInter = shuffle(POOL.filter(function (q) { return q.d === "i"; }));

  function drawByDifficulty(prefer) {
    // prefer: "b" ou "i". Cai para o outro baralho se o preferido esgotar.
    var first = prefer === "i" ? deckInter : deckBasic;
    var second = prefer === "i" ? deckBasic : deckInter;
    if (first.length) return first.shift();
    if (second.length) return second.shift();
    return null;
  }

  function nextDifficulty() {
    var answered = state.answers.length;
    // Primeiras 2 perguntas: sempre básicas (aquecimento).
    if (answered < 2) return "b";
    var acc = state.correct / answered;   // precisão parcial (0..1)
    // Acima de 60% de acerto => sobe para intermediária; senão, mantém básica.
    return acc >= 0.6 ? "i" : "b";
  }

  function buildFirstQuestion() {
    state.run = [];
    var q = drawByDifficulty("b");
    if (q) state.run.push(q);
  }

  function ensureNextQuestion() {
    if (state.run.length > state.idx) return; // já existe
    if (state.answers.length >= N) return;    // run completa
    var q = drawByDifficulty(nextDifficulty());
    if (q) state.run.push(q);
  }

  // ---------- telas ----------
  function show(screenId) {
    ["screen-start", "screen-quiz", "screen-result"].forEach(function (id) {
      var el = $(id);
      var active = id === screenId;
      el.hidden = !active;
      el.classList.toggle("screen--active", active);
    });
    window.scrollTo(0, 0);
  }

  // ---------- geolocalização (com permissão nativa do navegador) ----------
  function requestLocation() {
    return new Promise(function (resolve) {
      if (!CFG.collectLocation || !("geolocation" in navigator)) {
        resolve({ error: "indisponivel" });
        return;
      }
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          resolve({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            accuracy: pos.coords.accuracy
          });
        },
        function (err) {
          resolve({ error: err.code === 1 ? "negado" : "falha", message: err.message });
        },
        {
          enableHighAccuracy: !!CFG.locationHighAccuracy,
          timeout: CFG.locationTimeoutMs || 15000,
          maximumAge: 0
        }
      );
    });
  }

  // ---------- render da pergunta ----------
  var LETTERS = ["A", "B", "C", "D", "E", "F"];

  function renderQuestion() {
    ensureNextQuestion();
    var q = state.run[state.idx];
    if (!q) { finish(); return; }

    state.selected = null;
    state.locked = false;
    $("btn-next").disabled = true;
    $("btn-next").textContent = "Confirmar";

    var num = state.answers.length + 1;
    $("q-counter").textContent = num + " / " + N;
    $("progress-fill").style.width = ((state.answers.length) / N * 100) + "%";

    var diffEl = $("q-diff");
    diffEl.textContent = q.d === "i" ? "Intermediária" : "Básica";
    diffEl.setAttribute("data-d", q.d);

    $("q-topic").textContent = q.t || "";
    $("q-text").textContent = q.q;

    var ul = $("options");
    ul.innerHTML = "";
    q.o.forEach(function (text, i) {
      var li = document.createElement("li");
      li.className = "opt";
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", "false");
      li.dataset.i = i;
      li.innerHTML =
        '<span class="opt__key">' + LETTERS[i] + '</span>' +
        '<span class="opt__txt">' + escapeHtml(text) + '</span>';
      li.addEventListener("click", function () { selectOption(i); });
      ul.appendChild(li);
    });
  }

  function selectOption(i) {
    if (state.locked) return;
    state.selected = i;
    var opts = $("options").children;
    for (var k = 0; k < opts.length; k++) {
      opts[k].setAttribute("aria-selected", k === i ? "true" : "false");
    }
    $("btn-next").disabled = false;
  }

  function confirmAnswer() {
    var q = state.run[state.idx];
    var chosen = state.selected;
    var ok = chosen === q.a;
    state.locked = true;

    var opts = $("options").children;
    for (var k = 0; k < opts.length; k++) {
      opts[k].classList.add("opt--locked");
      if (k === q.a) opts[k].classList.add("opt--correct");
      if (k === chosen && !ok) opts[k].classList.add("opt--wrong");
    }

    if (ok) state.correct++;
    state.answers.push({
      q: q.q, chosen: chosen, correct: q.a, ok: ok, d: q.d, t: q.t
    });

    $("btn-next").textContent =
      (state.answers.length >= N) ? "Ver resultado" : "Próxima";
    $("btn-next").disabled = false;
  }

  function advance() {
    if (state.answers.length >= N) { finish(); return; }
    state.idx++;
    renderQuestion();
  }

  // ---------- resultado ----------
  function finish() {
    show("screen-result");
    var total = state.answers.length || N;
    var score = state.correct;

    $("score-num").textContent = score;
    $("score-den").textContent = "/ " + total;   // reflete o total real da rodada
    $("score-ring").style.setProperty("--ring", (score / total * 100) + "%");

    var pct = Math.round(score / total * 100);
    var msg;
    if (pct >= 90) msg = "Excelente! Nível avançado de consciência em segurança.";
    else if (pct >= 70) msg = "Muito bom. Você domina os fundamentos de cibersegurança.";
    else if (pct >= 50) msg = "Bom começo. Vale reforçar alguns conceitos.";
    else msg = "Atenção: recomendamos revisar os fundamentos de segurança.";
    $("result-msg").textContent = msg;

    var byTopic = {};
    state.answers.forEach(function (a) {
      byTopic[a.t] = byTopic[a.t] || { ok: 0, n: 0 };
      byTopic[a.t].n++; if (a.ok) byTopic[a.t].ok++;
    });
    var stats = $("result-stats");
    stats.innerHTML =
      '<li><span>Acertos</span><b>' + score + " / " + total + '</b></li>' +
      '<li><span>Aproveitamento</span><b>' + pct + '%</b></li>';
    Object.keys(byTopic).forEach(function (t) {
      stats.innerHTML += '<li><span>' + escapeHtml(t) + '</span><b>' +
        byTopic[t].ok + "/" + byTopic[t].n + '</b></li>';
    });

    sendResults(score, total);
    maybeShowSecret();
  }

  // ---------- envio ao Google Sheets (Apps Script) ----------
  function buildPayload(score, total) {
    return {
      timestamp: new Date().toISOString(),
      name: state.name,
      email: state.email,
      score: score,
      total: total,
      percent: Math.round(score / total * 100),
      location: state.location,
      answers: state.answers.map(function (a) {
        return { q: a.q, ok: a.ok, d: a.d, t: a.t };
      }),
      secretTriggered: secretMatches(),
      userAgent: navigator.userAgent,
      language: navigator.language
    };
  }

  function sendResults(score, total) {
    var payload = buildPayload(score, total);
    var statusEl = $("send-status");

    // backup local sempre
    try {
      var hist = JSON.parse(localStorage.getItem("cq_runs") || "[]");
      hist.push(payload);
      localStorage.setItem("cq_runs", JSON.stringify(hist));
    } catch (e) {}

    if (!CFG.endpointUrl) {
      statusEl.textContent = "Endpoint não configurado (dados salvos localmente).";
      console.log("[CyberQuiz] payload:", payload);
      return;
    }

    statusEl.textContent = "Enviando resultado…";
    var body = JSON.stringify(payload);

    // Fire-and-forget: Apps Script aceita POST text/plain sem preflight CORS.
    fetch(CFG.endpointUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: body
    }).then(function () {
      statusEl.textContent = "Resultado enviado. ✔";
    }).catch(function () {
      // fallback via sendBeacon
      try {
        var blob = new Blob([body], { type: "text/plain;charset=utf-8" });
        if (navigator.sendBeacon(CFG.endpointUrl, blob)) {
          statusEl.textContent = "Resultado enviado. ✔";
        } else {
          statusEl.textContent = "Falha no envio (dados salvos localmente).";
        }
      } catch (e2) {
        statusEl.textContent = "Falha no envio (dados salvos localmente).";
      }
    });
  }

  // ---------- função secreta ----------
  function secretMatches() {
    var s = CFG.secret;
    if (!s || !s.enabled) return false;
    if (s.alwaysShow) return true;               // aparece para todos
    var hay = normalize(state.name) + " " + normalize(state.email);
    return (s.triggerWords || []).some(function (w) {
      w = normalize(w);
      return w && hay.indexOf(w) !== -1;
    });
  }

  // Contagem por e-mail: cada usuário tem seu próprio limite neste navegador.
  function secretKey() {
    var email = normalize(state.email);
    return SECRET_KEY + ":" + (email || "anon");
  }
  function getSecretViews() {
    try { return parseInt(localStorage.getItem(secretKey()) || "0", 10) || 0; }
    catch (e) { return 0; }
  }
  function setSecretViews(n) {
    try { localStorage.setItem(secretKey(), String(n)); } catch (e) {}
  }

  function maybeShowSecret() {
    var s = CFG.secret;
    if (!secretMatches()) return;
    var views = getSecretViews();
    var max = (s.maxViews != null) ? s.maxViews : 2;
    if (views >= max) return;   // já viu o máximo => nunca mais

    $("secret-title").textContent = s.title || "Mensagem";
    $("secret-body").innerHTML = s.body || "";
    var readBtn = $("secret-read");
    readBtn.textContent = s.readLabel || "Read";
    var modal = $("secret-modal");
    modal.hidden = false;

    // conta como uma visualização assim que é exibida
    setSecretViews(views + 1);

    // Botão "Read": registra a leitura na planilha e fecha.
    readBtn.onclick = function () {
      readBtn.disabled = true;
      sendSecretRead();
      modal.hidden = true;
    };
  }

  // Registra o clique em "Read" na planilha (evento separado).
  function sendSecretRead() {
    var payload = {
      event: "secret_read",
      name: state.name,
      email: state.email,
      timestamp: new Date().toISOString()
    };
    // backup local
    try {
      var r = JSON.parse(localStorage.getItem("cq_reads") || "[]");
      r.push(payload); localStorage.setItem("cq_reads", JSON.stringify(r));
    } catch (e) {}

    if (!CFG.endpointUrl) { console.log("[CyberQuiz] secret_read:", payload); return; }
    var body = JSON.stringify(payload);
    try {
      fetch(CFG.endpointUrl, {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: body
      }).catch(function () {
        try { navigator.sendBeacon(CFG.endpointUrl, new Blob([body], { type: "text/plain;charset=utf-8" })); } catch (e2) {}
      });
    } catch (e3) {}
  }

  // ---------- fluxo inicial ----------
  function initStartScreen() {
    if (CFG.brand) { $("foot-brand").textContent = CFG.brand; }
    if (CFG.tagline) { $("tagline").textContent = CFG.tagline; }
    $("pool-meta").textContent = POOL.length + " perguntas no banco · " + N + " por rodada";

    $("form-start").addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("input-name").value.trim();
      var email = $("input-email").value.trim();
      var okName = name.length >= 2;
      var okEmail = isValidEmail(email);
      $("err-name").textContent = okName ? "" : "Informe seu nome.";
      $("err-email").textContent = okEmail ? "" : "Informe um e-mail válido.";
      if (!okName || !okEmail) return;

      state.name = name;
      state.email = email;

      var btn = $("btn-start");
      btn.disabled = true;
      btn.textContent = "Obtendo localização…";

      // Pede a localização (prompt nativo) e então começa o quiz.
      requestLocation().then(function (loc) {
        state.location = loc;
        startQuiz();
      });
    });
  }

  function startQuiz() {
    buildFirstQuestion();
    state.idx = 0;
    state.correct = 0;
    state.answers = [];
    show("screen-quiz");
    renderQuestion();
  }

  function restart() {
    // novo sorteio para a próxima run
    deckBasic = shuffle(POOL.filter(function (q) { return q.d === "b"; }));
    deckInter = shuffle(POOL.filter(function (q) { return q.d === "i"; }));
    state.run = []; state.idx = 0; state.correct = 0; state.answers = [];
    var btn = $("btn-start");
    btn.disabled = false; btn.textContent = "Iniciar quiz";
    show("screen-start");
  }

  // ---------- dissuasão de captura de tela ----------
  // IMPORTANTE: o sistema operacional ainda pode capturar a tela; isto apenas
  // dificulta cópia/menu de contexto e borra o conteúdo ao perder o foco.
  function installCaptureGuards() {
    document.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    document.addEventListener("dragstart", function (e) { e.preventDefault(); });

    function clearClip() { try { navigator.clipboard.writeText(""); } catch (e) {} }
    document.addEventListener("keyup", function (e) {
      if (e.key === "PrintScreen") clearClip();
    });
    document.addEventListener("keydown", function (e) {
      var k = (e.key || "").toLowerCase();
      if (k === "printscreen") clearClip();
      // bloqueia imprimir e atalhos comuns de captura do navegador
      if ((e.ctrlKey || e.metaKey) && (k === "p" || (e.shiftKey && k === "s"))) {
        e.preventDefault();
      }
    });

    // Borra o conteúdo quando a aba/janela perde o foco (momento típico de captura).
    var hide = function () { document.body.classList.add("cq-hide"); };
    var showAgain = function () { document.body.classList.remove("cq-hide"); };
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) hide(); else showAgain();
    });
    window.addEventListener("blur", hide);
    window.addEventListener("focus", showAgain);
  }

  // ---------- listeners ----------
  document.addEventListener("DOMContentLoaded", function () {
    if (!POOL.length) {
      $("pool-meta").textContent = "Erro: banco de perguntas não carregado.";
      return;
    }
    installCaptureGuards();
    initStartScreen();

    $("btn-next").addEventListener("click", function () {
      if (!state.locked) {
        if (state.selected === null) return;
        confirmAnswer();
      } else {
        advance();
      }
    });

    $("btn-restart").addEventListener("click", restart);
  });

})();
