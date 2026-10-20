/**
 * CyberQuiz — Backend (Google Apps Script)
 * Recebe os resultados do quiz e grava em uma planilha do Google Sheets.
 * Também registra o clique no botão "Read" da mensagem (campo secret_read).
 *
 * COMO USAR
 * 1. Crie uma planilha no Google Sheets.
 * 2. Menu: Extensões > Apps Script. Apague o conteúdo e cole este arquivo.
 * 3. Troque SHEET_ID pelo ID da sua planilha (está na URL, entre /d/ e /edit).
 * 4. Implantar > Nova implantação > Tipo: "App da Web".
 *      - Executar como: Eu
 *      - Quem tem acesso: "Qualquer pessoa"
 * 5. Copie a URL que termina em /exec e cole em config.js (endpointUrl).
 *
 * IMPORTANTE: ao editar este código depois de já ter publicado, gere uma
 * NOVA VERSÃO (Implantar > Gerenciar implantações > editar > Nova versão),
 * senão o /exec continua rodando o código antigo.
 */

var SHEET_ID = "COLE_O_ID_DA_SUA_PLANILHA_AQUI";
var SHEET_NAME = "Respostas";

var HEADERS = [
  "timestamp", "nome", "email", "score", "total", "percent",
  "latitude", "longitude", "precisao_m", "loc_status",
  "secret", "idioma", "userAgent", "respostas_json", "secret_read"
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);

    var data = {};
    try { data = JSON.parse(e.postData.contents); } catch (err) { data = {}; }

    var sheet = getSheet_();
    ensureHeader_(sheet);

    // Evento: clique no botão "Read" -> marca a linha mais recente do e-mail.
    if (data.event === "secret_read") {
      markRead_(sheet, data);
      return json_({ status: "ok", event: "secret_read" });
    }

    // Caso normal: resultado do quiz.
    var loc = data.location || {};
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.score != null ? data.score : "",
      data.total != null ? data.total : "",
      data.percent != null ? data.percent : "",
      loc.lat != null ? loc.lat : "",
      loc.lng != null ? loc.lng : "",
      loc.accuracy != null ? loc.accuracy : "",
      loc.error ? loc.error : (loc.lat != null ? "ok" : ""),
      data.secretTriggered ? "SIM" : "",
      data.language || "",
      data.userAgent || "",
      JSON.stringify(data.answers || []),
      ""  // secret_read: preenchido depois, se o usuário clicar em "Read"
    ]);

    return json_({ status: "ok" });
  } catch (err) {
    return json_({ status: "error", message: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (e2) {}
  }
}

function doGet() {
  return json_({ status: "CyberQuiz endpoint online" });
}

/* ---------- helpers ---------- */

function getSheet_() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  return sh;
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    return;
  }
  // Se a planilha é antiga e não tem a coluna secret_read, adiciona.
  var lastCol = sheet.getLastColumn();
  var header = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  if (header.indexOf("secret_read") === -1) {
    sheet.getRange(1, lastCol + 1).setValue("secret_read");
  }
}

function colIndex_(sheet, name) {
  var lastCol = sheet.getLastColumn();
  var header = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  return header.indexOf(name) + 1; // 1-based; 0 se não achar
}

function markRead_(sheet, data) {
  var emailCol = colIndex_(sheet, "email");
  var readCol = colIndex_(sheet, "secret_read");
  if (readCol === 0) { ensureHeader_(sheet); readCol = colIndex_(sheet, "secret_read"); }

  var when = data.timestamp || new Date().toISOString();
  var email = (data.email || "").toString().trim().toLowerCase();
  var lastRow = sheet.getLastRow();

  // Procura de baixo para cima a linha mais recente daquele e-mail.
  if (emailCol > 0 && lastRow > 1) {
    var emails = sheet.getRange(2, emailCol, lastRow - 1, 1).getValues();
    for (var i = emails.length - 1; i >= 0; i--) {
      if ((emails[i][0] || "").toString().trim().toLowerCase() === email) {
        sheet.getRange(i + 2, readCol).setValue(when);
        return;
      }
    }
  }

  // Não achou o resultado ainda: cria uma linha mínima registrando a leitura.
  var row = new Array(sheet.getLastColumn()).fill("");
  row[0] = when;                        // timestamp
  if (colIndex_(sheet, "nome") > 0) row[colIndex_(sheet, "nome") - 1] = data.name || "";
  if (emailCol > 0) row[emailCol - 1] = data.email || "";
  row[readCol - 1] = when;              // secret_read
  sheet.appendRow(row);
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
