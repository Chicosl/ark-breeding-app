# Segurança

Encontrou um problema de segurança no Breeding Companion? Abra uma *issue* em
https://github.com/Chicosl/ark-breeding-app/issues sem incluir detalhes exploráveis e peça um contato
privado, ou use o botão **Report a vulnerability** na aba *Security* do repositório.

## Como o app se protege
- Sem servidor, contas ou coleta de dados: a biblioteca fica só no celular.
- Todo backup importado (JSON ou `.asb`) é validado campo a campo antes de ser salvo ou exibido.
- O APK roda com Content-Security-Policy restritiva: sem scripts externos, sem conexões externas.
- Fontes embutidas no app (nenhuma chamada ao Google ao abrir).
- O build é feito em etapas: a compilação (que executa dependências de terceiros) não tem acesso à chave
  de assinatura; só um passo isolado, sem npm/Gradle, assina o APK. Dependências e actions são travadas
  por versão/SHA e acompanhadas pelo Dependabot.
