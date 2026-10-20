/*
 * CyberQuiz — Banco de perguntas
 * 256 perguntas de cibersegurança (básicas "b" e intermediárias "i").
 *
 * Formato de cada item:
 *   q = enunciado
 *   o = array com 4 alternativas
 *   a = índice (0-3) da alternativa correta
 *   d = dificuldade: "b" (básica) ou "i" (intermediária)
 *   t = tópico (para estatística/categorização)
 */
window.CYBERQUIZ_QUESTIONS = [

  // ===================== SENHAS & AUTENTICAÇÃO =====================
  { q:"O que torna uma senha mais forte?", o:["Ser curta e fácil de lembrar","Usar só o seu nome","Ter comprimento grande e misturar tipos de caracteres","Repetir o mesmo caractere várias vezes"], a:2, d:"b", t:"Senhas" },
  { q:"Qual destas é a PIOR escolha de senha?", o:["gX7!pq2@Lm","123456","Kf9$ve!Tz3","umaFraseLongaComEspaços"], a:1, d:"b", t:"Senhas" },
  { q:"Reutilizar a mesma senha em vários sites é perigoso porque:", o:["Deixa o computador lento","Se um site vazar, todas as contas ficam expostas","Gasta mais memória","Os sites cobram por isso"], a:1, d:"b", t:"Senhas" },
  { q:"Para que serve um gerenciador de senhas?", o:["Acelerar a internet","Criar e guardar senhas fortes e únicas com segurança","Bloquear anúncios","Formatar o disco"], a:1, d:"b", t:"Senhas" },
  { q:"O que é autenticação de dois fatores (2FA)?", o:["Usar duas senhas iguais","Uma segunda prova de identidade além da senha","Trocar a senha a cada dois dias","Ter duas contas de e-mail"], a:1, d:"b", t:"Senhas" },
  { q:"Qual é um exemplo de segundo fator de autenticação?", o:["Repetir a senha","Um código enviado por app autenticador","O nome do usuário","A cor do tema do site"], a:1, d:"b", t:"Senhas" },
  { q:"Por que não se deve anotar senhas em bilhetes na mesa?", o:["Estraga o papel","Qualquer pessoa que passar pode vê-las","Ocupa espaço","O monitor esquenta"], a:1, d:"b", t:"Senhas" },
  { q:"Uma 'frase-senha' (passphrase) é geralmente:", o:["Mais fraca que 8 caracteres","Longa e mais fácil de lembrar que senhas aleatórias curtas","Proibida pela maioria dos sites","Igual ao login"], a:1, d:"b", t:"Senhas" },
  { q:"O que você deve fazer se suspeitar que sua senha vazou?", o:["Esperar para ver o que acontece","Trocá-la imediatamente e ativar 2FA","Compartilhar com um amigo para confirmar","Desligar o Wi-Fi"], a:1, d:"b", t:"Senhas" },
  { q:"Entre os métodos abaixo, qual é o 2FA MAIS resistente a phishing?", o:["SMS","E-mail","Chave de segurança física (FIDO2/U2F)","Pergunta secreta"], a:2, d:"i", t:"Senhas" },
  { q:"Por que o 2FA por SMS é considerado menos seguro que um app autenticador?", o:["O SMS é mais caro","SMS pode ser interceptado via SIM swap","Apps são ilegais","SMS não funciona em celular"], a:1, d:"i", t:"Senhas" },
  { q:"O que é 'credential stuffing'?", o:["Criar senhas longas","Testar em massa pares usuário/senha vazados em outros sites","Criptografar credenciais","Um tipo de firewall"], a:1, d:"i", t:"Senhas" },
  { q:"Um 'salt' em armazenamento de senhas serve para:", o:["Deixar o login mais rápido","Impedir que senhas iguais gerem o mesmo hash","Criptografar o disco inteiro","Comprimir o banco de dados"], a:1, d:"i", t:"Senhas" },
  { q:"Por que senhas devem ser guardadas como hash, e não em texto puro?", o:["Para economizar espaço","Para que, em caso de vazamento, não sejam legíveis diretamente","Porque hash é mais rápido de digitar","Para permitir login sem senha"], a:1, d:"i", t:"Senhas" },
  { q:"Qual algoritmo é apropriado para hashing de SENHAS?", o:["MD5","SHA-1","bcrypt/argon2","Base64"], a:2, d:"i", t:"Senhas" },
  { q:"O que caracteriza a autenticação sem senha (passkey/WebAuthn)?", o:["Usar sempre a mesma senha mestra","Chaves criptográficas no dispositivo em vez de senha digitada","Login só com nome de usuário","Enviar a senha por e-mail"], a:1, d:"i", t:"Senhas" },
  { q:"Política de 'trocar a senha a cada 30 dias' hoje é considerada:", o:["Sempre a melhor prática","Muitas vezes contraproducente, salvo indício de comprometimento","Obrigatória por lei em todo lugar","Capaz de impedir phishing"], a:1, d:"i", t:"Senhas" },
  { q:"Single Sign-On (SSO) significa:", o:["Uma senha para cada site","Autenticar uma vez e acessar vários serviços","Login apenas por biometria","Nunca precisar autenticar"], a:1, d:"i", t:"Senhas" },

  // ===================== PHISHING & ENGENHARIA SOCIAL =====================
  { q:"O que é phishing?", o:["Um tipo de antivírus","Tentativa de enganar alguém para roubar dados ou credenciais","Um protocolo de rede","Uma técnica de backup"], a:1, d:"b", t:"Phishing" },
  { q:"Um e-mail diz que você ganhou um prêmio e pede seus dados bancários. O que fazer?", o:["Responder rápido para garantir o prêmio","Ignorar/apagar; provavelmente é golpe","Clicar no link para conferir","Encaminhar para todos os amigos"], a:1, d:"b", t:"Phishing" },
  { q:"Sinal comum de e-mail de phishing:", o:["Vem do seu próprio contato salvo","Urgência exagerada e pedido de dados sensíveis","Não tem links","É escrito sem erros"], a:1, d:"b", t:"Phishing" },
  { q:"Antes de clicar em um link, é boa prática:", o:["Clicar sempre para ver aonde vai","Passar o mouse e conferir o endereço real","Desligar o monitor","Aumentar o volume"], a:1, d:"b", t:"Phishing" },
  { q:"O que é engenharia social?", o:["Construir redes de computadores","Manipular pessoas para obter informação ou acesso","Programar sites","Um tipo de criptografia"], a:1, d:"b", t:"Phishing" },
  { q:"Alguém liga dizendo ser do 'suporte técnico' e pede sua senha. Você deve:", o:["Fornecer, pois é o suporte","Nunca informar a senha; suporte legítimo não a pede","Pedir para ele repetir e então informar","Informar só a metade da senha"], a:1, d:"b", t:"Phishing" },
  { q:"'Smishing' é phishing realizado por:", o:["E-mail","Mensagens de texto/SMS","Carta impressa","Rádio"], a:1, d:"b", t:"Phishing" },
  { q:"'Vishing' é o golpe feito por:", o:["Vídeo","Chamada de voz/telefone","Fax","Impressora"], a:1, d:"b", t:"Phishing" },
  { q:"Um boleto recebido por e-mail deve ser pago quando:", o:["O valor é alto","Você confirma a origem e os dados do beneficiário","O e-mail parece bonito","Tem um logo colorido"], a:1, d:"b", t:"Phishing" },
  { q:"O que é 'spear phishing'?", o:["Phishing em massa aleatório","Ataque direcionado a uma pessoa/organização específica","Phishing por telefone","Um antivírus"], a:1, d:"i", t:"Phishing" },
  { q:"'Whaling' refere-se a ataques direcionados a:", o:["Usuários comuns","Altos executivos (alvos de alto valor)","Servidores de e-mail","Roteadores"], a:1, d:"i", t:"Phishing" },
  { q:"O que é 'Business Email Compromise' (BEC)?", o:["Spam publicitário","Fraude em que o atacante se passa por executivo/fornecedor para desviar pagamentos","Um filtro antispam","Backup de e-mails"], a:1, d:"i", t:"Phishing" },
  { q:"Um domínio como 'micros0ft-login.com' é suspeito porque:", o:["É curto demais","Imita uma marca com variação enganosa (typosquatting)","Usa HTTPS","Termina em .com"], a:1, d:"i", t:"Phishing" },
  { q:"Por que registros SPF, DKIM e DMARC ajudam contra phishing?", o:["Aceleram o envio de e-mails","Ajudam a autenticar o remetente e reduzir falsificação","Criptografam o anexo","Bloqueiam imagens"], a:1, d:"i", t:"Phishing" },
  { q:"Um anexo inesperado de '.docm' ou '.xlsm' é arriscado porque:", o:["Ocupa muito espaço","Pode conter macros maliciosas","Não abre no celular","É sempre vírus garantido"], a:1, d:"i", t:"Phishing" },
  { q:"Pretexting, na engenharia social, é:", o:["Escrever código antes do projeto","Criar um cenário/identidade falsa para obter confiança e dados","Pré-carregar um site","Um tipo de senha"], a:1, d:"i", t:"Phishing" },
  { q:"'Quishing' explora qual elemento?", o:["Códigos QR maliciosos","Fones de ouvido","Teclados","Impressoras 3D"], a:0, d:"i", t:"Phishing" },
  { q:"Melhor resposta ao receber e-mail suspeito no trabalho:", o:["Apagar sem avisar ninguém","Reportar à equipe de segurança/TI pelo canal oficial","Responder pedindo que parem","Clicar para investigar"], a:1, d:"i", t:"Phishing" },

  // ===================== MALWARE =====================
  { q:"O que é malware?", o:["Um hardware novo","Software malicioso criado para causar dano ou roubo","Um navegador","Um tipo de cabo"], a:1, d:"b", t:"Malware" },
  { q:"O que é um vírus de computador?", o:["Um programa que se replica infectando arquivos/sistemas","Uma peça física","Um e-mail comum","Uma atualização do sistema"], a:0, d:"b", t:"Malware" },
  { q:"Ransomware normalmente:", o:["Deixa o PC mais rápido","Criptografa seus arquivos e exige resgate","Faz backup automático","Melhora a bateria"], a:1, d:"b", t:"Malware" },
  { q:"Melhor defesa prática contra ransomware:", o:["Pagar sempre o resgate","Manter backups offline e atualizados","Desligar o antivírus","Abrir todos os anexos"], a:1, d:"b", t:"Malware" },
  { q:"Um 'trojan' (cavalo de Troia) é:", o:["Um programa que se disfarça de legítimo para enganar o usuário","Um cabo de rede","Uma senha forte","Um firewall"], a:0, d:"b", t:"Malware" },
  { q:"Para reduzir risco de malware, você deve baixar programas:", o:["De qualquer site que aparecer","De fontes oficiais e confiáveis","Só por torrents","De anúncios pop-up"], a:1, d:"b", t:"Malware" },
  { q:"Um antivírus ajuda principalmente a:", o:["Aumentar a internet","Detectar e bloquear softwares maliciosos","Criar sites","Carregar o celular"], a:1, d:"b", t:"Malware" },
  { q:"Pop-up dizendo 'seu PC está infectado, clique aqui' geralmente é:", o:["Um aviso confiável do sistema","Um golpe (scareware) para instalar malware","Uma atualização oficial","Um antivírus grátis seguro"], a:1, d:"b", t:"Malware" },
  { q:"O que é spyware?", o:["Software que espiona e coleta dados do usuário sem consentimento","Um protetor de tela","Um gerenciador de senhas","Um tipo de backup"], a:0, d:"b", t:"Malware" },
  { q:"Diferença entre vírus e 'worm':", o:["Não há diferença","Worm se propaga sozinho pela rede, sem precisar de arquivo hospedeiro","Vírus é sempre pior","Worm só afeta impressoras"], a:1, d:"i", t:"Malware" },
  { q:"O que é um 'keylogger'?", o:["Um teclado ergonômico","Programa que registra as teclas digitadas","Um atalho de teclado","Um backup de senhas"], a:1, d:"i", t:"Malware" },
  { q:"O que é um 'rootkit'?", o:["Kit de ferramentas de rede","Malware que se oculta no sistema para manter acesso privilegiado","Uma raiz de servidor","Um cabo especial"], a:1, d:"i", t:"Malware" },
  { q:"O que é uma 'botnet'?", o:["Rede de dispositivos infectados controlados remotamente","Um robô doméstico","Uma rede Wi-Fi caseira","Um site de compras"], a:0, d:"i", t:"Malware" },
  { q:"Ataque de 'dia zero' (zero-day) explora:", o:["Uma falha ainda sem correção conhecida pelo fornecedor","Senhas fracas apenas","Backups antigos","Cabos de rede"], a:0, d:"i", t:"Malware" },
  { q:"Malware 'fileless' é perigoso porque:", o:["Ocupa muito disco","Opera na memória, dificultando detecção por antivírus tradicional","Só afeta papel","É visível facilmente"], a:1, d:"i", t:"Malware" },
  { q:"Por que pagar resgate de ransomware é desaconselhado?", o:["É barato","Não garante recuperação e financia novos ataques","Deixa o PC rápido","É obrigatório por lei"], a:1, d:"i", t:"Malware" },
  { q:"O que faz um 'dropper'?", o:["Derruba a internet","Instala ou baixa outro malware no sistema","Protege contra vírus","Faz backup"], a:1, d:"i", t:"Malware" },
  { q:"Sandbox, no contexto de segurança, serve para:", o:["Jogar na areia","Executar código suspeito isolado para observar seu comportamento","Acelerar downloads","Guardar senhas"], a:1, d:"i", t:"Malware" },

  // ===================== REDES & WI-FI =====================
  { q:"Usar Wi-Fi público aberto é arriscado porque:", o:["É sempre rápido","Terceiros podem interceptar seu tráfego não criptografado","Gasta bateria","Precisa de senha"], a:1, d:"b", t:"Redes" },
  { q:"O que uma VPN faz principalmente?", o:["Cria um túnel criptografado para o seu tráfego","Aumenta a velocidade sempre","Remove vírus","Carrega o celular"], a:0, d:"b", t:"Redes" },
  { q:"Qual padrão de segurança de Wi-Fi é o mais recomendado hoje?", o:["WEP","WPA","WPA2/WPA3","Rede aberta"], a:2, d:"b", t:"Redes" },
  { q:"O roteador novo veio com senha de admin padrão. Você deve:", o:["Mantê-la para não esquecer","Trocar por uma senha forte","Divulgá-la aos vizinhos","Desligar o roteador"], a:1, d:"b", t:"Redes" },
  { q:"O que é um firewall?", o:["Uma parede física","Sistema que filtra o tráfego de rede conforme regras","Um antivírus","Um cabo"], a:1, d:"b", t:"Redes" },
  { q:"Rede Wi-Fi gratuita 'FreeWiFi_Aeroporto' sem dono conhecido pode ser:", o:["Sempre segura","Um ponto de acesso falso (evil twin) para capturar dados","Mais rápida que a paga","Criptografada por padrão"], a:1, d:"b", t:"Redes" },
  { q:"Para visitas em casa/empresa, boa prática é oferecer:", o:["Sua senha principal","Uma rede de convidados separada","Acesso de administrador","O cabo do seu PC"], a:1, d:"b", t:"Redes" },
  { q:"O protocolo WEP não deve ser usado porque:", o:["É muito novo","É facilmente quebrável e obsoleto","Não tem senha","É caro"], a:1, d:"i", t:"Redes" },
  { q:"O que é um ataque 'Man-in-the-Middle' (MitM)?", o:["Um usuário no meio da fila","Interceptar/alterar a comunicação entre duas partes","Um tipo de backup","Um firewall"], a:1, d:"i", t:"Redes" },
  { q:"O que faz uma VPN NÃO garantir?", o:["Criptografia do túnel","Anonimato absoluto e imunidade a malware","Ocultar o IP do destino","Proteção em Wi-Fi público"], a:1, d:"i", t:"Redes" },
  { q:"Segmentação de rede (VLANs) ajuda a:", o:["Aumentar a conta de luz","Isolar sistemas e limitar a propagação de ataques","Deixar tudo na mesma rede","Remover o firewall"], a:1, d:"i", t:"Redes" },
  { q:"Um ataque DDoS tem como objetivo:", o:["Roubar senhas","Sobrecarregar um serviço para torná-lo indisponível","Criptografar arquivos","Criar backups"], a:1, d:"i", t:"Redes" },
  { q:"DNS spoofing/poisoning consiste em:", o:["Acelerar o DNS","Redirecionar um domínio para um IP malicioso","Criptografar o DNS","Fazer backup do DNS"], a:1, d:"i", t:"Redes" },
  { q:"Por que desativar WPS no roteador pode aumentar a segurança?", o:["WPS deixa a rede lenta","O PIN do WPS é vulnerável a ataques de força bruta","WPS consome muita energia","WPS bloqueia a internet"], a:1, d:"i", t:"Redes" },
  { q:"A porta padrão do HTTPS é:", o:["21","80","443","25"], a:2, d:"i", t:"Redes" },
  { q:"Um IDS (Intrusion Detection System) serve para:", o:["Bloquear energia","Detectar atividades suspeitas na rede e alertar","Criptografar discos","Trocar senhas"], a:1, d:"i", t:"Redes" },

  // ===================== CRIPTOGRAFIA =====================
  { q:"Criptografia serve basicamente para:", o:["Acelerar o PC","Proteger a confidencialidade/integridade da informação","Aumentar o brilho da tela","Instalar programas"], a:1, d:"b", t:"Criptografia" },
  { q:"HTTPS indica que a conexão com o site é:", o:["Mais lenta","Criptografada em trânsito","Gratuita","Sem anúncios"], a:1, d:"b", t:"Criptografia" },
  { q:"O cadeado na barra do navegador significa que:", o:["O site é 100% confiável e seguro","A conexão usa criptografia (TLS)","O site não tem vírus","O site é oficial do governo"], a:1, d:"b", t:"Criptografia" },
  { q:"Criptografar o disco do notebook ajuda a:", o:["Deixar a bateria maior","Proteger os dados caso o aparelho seja perdido/roubado","Aumentar a tela","Remover arquivos"], a:1, d:"b", t:"Criptografia" },
  { q:"Na criptografia simétrica:", o:["Usa-se a mesma chave para cifrar e decifrar","Usa-se par de chaves pública/privada","Não há chave","A chave é sempre pública"], a:0, d:"i", t:"Criptografia" },
  { q:"Na criptografia assimétrica:", o:["A mesma chave faz tudo","Há uma chave pública e uma privada","Não se usa chave","Só funciona offline"], a:1, d:"i", t:"Criptografia" },
  { q:"Uma função de hash criptográfica é:", o:["Reversível facilmente","Unidirecional: difícil obter a entrada a partir da saída","Um tipo de senha","Um protocolo de rede"], a:1, d:"i", t:"Criptografia" },
  { q:"Assinatura digital garante principalmente:", o:["Velocidade","Autenticidade e integridade do conteúdo","Anonimato","Compressão"], a:1, d:"i", t:"Criptografia" },
  { q:"Um certificado digital (TLS) é emitido por:", o:["Qualquer usuário","Uma Autoridade Certificadora (CA) confiável","O provedor de energia","O fabricante do mouse"], a:1, d:"i", t:"Criptografia" },
  { q:"'End-to-end encryption' (E2EE) significa que:", o:["O provedor lê tudo","Só remetente e destinatário conseguem ler o conteúdo","A mensagem não é criptografada","O governo tem a chave"], a:1, d:"i", t:"Criptografia" },
  { q:"Por que MD5 não deve ser usado para integridade crítica?", o:["É muito lento","É vulnerável a colisões","Não existe mais","Ocupa muito espaço"], a:1, d:"i", t:"Criptografia" },
  { q:"'Perfect Forward Secrecy' garante que:", o:["A chave nunca muda","O vazamento de uma chave não compromete sessões passadas","Não há criptografia","A senha é eterna"], a:1, d:"i", t:"Criptografia" },

  // ===================== NAVEGAÇÃO WEB & HTTPS =====================
  { q:"Antes de digitar dados de cartão em um site, confira se o endereço:", o:["Tem muitas cores","Começa com https e é o domínio correto","Tem vídeos","É curto"], a:1, d:"b", t:"Navegação" },
  { q:"Baixar 'cracks' de programas pagos é arriscado porque:", o:["São lentos","Frequentemente vêm com malware","São caros","Não funcionam offline"], a:1, d:"b", t:"Navegação" },
  { q:"Extensões de navegador devem ser instaladas:", o:["De qualquer lugar","Apenas de lojas oficiais e com boa reputação","Só por e-mail","Sem ler permissões"], a:1, d:"b", t:"Navegação" },
  { q:"Cookies de sites servem principalmente para:", o:["Infectar o PC","Guardar preferências/sessão do usuário","Aumentar a internet","Apagar arquivos"], a:1, d:"b", t:"Navegação" },
  { q:"Navegar em modo anônimo/privado:", o:["Torna você invisível na internet","Apenas não salva histórico local; o provedor/site ainda pode ver","Remove vírus","Criptografa tudo"], a:1, d:"b", t:"Navegação" },
  { q:"Um site só com HTTP (sem S) ao pedir login indica que:", o:["É mais seguro","As credenciais trafegam sem criptografia","É oficial","Tem antivírus"], a:1, d:"b", t:"Navegação" },
  { q:"O que é 'typosquatting'?", o:["Erro de digitação do usuário","Registrar domínios parecidos com os de marcas para enganar","Um tipo de cookie","Uma extensão útil"], a:1, d:"i", t:"Navegação" },
  { q:"XSS (Cross-Site Scripting) é uma falha em que:", o:["O servidor cai","Scripts maliciosos são injetados e executados no navegador da vítima","A senha expira","O DNS falha"], a:1, d:"i", t:"Navegação" },
  { q:"'Clickjacking' engana o usuário a:", o:["Digitar rápido","Clicar em algo oculto/disfarçado na página","Fechar o navegador","Reiniciar o PC"], a:1, d:"i", t:"Navegação" },
  { q:"HSTS (HTTP Strict Transport Security) serve para:", o:["Forçar o navegador a usar sempre HTTPS no domínio","Acelerar imagens","Bloquear cookies","Remover anúncios"], a:0, d:"i", t:"Navegação" },
  { q:"Um aviso de 'certificado inválido/expirado' significa que você deve:", o:["Ignorar e continuar sempre","Ter cautela; a identidade do site não pôde ser verificada","Reiniciar o modem","Trocar a senha do Wi-Fi"], a:1, d:"i", t:"Navegação" },
  { q:"SQL Injection ataca principalmente:", o:["O teclado","A camada de banco de dados por entradas não tratadas","O monitor","O cabo de rede"], a:1, d:"i", t:"Navegação" },

  // ===================== PRIVACIDADE & LGPD =====================
  { q:"A LGPD (Lei Geral de Proteção de Dados) regula:", o:["O trânsito","O tratamento de dados pessoais no Brasil","Impostos de importação","Horário comercial"], a:1, d:"b", t:"Privacidade" },
  { q:"Dado pessoal é, por exemplo:", o:["A cor de um botão","Nome, CPF, e-mail de uma pessoa","O clima","Um número aleatório sem dono"], a:1, d:"b", t:"Privacidade" },
  { q:"Compartilhar excessivamente nas redes sociais pode levar a:", o:["Mais bateria","Golpes direcionados e exposição de dados","Internet mais rápida","Menos spam"], a:1, d:"b", t:"Privacidade" },
  { q:"Antes de instalar um app, é prudente verificar:", o:["A cor do ícone","As permissões que ele solicita","O tamanho da fonte","A data de hoje"], a:1, d:"b", t:"Privacidade" },
  { q:"Se um app de lanterna pede acesso a contatos e localização, isso é:", o:["Normal e necessário","Um sinal de alerta de coleta excessiva","Obrigatório","Sinal de app rápido"], a:1, d:"b", t:"Privacidade" },
  { q:"Dado pessoal 'sensível' na LGPD inclui:", o:["Marca do celular","Origem racial, saúde, biometria, opinião política","Cor favorita","Número do sapato"], a:1, d:"i", t:"Privacidade" },
  { q:"'Minimização de dados' significa:", o:["Coletar o máximo possível","Coletar apenas os dados necessários à finalidade","Nunca coletar nada","Comprimir arquivos"], a:1, d:"i", t:"Privacidade" },
  { q:"Na LGPD, o 'titular' dos dados é:", o:["A empresa que coleta","A pessoa a quem os dados se referem","O governo","O provedor de nuvem"], a:1, d:"i", t:"Privacidade" },
  { q:"Base legal comum para tratar dados na LGPD é:", o:["Curiosidade","Consentimento do titular ou outra hipótese legal","Sorteio","Cor do site"], a:1, d:"i", t:"Privacidade" },
  { q:"Pseudonimização é:", o:["Apagar tudo","Substituir identificadores de modo que o dado não ligue diretamente à pessoa sem info adicional","Criptografar o disco","Publicar os dados"], a:1, d:"i", t:"Privacidade" },
  { q:"Em caso de incidente de dados relevante, a LGPD exige:", o:["Silêncio","Comunicação à ANPD e aos titulares afetados","Formatar servidores","Trocar de empresa"], a:1, d:"i", t:"Privacidade" },
  { q:"'Privacy by design' quer dizer:", o:["Privacidade adicionada só no fim","Considerar privacidade desde a concepção do sistema","Design bonito","Sem privacidade"], a:1, d:"i", t:"Privacidade" },

  // ===================== DISPOSITIVOS MÓVEIS =====================
  { q:"Para proteger o celular, você deve:", o:["Deixar sem bloqueio","Usar PIN/biometria e bloqueio automático","Anotar o PIN na capa","Desativar atualizações"], a:1, d:"b", t:"Mobile" },
  { q:"Apps devem ser baixados preferencialmente:", o:["De links de SMS","Das lojas oficiais (App Store/Play Store)","De sites aleatórios","De anúncios"], a:1, d:"b", t:"Mobile" },
  { q:"Se perder o celular, um recurso útil é:", o:["Comprar outro e esquecer","'Buscar meu dispositivo' para localizar/apagar remotamente","Postar nas redes","Desligar o Wi-Fi de casa"], a:1, d:"b", t:"Mobile" },
  { q:"Atualizações do sistema do celular:", o:["São inúteis","Corrigem falhas de segurança e devem ser aplicadas","Só gastam dados","Deixam o app feio"], a:1, d:"b", t:"Mobile" },
  { q:"Conceder a um app permissão de 'acessibilidade' sem necessidade é arriscado porque:", o:["Deixa o app colorido","Permite ler tela e simular toques, útil a malwares","Aumenta a bateria","Bloqueia ligações"], a:1, d:"i", t:"Mobile" },
  { q:"'Jailbreak'/'root' no dispositivo normalmente:", o:["Aumenta a segurança","Remove proteções do sistema e amplia a superfície de ataque","É recomendado por fabricantes","Não muda nada"], a:1, d:"i", t:"Mobile" },
  { q:"Carregar o celular em porta USB pública desconhecida pode expor a:", o:["Bateria infinita","'Juice jacking' (roubo de dados pela porta)","Internet grátis","Atualização automática"], a:1, d:"i", t:"Mobile" },
  { q:"MDM (Mobile Device Management) é usado por empresas para:", o:["Jogar no celular","Gerenciar políticas de segurança em dispositivos corporativos","Aumentar a tela","Trocar o chip"], a:1, d:"i", t:"Mobile" },
  { q:"Bluetooth ligado o tempo todo em locais públicos:", o:["Melhora o sinal","Amplia a superfície de ataque; melhor desligar quando não usar","É obrigatório","Carrega o aparelho"], a:1, d:"i", t:"Mobile" },

  // ===================== BACKUP & RECUPERAÇÃO =====================
  { q:"Por que fazer backup é importante?", o:["Para deixar o PC lento","Para recuperar dados após perda, falha ou ataque","Para gastar espaço","Não é importante"], a:1, d:"b", t:"Backup" },
  { q:"A regra de backup '3-2-1' sugere:", o:["3 senhas, 2 PCs, 1 mouse","3 cópias, 2 mídias diferentes, 1 fora do local","3 dias sem backup","1 cópia só"], a:1, d:"b", t:"Backup" },
  { q:"Um bom backup deve ser testado:", o:["Nunca","Periodicamente, restaurando para validar","Só depois de perder tudo","Uma vez na vida"], a:1, d:"b", t:"Backup" },
  { q:"Backup conectado o tempo todo ao PC pode ser:", o:["Mais seguro contra ransomware","Também criptografado por ransomware junto","Impossível de infectar","Mais rápido sempre"], a:1, d:"i", t:"Backup" },
  { q:"Backup 'imutável' (WORM) significa que os dados:", o:["Podem ser apagados por qualquer um","Não podem ser alterados/excluídos por um período","São sempre públicos","Não têm cópia"], a:1, d:"i", t:"Backup" },
  { q:"RPO (Recovery Point Objective) representa:", o:["O tempo para religar o PC","Quanto de dado (em tempo) se aceita perder","O preço do backup","A cor do disco"], a:1, d:"i", t:"Backup" },
  { q:"RTO (Recovery Time Objective) representa:", o:["O tamanho do arquivo","O tempo máximo aceitável para restabelecer um serviço","A senha do backup","O número de cópias"], a:1, d:"i", t:"Backup" },

  // ===================== ATUALIZAÇÕES & VULNERABILIDADES =====================
  { q:"Manter o sistema atualizado ajuda porque:", o:["Deixa tudo mais bonito","Corrige vulnerabilidades conhecidas","Aumenta a propaganda","Remove arquivos"], a:1, d:"b", t:"Atualizações" },
  { q:"Usar um sistema sem suporte (fim de vida) é arriscado porque:", o:["Fica mais rápido","Não recebe mais correções de segurança","Economiza energia","É mais bonito"], a:1, d:"b", t:"Atualizações" },
  { q:"Atualizações automáticas, quando possível, são:", o:["Perigosas sempre","Recomendadas para aplicar correções rapidamente","Inúteis","Proibidas"], a:1, d:"b", t:"Atualizações" },
  { q:"'Patch' de segurança é:", o:["Um adesivo","Correção de software que elimina uma falha","Um vírus","Um backup"], a:1, d:"b", t:"Atualizações" },
  { q:"O que é um CVE?", o:["Um antivírus","Identificador público padronizado de uma vulnerabilidade","Um tipo de cabo","Um firewall"], a:1, d:"i", t:"Atualizações" },
  { q:"'Gestão de vulnerabilidades' envolve:", o:["Ignorar falhas","Identificar, priorizar e corrigir falhas continuamente","Só instalar antivírus","Trocar o mouse"], a:1, d:"i", t:"Atualizações" },
  { q:"Por que priorizar patches por criticidade (ex.: CVSS)?", o:["Para gastar tempo","Para corrigir primeiro o que traz maior risco","Porque é bonito","Para evitar backup"], a:1, d:"i", t:"Atualizações" },
  { q:"Uma 'vulnerabilidade' é diferente de um 'exploit' porque:", o:["São a mesma coisa","Vulnerabilidade é a falha; exploit é o que a aproveita","Exploit é o antivírus","Vulnerabilidade é um cabo"], a:1, d:"i", t:"Atualizações" },

  // ===================== SEGURANÇA FÍSICA & BOAS PRÁTICAS =====================
  { q:"Ao se afastar do computador no trabalho, você deve:", o:["Deixar aberto","Bloquear a tela (Win+L / Ctrl+Cmd+Q)","Desligar o monitor só","Aumentar o brilho"], a:1, d:"b", t:"Boas práticas" },
  { q:"Documentos sigilosos impressos devem ser descartados:", o:["No lixo comum","Fragmentados (picotadora)","Deixados na mesa","Enviados por e-mail"], a:1, d:"b", t:"Boas práticas" },
  { q:"'Shoulder surfing' é:", o:["Esporte aquático","Alguém espiando sua tela/digitação por cima do ombro","Um app","Um backup"], a:1, d:"b", t:"Boas práticas" },
  { q:"Encontrou um pen drive no chão da empresa. O certo é:", o:["Plugar para ver o dono","Não conectar e entregar à TI/segurança","Levar para casa e usar","Formatar e usar"], a:1, d:"b", t:"Boas práticas" },
  { q:"'Tailgating' (carona), em segurança física, é:", o:["Dirigir colado","Entrar em área restrita atrás de alguém autorizado","Um tipo de senha","Um backup"], a:1, d:"i", t:"Boas práticas" },
  { q:"Política de 'mesa limpa' (clean desk) visa:", o:["Decoração","Evitar exposição de informações sensíveis deixadas à vista","Economizar papel","Aumentar produtividade apenas"], a:1, d:"i", t:"Boas práticas" },
  { q:"Princípio do menor privilégio significa:", o:["Todos são admin","Cada um tem apenas os acessos necessários para a função","Ninguém acessa nada","Senhas iguais para todos"], a:1, d:"i", t:"Boas práticas" },
  { q:"'Separação de funções' (segregation of duties) ajuda a:", o:["Deixar mais rápido","Evitar que uma só pessoa controle todo um processo crítico","Reduzir backups","Aumentar privilégios"], a:1, d:"i", t:"Boas práticas" },

  // ===================== NUVEM & E-MAIL =====================
  { q:"Ao usar serviços de nuvem, ativar 2FA na conta é:", o:["Desnecessário","Altamente recomendado","Proibido","Só para empresas"], a:1, d:"b", t:"Nuvem" },
  { q:"Compartilhar um link de arquivo como 'qualquer pessoa com o link' significa:", o:["Só você acessa","Qualquer um com o link pode acessar","Precisa de senha sempre","Está criptografado"], a:1, d:"b", t:"Nuvem" },
  { q:"Spam é:", o:["E-mail desejado","Mensagens não solicitadas em massa","Um antivírus","Um backup"], a:1, d:"b", t:"Nuvem" },
  { q:"Um anexo de remetente desconhecido deve ser:", o:["Aberto imediatamente","Tratado com cautela; não abrir sem verificar","Encaminhado a todos","Impresso"], a:1, d:"b", t:"Nuvem" },
  { q:"No modelo de responsabilidade compartilhada em nuvem:", o:["O provedor cuida de tudo","Provedor e cliente dividem responsabilidades de segurança","O cliente cuida de tudo","Ninguém é responsável"], a:1, d:"i", t:"Nuvem" },
  { q:"Um 'bucket' de armazenamento mal configurado pode:", o:["Acelerar o site","Expor dados publicamente na internet","Criptografar tudo","Fazer backup"], a:1, d:"i", t:"Nuvem" },
  { q:"Por que revisar permissões de compartilhamento periodicamente?", o:["Por estética","Acessos antigos/excessivos aumentam o risco de vazamento","Para gastar tempo","Para lotar a nuvem"], a:1, d:"i", t:"Nuvem" },
  { q:"'Shadow IT' refere-se a:", o:["TI noturna","Uso de serviços/apps não aprovados pela organização","Um antivírus","Backup em fita"], a:1, d:"i", t:"Nuvem" },

  // ===================== SENHAS & AUTENTICAÇÃO (parte 2) =====================
  { q:"Qual combinação forma a senha mais segura?", o:["Data de nascimento","Palavra do dicionário","Frase longa com símbolos e números","Nome do pet"], a:2, d:"b", t:"Senhas" },
  { q:"Compartilhar a senha com um colega de confiança é:", o:["Aceitável se for amigo","Má prática: cada pessoa deve ter credencial própria","Obrigatório em equipe","Recomendado pela TI"], a:1, d:"b", t:"Senhas" },
  { q:"Se um site oferece 2FA, o ideal é:", o:["Ignorar","Ativar sempre","Ativar só se for banco","Desativar para agilizar"], a:1, d:"b", t:"Senhas" },
  { q:"Perguntas de segurança (nome da mãe, etc.) são fracas porque:", o:["São difíceis","Muitas respostas são públicas ou descobríveis","Ninguém usa","Expiram rápido"], a:1, d:"i", t:"Senhas" },
  { q:"Biometria (impressão digital/face) é melhor pensada como:", o:["Substituta de tudo","Um fator de conveniência, de preferência somado a outro","Mais fraca que senha","Impossível de burlar"], a:1, d:"i", t:"Senhas" },
  { q:"Um token TOTP (app autenticador) gera códigos baseados em:", o:["Sua localização","Tempo + segredo compartilhado","Seu IP","A cor da tela"], a:1, d:"i", t:"Senhas" },
  { q:"Por que não reaproveitar a senha do e-mail pessoal no trabalho?", o:["Fica mais lenta","Comprometer uma expõe a outra; contas devem ser isoladas","É proibido por lei","Gasta a senha"], a:1, d:"i", t:"Senhas" },

  // ===================== PHISHING & ENGENHARIA SOCIAL (parte 2) =====================
  { q:"Um 'presente urgente do chefe' pedindo compra de cartões-presente é típico de:", o:["Promoção legítima","Golpe de engenharia social","Sorteio da empresa","Atualização de sistema"], a:1, d:"b", t:"Phishing" },
  { q:"O remetente parece legítimo, mas o endereço real é estranho. Isso é:", o:["Normal","Spoofing/falsificação de remetente","Um recurso novo","Sinal de segurança"], a:1, d:"b", t:"Phishing" },
  { q:"Link encurtado inesperado deve ser:", o:["Clicado sempre","Verificado/expandido antes de abrir","Compartilhado logo","Fixado nos favoritos"], a:1, d:"b", t:"Phishing" },
  { q:"'Baiting' usa como isca:", o:["Nada","Algo atraente (ex.: pen drive 'perdido', download grátis)","Senhas fortes","Firewalls"], a:1, d:"i", t:"Phishing" },
  { q:"Uma página de login idêntica à do banco em domínio diferente é:", o:["Site oficial espelho","Página falsa de captura de credenciais","Cache do navegador","Modo escuro"], a:1, d:"i", t:"Phishing" },
  { q:"Por que atacantes criam senso de urgência?", o:["Para ajudar","Para reduzir seu pensamento crítico e forçar ação rápida","Para ser educado","Para economizar tempo"], a:1, d:"i", t:"Phishing" },
  { q:"Treinamentos de phishing simulado servem para:", o:["Punir funcionários","Treinar e medir a conscientização da equipe","Gerar spam","Testar a internet"], a:1, d:"i", t:"Phishing" },
  { q:"Receber 2FA que você não pediu repetidamente pode indicar:", o:["Erro do app","Tentativa de 'MFA fatigue' (alguém tem sua senha)","Bateria fraca","Atualização"], a:1, d:"i", t:"Phishing" },

  // ===================== MALWARE (parte 2) =====================
  { q:"'Adware' costuma:", o:["Proteger contra vírus","Exibir anúncios indesejados e rastrear o uso","Fazer backup","Acelerar a rede"], a:1, d:"b", t:"Malware" },
  { q:"Para evitar macros maliciosas no Office, você deve:", o:["Habilitar todas as macros","Manter macros desabilitadas por padrão","Abrir todos os anexos","Ignorar avisos"], a:1, d:"b", t:"Malware" },
  { q:"O que fazer ao suspeitar de infecção no PC do trabalho?", o:["Continuar usando normal","Desconectar da rede e acionar a TI","Formatar sozinho","Esconder o fato"], a:1, d:"b", t:"Malware" },
  { q:"Um 'Command & Control' (C2) serve para o atacante:", o:["Enviar e-mails legítimos","Controlar remotamente máquinas infectadas","Atualizar o antivírus","Fazer backup"], a:1, d:"i", t:"Malware" },
  { q:"'Living off the land' em ataques significa usar:", o:["Malware customizado só","Ferramentas legítimas do próprio sistema para evitar detecção","Hardware externo","Papel e caneta"], a:1, d:"i", t:"Malware" },
  { q:"EDR (Endpoint Detection and Response) atua:", o:["Só no roteador","Monitorando e respondendo a ameaças nos endpoints","Apenas em e-mails","No ar-condicionado"], a:1, d:"i", t:"Malware" },
  { q:"'Polimorfismo' em malware significa que ele:", o:["Nunca muda","Altera o próprio código para escapar de assinaturas","É sempre grande","Só roda offline"], a:1, d:"i", t:"Malware" },
  { q:"Dupla extorsão em ransomware combina criptografia com:", o:["Backup grátis","Ameaça de vazar os dados roubados","Atualização do sistema","Suporte técnico"], a:1, d:"i", t:"Malware" },

  // ===================== REDES & WI-FI (parte 2) =====================
  { q:"Desligar o compartilhamento de arquivos em Wi-Fi público ajuda a:", o:["Aumentar a velocidade","Reduzir exposição a acessos indevidos","Carregar o notebook","Mudar o IP"], a:1, d:"b", t:"Redes" },
  { q:"O que é um endereço IP?", o:["Uma senha","Identificador numérico de um dispositivo na rede","Um antivírus","Um cabo"], a:1, d:"b", t:"Redes" },
  { q:"Trocar o nome padrão da rede (SSID) que revela o modelo do roteador:", o:["Não ajuda em nada","Reduz pistas dadas a atacantes","Aumenta o sinal","Deixa mais rápido"], a:1, d:"b", t:"Redes" },
  { q:"Port scanning é usado por atacantes para:", o:["Limpar portas USB","Descobrir serviços/portas abertas em um alvo","Trocar senhas","Fazer backup"], a:1, d:"i", t:"Redes" },
  { q:"NAT em um roteador doméstico:", o:["Criptografa tudo","Permite vários dispositivos compartilharem um IP público","Remove vírus","Bloqueia o DNS"], a:1, d:"i", t:"Redes" },
  { q:"Por que usar DNS seguro (DoH/DoT)?", o:["Deixa o site bonito","Criptografa consultas DNS, dificultando espionagem/alteração","Remove anúncios","Acelera o download"], a:1, d:"i", t:"Redes" },
  { q:"ARP spoofing ocorre em qual escopo?", o:["Internet global","Rede local (LAN)","Apenas na nuvem","Somente por cabo USB"], a:1, d:"i", t:"Redes" },
  { q:"Uma 'zona desmilitarizada' (DMZ) de rede serve para:", o:["Jogos","Isolar serviços expostos à internet da rede interna","Guardar senhas","Aumentar Wi-Fi"], a:1, d:"i", t:"Redes" },

  // ===================== CRIPTOGRAFIA (parte 2) =====================
  { q:"Codificação Base64 é:", o:["Criptografia forte","Apenas codificação (reversível), não protege sigilo","Um hash seguro","Uma assinatura digital"], a:1, d:"b", t:"Criptografia" },
  { q:"Trocar mensagens realmente sigilosas por e-mail comum é:", o:["Seguro por padrão","Arriscado, pois e-mail geralmente não é E2EE","Impossível","Criptografado sempre"], a:1, d:"b", t:"Criptografia" },
  { q:"AES é um exemplo de:", o:["Função de hash","Cifra simétrica amplamente usada","Protocolo de rede","Certificado"], a:1, d:"i", t:"Criptografia" },
  { q:"RSA é usado tipicamente para:", o:["Hash de senhas","Troca de chaves/assinatura (criptografia assimétrica)","Compressão","Backup"], a:1, d:"i", t:"Criptografia" },
  { q:"Um 'nonce' em criptografia é:", o:["Uma senha fixa","Um número usado uma única vez para evitar repetição","Um certificado","Um firewall"], a:1, d:"i", t:"Criptografia" },
  { q:"Por que não se deve 'inventar' o próprio algoritmo de criptografia?", o:["É caro","Esquemas não revisados costumam ter falhas sutis","É ilegal sempre","Fica lento"], a:1, d:"i", t:"Criptografia" },
  { q:"Em TLS, o 'handshake' serve para:", o:["Enviar spam","Negociar chaves e autenticar antes de cifrar o tráfego","Comprimir imagens","Trocar a senha"], a:1, d:"i", t:"Criptografia" },

  // ===================== NAVEGAÇÃO WEB (parte 2) =====================
  { q:"Salvar senhas no navegador em PC compartilhado é:", o:["Seguro sempre","Arriscado; outras pessoas podem acessá-las","Obrigatório","Criptografado para todos"], a:1, d:"b", t:"Navegação" },
  { q:"Atualizar o navegador frequentemente serve para:", o:["Mudar a cor","Corrigir falhas de segurança","Aumentar anúncios","Gastar dados"], a:1, d:"b", t:"Navegação" },
  { q:"Um aviso 'A sua ligação não é privada' indica problema com:", o:["A bateria","O certificado/HTTPS do site","O teclado","O mouse"], a:1, d:"b", t:"Navegação" },
  { q:"CSRF (Cross-Site Request Forgery) explora:", o:["O DNS","A sessão autenticada do usuário para executar ações indesejadas","O cabo de rede","A fonte da página"], a:1, d:"i", t:"Navegação" },
  { q:"Um 'drive-by download' acontece quando:", o:["Você baixa de propósito","Apenas visitar um site comprometido já instala malware","Você reinicia o PC","Troca a senha"], a:1, d:"i", t:"Navegação" },
  { q:"A flag 'HttpOnly' em um cookie ajuda a:", o:["Acelerar o site","Impedir que scripts JS leiam o cookie (mitiga roubo via XSS)","Criptografar o disco","Bloquear anúncios"], a:1, d:"i", t:"Navegação" },
  { q:"Content Security Policy (CSP) serve para:", o:["Deixar o site colorido","Restringir origens de scripts e mitigar XSS","Aumentar cookies","Trocar o DNS"], a:1, d:"i", t:"Navegação" },

  // ===================== PRIVACIDADE & LGPD (parte 2) =====================
  { q:"Marcar fotos com localização (geotag) e postar pode:", o:["Melhorar a câmera","Revelar sua rotina e endereço","Criptografar a imagem","Aumentar curtidas com segurança"], a:1, d:"b", t:"Privacidade" },
  { q:"Aceitar todos os cookies sem ler pode:", o:["Deixar o site rápido","Permitir rastreamento mais amplo do seu comportamento","Remover vírus","Criptografar dados"], a:1, d:"b", t:"Privacidade" },
  { q:"Antes de doar/vender um computador antigo, você deve:", o:["Só apagar a lixeira","Apagar com segurança/formatar e, se possível, criptografar antes","Nada","Trocar o papel de parede"], a:1, d:"b", t:"Privacidade" },
  { q:"Direito do titular na LGPD inclui:", o:["Programar o site","Solicitar acesso, correção e exclusão de seus dados","Definir o preço do produto","Escolher o servidor"], a:1, d:"i", t:"Privacidade" },
  { q:"'Finalidade' no tratamento de dados significa:", o:["Guardar para sempre","Usar os dados apenas para o propósito informado","Vender a terceiros livremente","Coletar tudo"], a:1, d:"i", t:"Privacidade" },
  { q:"Anonimização difere de pseudonimização porque:", o:["São iguais","Anonimização impede reidentificação; pseudonimização é reversível com info adicional","Pseudonimização apaga tudo","Anonimização é criptografia"], a:1, d:"i", t:"Privacidade" },
  { q:"O papel do Encarregado (DPO) na LGPD é:", o:["Programar sistemas","Ser canal entre empresa, titulares e ANPD","Vender dados","Gerenciar o Wi-Fi"], a:1, d:"i", t:"Privacidade" },

  // ===================== DISPOSITIVOS MÓVEIS (parte 2) =====================
  { q:"Um PIN de celular '0000' ou '1234' é:", o:["Seguro","Muito fraco e fácil de adivinhar","Obrigatório","Criptografado"], a:1, d:"b", t:"Mobile" },
  { q:"Revisar permissões de apps de tempos em tempos é:", o:["Perda de tempo","Boa prática para revogar acessos desnecessários","Proibido","Só para empresas"], a:1, d:"b", t:"Mobile" },
  { q:"Ao instalar um teclado de terceiros, atenção porque ele:", o:["Deixa o teclado maior","Pode capturar tudo o que você digita","Economiza bateria","Bloqueia ligações"], a:1, d:"i", t:"Mobile" },
  { q:"Perfis de configuração (MDM) instalados por links desconhecidos podem:", o:["Melhorar o sinal","Dar controle do aparelho a terceiros","Aumentar a tela","Trocar o chip"], a:1, d:"i", t:"Mobile" },
  { q:"Um app fora da loja oficial (sideload) exige cuidado porque:", o:["É mais rápido","Não passou pela revisão da loja e pode ser malicioso","É sempre grátis","Não usa internet"], a:1, d:"i", t:"Mobile" },

  // ===================== BACKUP & RECUPERAÇÃO (parte 2) =====================
  { q:"Backup na nuvem deve, idealmente, ter:", o:["Senha fraca","2FA e, de preferência, versionamento","Link público","Nenhuma proteção"], a:1, d:"b", t:"Backup" },
  { q:"Versionamento de arquivos permite:", o:["Apagar tudo","Recuperar versões anteriores (útil após ransomware/erro)","Aumentar a tela","Trocar a senha"], a:1, d:"b", t:"Backup" },
  { q:"Guardar a ÚNICA cópia dos dados em um só HD é:", o:["Seguro","Arriscado: falha do HD = perda total","Recomendado","Criptografado"], a:1, d:"b", t:"Backup" },
  { q:"Um plano de continuidade de negócios (BCP) trata de:", o:["Marketing","Manter operações funcionando durante/ após incidentes","Design do site","Vendas"], a:1, d:"i", t:"Backup" },

  // ===================== ATUALIZAÇÕES & VULNERABILIDADES (parte 2) =====================
  { q:"Firmware do roteador também deve ser:", o:["Ignorado","Atualizado quando houver correções","Apagado","Compartilhado"], a:1, d:"b", t:"Atualizações" },
  { q:"Instalar updates só de fontes oficiais evita:", o:["Economia","Falsas atualizações que são malware","Velocidade","Backups"], a:1, d:"b", t:"Atualizações" },
  { q:"CVSS é uma escala para:", o:["Preço de software","Pontuar a gravidade de vulnerabilidades","Velocidade da rede","Tamanho do disco"], a:1, d:"i", t:"Atualizações" },
  { q:"'Hardening' de um sistema significa:", o:["Deixá-lo mais lento","Reduzir a superfície de ataque com configurações seguras","Remover o antivírus","Abrir todas as portas"], a:1, d:"i", t:"Atualizações" },

  // ===================== BOAS PRÁTICAS & GESTÃO (parte 2) =====================
  { q:"Relatar um clique acidental em link suspeito é:", o:["Vergonhoso, melhor esconder","Correto: resposta rápida reduz danos","Desnecessário","Problema do TI só"], a:1, d:"b", t:"Boas práticas" },
  { q:"A tríade CIA em segurança é:", o:["Câmera, Internet, App","Confidencialidade, Integridade, Disponibilidade","Controle, IP, Acesso","Cloud, IA, Antivírus"], a:1, d:"i", t:"Boas práticas" },
  { q:"'Defesa em profundidade' significa:", o:["Uma única barreira forte","Múltiplas camadas de proteção sobrepostas","Sem proteção","Apenas antivírus"], a:1, d:"i", t:"Boas práticas" },
  { q:"Modelo 'Zero Trust' parte do princípio de:", o:["Confiar na rede interna","Nunca confiar por padrão; verificar sempre","Remover senhas","Abrir tudo"], a:1, d:"i", t:"Boas práticas" },
  { q:"Um plano de resposta a incidentes serve para:", o:["Decorar a sala","Guiar ações coordenadas antes/durante/após um incidente","Vender produtos","Trocar o Wi-Fi"], a:1, d:"i", t:"Boas práticas" },
  { q:"Logs de segurança são importantes porque:", o:["Enfeitam o sistema","Permitem detectar e investigar atividades suspeitas","Aumentam a internet","Reduzem a bateria"], a:1, d:"i", t:"Boas práticas" },
  { q:"O 'elo mais fraco' da segurança costuma ser:", o:["O cabo de rede","O fator humano","O monitor","A impressora"], a:1, d:"i", t:"Boas práticas" },

  // ===================== NUVEM & E-MAIL (parte 2) =====================
  { q:"Marcar um e-mail como spam/phishing ajuda a:", o:["Nada","Treinar filtros e proteger outros usuários","Apagar sua conta","Aumentar spam"], a:1, d:"b", t:"Nuvem" },
  { q:"Antes de informar login em um link de e-mail, o ideal é:", o:["Clicar no link","Acessar o site digitando o endereço oficial no navegador","Responder o e-mail","Ligar para o remetente desconhecido"], a:1, d:"b", t:"Nuvem" },
  { q:"Contas de nuvem sem uso (ex-funcionários) devem ser:", o:["Mantidas ativas","Desativadas/removidas prontamente","Compartilhadas","Ignoradas"], a:1, d:"i", t:"Nuvem" },
  { q:"Chaves de API em nuvem devem ser:", o:["Publicadas no código no GitHub","Guardadas em segredo e rotacionadas","Enviadas por e-mail a todos","Coladas no site"], a:1, d:"i", t:"Nuvem" },
  { q:"CASB (Cloud Access Security Broker) atua como:", o:["Antivírus local","Ponto de controle de políticas entre usuários e serviços de nuvem","Backup em fita","Cabo de rede"], a:1, d:"i", t:"Nuvem" },

  // ===================== CONCEITOS GERAIS & AMEAÇAS =====================
  { q:"O que é um 'incidente de segurança'?", o:["Uma festa da TI","Evento que compromete confidencialidade, integridade ou disponibilidade","Uma atualização","Um backup"], a:1, d:"b", t:"Conceitos" },
  { q:"'Hacker ético' (white hat) atua:", o:["Ilegalmente","Com autorização, para encontrar e corrigir falhas","Só por dinheiro ilícito","Destruindo sistemas"], a:1, d:"b", t:"Conceitos" },
  { q:"O que é um 'exploit'?", o:["Um antivírus","Código/técnica que aproveita uma vulnerabilidade","Um backup","Um cabo"], a:1, d:"b", t:"Conceitos" },
  { q:"Dados 'em repouso' são aqueles que estão:", o:["Trafegando na rede","Armazenados (disco, banco, nuvem)","Sendo digitados","Impressos"], a:1, d:"b", t:"Conceitos" },
  { q:"Dados 'em trânsito' referem-se a dados:", o:["Guardados no HD","Em movimento pela rede","Apagados","Impressos"], a:1, d:"b", t:"Conceitos" },
  { q:"O que é 'superfície de ataque'?", o:["O tamanho do monitor","O conjunto de pontos pelos quais um sistema pode ser atacado","Um antivírus","Uma senha"], a:1, d:"i", t:"Conceitos" },
  { q:"Pentest (teste de intrusão) é:", o:["Um vírus","Avaliação autorizada que simula ataques para achar falhas","Um backup","Um firewall"], a:1, d:"i", t:"Conceitos" },
  { q:"Threat intelligence serve para:", o:["Vender dados","Conhecer ameaças e ajustar defesas proativamente","Formatar discos","Trocar senhas"], a:1, d:"i", t:"Conceitos" },
  { q:"'APT' (Advanced Persistent Threat) caracteriza-se por:", o:["Ataque rápido e barulhento","Ataque sofisticado e prolongado, geralmente direcionado","Um spam","Um pop-up"], a:1, d:"i", t:"Conceitos" },
  { q:"Um 'falso positivo' em detecção é quando:", o:["Uma ameaça real passa","Algo legítimo é sinalizado como ameaça","Nada acontece","O backup falha"], a:1, d:"i", t:"Conceitos" },
  { q:"Um 'falso negativo' é quando:", o:["Algo legítimo é bloqueado","Uma ameaça real não é detectada","O PC acelera","O site cai"], a:1, d:"i", t:"Conceitos" },
  { q:"'Insider threat' é uma ameaça que vem de:", o:["Fora apenas","Pessoas de dentro (funcionários, parceiros)","Hardware","Energia elétrica"], a:1, d:"i", t:"Conceitos" },
  { q:"SIEM é uma solução que:", o:["Imprime relatórios de RH","Centraliza e correlaciona logs/eventos de segurança","Carrega celulares","Cria sites"], a:1, d:"i", t:"Conceitos" },
  { q:"Autorização é diferente de autenticação porque:", o:["São iguais","Autenticação prova quem você é; autorização define o que pode fazer","Autorização usa senha só","Autenticação define permissões"], a:1, d:"i", t:"Conceitos" },
  { q:"'Não repúdio' garante que:", o:["A senha é forte","Não se possa negar a autoria de uma ação/mensagem","O site é rápido","O backup existe"], a:1, d:"i", t:"Conceitos" },
  { q:"A primeira ação ao detectar um incidente grave costuma ser:", o:["Desligar tudo sem avaliar","Conter/isolar para limitar o impacto, conforme o plano","Postar nas redes","Ignorar"], a:1, d:"i", t:"Conceitos" },

  // ===================== COMPLEMENTO FINAL =====================
  { q:"Deixar o Bluetooth do carro/fone pareando com qualquer aparelho é:", o:["Recomendado","Melhor evitar; pareie só com dispositivos confiáveis","Obrigatório","Mais rápido"], a:1, d:"b", t:"Mobile" },
  { q:"Receber um link de rastreio de encomenda que você não comprou é sinal de:", o:["Entrega garantida","Possível golpe de phishing","Promoção","Atualização"], a:1, d:"b", t:"Phishing" },
  { q:"Uma boa senha de Wi-Fi doméstico deve ter:", o:["4 dígitos","Pelo menos 12 caracteres variados","O nome da rua","A data de hoje"], a:1, d:"b", t:"Redes" },
  { q:"Clicar em 'cancelar inscrição' de um spam suspeito pode:", o:["Sempre ajudar","Confirmar ao golpista que seu e-mail é ativo","Remover vírus","Criptografar a conta"], a:1, d:"b", t:"Phishing" },
  { q:"Fotografar e enviar documentos pessoais por app de mensagem exige cuidado porque:", o:["Gasta dados","Podem vazar se a conta/dispositivo for comprometido","Fica borrado","É ilegal sempre"], a:1, d:"b", t:"Privacidade" },
  { q:"Antivírus desatualizado é um problema porque:", o:["Fica bonito","Não reconhece ameaças recentes","Acelera o PC","Economiza energia"], a:1, d:"b", t:"Malware" },
  { q:"Usar o computador do trabalho para instalar jogos piratas:", o:["É incentivado","Viola políticas e pode trazer malware","É neutro","Melhora o desempenho"], a:1, d:"b", t:"Boas práticas" },
  { q:"Uma mensagem urgente pedindo PIX para um 'parente em apuros' pode ser:", o:["Sempre verdade","Golpe de engenharia social; confirme por outro canal","Promoção","Spam inofensivo"], a:1, d:"b", t:"Phishing" },
  { q:"Deixar notebook destravado em cafeteria enquanto vai ao banheiro é:", o:["Seguro","Arriscado; bloqueie a tela ou leve-o","Recomendado","Indiferente"], a:1, d:"b", t:"Boas práticas" },
  { q:"Rede social pedindo para 'reconfirmar senha' por link no e-mail deve ser:", o:["Atendida na hora","Tratada com suspeita; acesse o app/site oficial","Compartilhada","Respondida"], a:1, d:"b", t:"Phishing" },
  { q:"Guardar cópia de segurança de fotos importantes é:", o:["Desnecessário","Recomendado contra perda/roubo do aparelho","Proibido","Só para empresas"], a:1, d:"b", t:"Backup" },
  { q:"'Typosquatting' em apps ocorre quando:", o:["O app trava","Publicam apps falsos com nomes parecidos aos oficiais","O app atualiza","O ícone muda sozinho"], a:1, d:"i", t:"Mobile" },
  { q:"Por que separar conta de administrador da conta de uso diário?", o:["Para ter dois logins","Limitar o estrago caso a conta diária seja comprometida","Deixar o PC rápido","Economizar disco"], a:1, d:"i", t:"Boas práticas" },
  { q:"Um 'honeypot' em segurança é:", o:["Um pote de mel real","Isca proposital para atrair e estudar atacantes","Um antivírus","Um backup"], a:1, d:"i", t:"Conceitos" },
  { q:"OSINT, em reconhecimento de ataque, significa:", o:["Antivírus de código aberto","Coleta de informações de fontes abertas/públicas","Um protocolo de rede","Um tipo de firewall"], a:1, d:"i", t:"Conceitos" },
  { q:"Por que validar/sanitizar entradas de usuário em sistemas?", o:["Estética","Previne injeções (SQLi/XSS) e dados corrompidos","Acelera o banco","Reduz backups"], a:1, d:"i", t:"Navegação" },
  { q:"Expor chaves/segredos em repositório público é perigoso porque:", o:["Ocupa espaço","Bots varrem o GitHub e exploram credenciais expostas","Deixa o código feio","Não compila"], a:1, d:"i", t:"Nuvem" }

];

