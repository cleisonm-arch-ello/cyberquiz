# CyberQuiz

Quiz de cibersegurança — site estático, **mobile first**, pronto para **GitHub Pages**.

- Run única de **10 perguntas** por acesso, sorteadas de um banco de **256**
  (básicas + intermediárias), com **dificuldade que sobe conforme o desempenho**.
- Coleta **nome** e **e-mail** no início.
- Coleta a **localização** via prompt nativo do navegador.
- Envia os resultados para uma planilha do **Google Sheets** (Apps Script).
- **Função secreta** configurável (mensagem de dupla visualização).

## Arquivos

| Arquivo | Função |
|---|---|
| `index.html` | Estrutura das telas (cadastro, quiz, resultado, modal). |
| `styles.css` | Visual cyber, mobile first. |
| `app.js` | Lógica: sorteio adaptativo, localização, envio, função secreta. |
| `questions.js` | Banco de 256 perguntas. |
| `config.js` | **Onde você edita tudo** (endpoint, palavras secretas, mensagem). |
| `apps-script.gs` | Código do backend para colar no Google Apps Script. |

## 1. Configurar o backend (Google Sheets)

1. Crie uma planilha no Google Sheets.
2. **Extensões → Apps Script**, apague o conteúdo e cole o `apps-script.gs`.
3. Substitua `SHEET_ID` pelo ID da sua planilha (na URL, entre `/d/` e `/edit`).
4. **Implantar → Nova implantação → App da Web**
   - *Executar como:* **Eu**
   - *Quem tem acesso:* **Qualquer pessoa**
5. Copie a URL que termina em `/exec`.
6. Cole essa URL em `config.js` → `endpointUrl`.

Enquanto `endpointUrl` ficar vazio, os resultados são salvos só no navegador
(`localStorage`) e impressos no console — útil para testar.

## 2. Função secreta

Em `config.js`, dentro de `secret`:

```js
triggerWords: ["palavra_x", "palavra_y"],  // dispara se aparecer no nome OU no e-mail
maxViews: 2,                                 // some de vez após 2 exibições
title: "Mensagem reservada",
body: "Seu texto aqui (aceita HTML)."
```

A contagem de exibições fica em `localStorage` (por navegador). Depois de
exibida `maxViews` vezes, **nunca mais aparece** naquele navegador.

> A comparação ignora maiúsculas/minúsculas e acentos.

## 3. Localização

Ao iniciar o quiz, o navegador mostra o pedido de permissão de localização.
Se o usuário permitir, latitude/longitude/precisão vão para a planilha; se
negar, registra-se o status (`negado`/`falha`). **A geolocalização exata só
funciona em HTTPS** — e o GitHub Pages já serve em HTTPS.

## 4. Publicar no GitHub Pages

1. Crie um repositório e envie todos os arquivos (na **raiz**).
2. **Settings → Pages → Source:** branch `main`, pasta `/root`.
3. O site ficará em `https://SEU_USUARIO.github.io/NOME_DO_REPO/`.

Todos os caminhos são **relativos**, então funciona em subpasta sem ajustes.

## 5. Testar localmente

```bash
# na pasta do projeto
python3 -m http.server 8000
# abra http://localhost:8000
```

> Em `http://localhost` a localização funciona; em `file://` não.

## Ajustes rápidos

- Perguntas por rodada: `config.js → questionsPerRun`.
- Marca/subtítulo: `config.js → brand` / `tagline`.
- Adicionar perguntas: edite `questions.js` seguindo o formato do topo do arquivo.
