# Breeding Companion para ARK (Android)

App de fã, **não oficial**, para **ARK: Survival Ascended**, inspirado no ARK Smart Breeding.

- **Extrator de pontos:** digite (ou leia da foto) os valores de status e o app descobre os pontos selvagens, de mutação e do jogador, a efetividade da doma e a impressão.
- **Leitura da foto da tela** (inventário ou card do cryopod), feita no próprio celular com o Google ML Kit, sem internet. Câmera ou galeria.
- **Biblioteca** com cores por região e ilustrações coloridas; importa o backup `.asb` do ARK Smart Breeding.
- **Melhores por status, plano de cria e chance de mutação.**
- Multiplicadores oficiais de status.

## Como instalar
1. Abra a página de [**Releases**](https://github.com/Chicosl/ark-breeding-app/releases/latest).
2. Baixe `breeding-companion.apk` (em *Assets*) no celular e abra o arquivo.
3. Se o Android pedir, permita que o navegador ou o app de arquivos instale apps.

Para atualizar, instale a versão nova por cima. Antes de desinstalar, salve um backup em **Mais → Backup**.

## Problemas e sugestões
Abra uma [issue](https://github.com/Chicosl/ark-breeding-app/issues). Para erros de leitura de foto, mande a foto e o texto de "Ver texto lido".

## Privacidade
O app não coleta nenhum dado. Veja [PRIVACIDADE.md](PRIVACIDADE.md).

## Para quem mantém o projeto
- O APK é gerado pelo GitHub Actions (`.github/workflows/build-apk.yml`) a cada alteração na `main`:
  1. **build** compila sem assinatura (dependências travadas em `package-lock.json`, `npm ci --ignore-scripts`), sem acesso a segredos;
  2. **sign** assina com `apksigner` num job isolado — só ele lê os segredos `KEYSTORE_B64` e `KEYSTORE_PASSWORD`;
  3. **release** publica em Releases e **pagina** atualiza a página de download (GitHub Pages).
- A pasta `www/` é gerada por `ferramentas/apk_www.py` a partir do `app/index.html` (separa o `app.js` e aplica a CSP).
- Impressão digital (SHA-256) do certificado: `00:FB:58:94:C1:BF:76:20:07:D3:EC:54:D8:5C:8B:05:4E:A3:8D:7C:33:08:92:8E:BE:62:45:55:EF:61:32:3A`
- Veja também [SECURITY.md](SECURITY.md).

## Créditos e licença
- Código do app: licença MIT ([LICENSE](LICENSE)). Mantido por ChicoLemke.
- Dados das espécies e cálculo dos status: [ARK Smart Breeding](https://github.com/cadon/ARKStatsExtractor) (MIT).
- Ilustrações das espécies: [arkutils/species-images](https://github.com/arkutils/species-images) (MIT).
- Leitura de texto: Google ML Kit.
- Fontes Inter e Rajdhani (SIL Open Font License), embutidas em `www/fonts/`.

ARK: Survival Ascended é marca da Studio Wildcard. Este app não tem ligação com a Studio Wildcard nem é endossado por ela.
