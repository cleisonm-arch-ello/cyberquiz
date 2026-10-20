/*
 * CyberQuiz — Configuração
 * Edite este arquivo para ajustar o comportamento do quiz.
 * Tudo aqui é lido pelo app.js em tempo de execução.
 */
window.CYBERQUIZ_CONFIG = {

  // ---- Rodada ----
  questionsPerRun: 5,          // run única de 5 perguntas
  optionsCount: 4,             // alternativas por pergunta

  // ---- Coleta de localização ----
  // O navegador SEMPRE mostra o pedido de permissão nativo ao chamar a geolocalização.
  collectLocation: true,
  locationHighAccuracy: true,   // tenta usar GPS (localização exata) quando disponível
  locationTimeoutMs: 15000,

  // ---- Backend (Google Apps Script) ----
  // Cole aqui a URL do seu Web App do Apps Script (termina em /exec).
  // Enquanto estiver vazio, os dados ficam apenas no console/localStorage.
  endpointUrl: "https://script.google.com/macros/s/AKfycbx-5tYBetqCAnI1h0rdSZqplDmUslpcdvzai_awnzDS5aJCa6h_LCE3eVpSmQcRfYNPEQ/exec",

  // ---- Função secreta (mensagem) ----
  secret: {
    enabled: true,
    // Se true, a mensagem aparece para TODOS os usuários (ignora as palavras-gatilho).
    // Se false, só aparece quando uma palavra-gatilho casa com o nome ou o e-mail.
    alwaysShow: true,
    // Palavras-gatilho (minúsculas). Usadas apenas quando alwaysShow = false.
    triggerWords: ["julia", "gabriela", "julia gabriela", "julia gabriela silva da costa"],
    // Quantas vezes a mensagem pode aparecer, por e-mail, neste navegador.
    maxViews: 2,
    // Conteúdo da mensagem secreta (aceita HTML simples).
    title: "MENSAGEM RESERVADA",
    body: "Oi, Ju.<br>Eu recebi seu e-mail, acredite ou não, eu pensei muito antes de decidir responder. É engraçado pensar que você me enviou um e-mail e eu li justamente por isso, pois no momento eu estou sem celular, algumas coincidências parecem precisar acontecer.<br><br>Eu queria te dizer principalmente que eu não guardo nenhuma mágoa, sinceramente é difícil olhar para mim mesmo 6 anos atrás e enxergar a mesma pessoa. Queria que soubesse que houveram diversos mal-entendidos, mas que nenhum deles importa agora, e que saber que você está bem me deixa feliz.<br>Eu acompanhei alguns de seus passos até hoje, quando houve o incidente das enchentes no Rio Grande do Sul eu fiquei verdadeiramente preocupado, em meio a isso busquei ver se você estava bem, seja no TikTok ou no Instagram. Também acompanhei alguns dos seus passos profissionais, fiquei feliz quando vi que você entrou pra área de tecnologia, principalmente para a área de segurança (que eu também acho muito interessante), fiquei feliz quando vi que você se inscreveu para um concurso público para o ministério público, vi que você está indo por um bom caminho. Acima de tudo, fico feliz, e orgulhoso, você está indo muito bem.<br><br>Eu espero verdadeiramente que você esteja construindo sua vida tijolo por tijolo de forma que você olhe pra trás e fique contente com o que construiu, nós seguimos vidas diferentes agora e isso faz parte, mas saiba que eu sempre estarei torcendo pelo seu sucesso. E caso a vida nos dê a chance de nos encontrarmos em algum lugar por acaso, espero poder oferecer um sorriso e um abraço apertado como os que nunca pude oferecer.<br><br>Fique bem,<br>Ass: Sunflower.<br><br><br>PS: Essa mensagem é temporária, agradeço se tiver lido até aqui, clique no botão e saberei, obrigado.",
    // Texto do botão que registra a leitura na planilha.
    readLabel: "Read"
  },

  // ---- Textos da interface ----
  brand: "CyberQuiz",
  tagline: "Teste seus conhecimentos em Cibersegurança"
};
