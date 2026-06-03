# AppSEL da Reitoria

Aplicacao interna da equipe SEL/SEPMA para gestao das etapas dos processos, fila, capacidade, historico, configuracoes, e-mails e avisos de prazo.

Este projeto foi separado do Painel de Contratacoes. O AppSEL deve ficar em repositorio proprio e em GitHub Pages proprio, porque possui login, escrita na planilha, envio de e-mails e trigger diario.

## Estrutura

```text
appsel-reitoria/
├── index.html              pagina estatica publicada no GitHub Pages
├── config.js               URL publica do Apps Script da DECOF
├── CHECKLIST_PUBLICACAO.md roteiro de publicacao e testes
├── apps-script/
│   └── Code.gs             back-end do AppSEL para copiar no Apps Script
├── README.md
└── .gitignore
```

## Fluxo

```text
┌─────────────────────────────────────────────────────┐
│            GOOGLE SHEETS (banco de dados)            │
│  usuarios/config, processos, etapas, capacidade      │
└──────────────────────┬──────────────────────────────┘
                       │ le e escreve com conta DECOF
┌──────────────────────▼──────────────────────────────┐
│            APPS SCRIPT DO APPSEL                     │
│  login, sessoes, etapas, fila, capacidade, e-mails   │
│  rotas JSON/JSONP para o GitHub Pages                │
└──────────────────────┬──────────────────────────────┘
                       │ respostas JSONP
┌──────────────────────▼──────────────────────────────┐
│              APPSEL - GITHUB PAGES                   │
│  login por matricula + senha                         │
│  chefia gerencia equipe, processos e configuracoes   │
│  equipe registra andamento e consulta sua carga      │
└─────────────────────────────────────────────────────┘
```

## Configuracao

Use `CHECKLIST_PUBLICACAO.md` como roteiro curto. O resumo e:

1. Crie um projeto novo em `script.google.com` na conta da DECOF.
2. Copie o conteudo de `apps-script/Code.gs` para o Apps Script.
3. Em `Configuracoes do projeto > Propriedades do script`, cadastre:
   - `SEL_SS_ID`: ID real da planilha.
   - `SEL_CHEFIA_EMAIL`: e-mail institucional da chefia, se necessario.
4. Implante como Web App:
   - Executar como: `Eu`.
   - Quem pode acessar: `Qualquer pessoa`.
5. Copie a URL terminada em `/exec`.
6. Cole essa URL em `config.js`, no campo `apiUrl`.
7. Mantenha `apiTimeoutMs` em `90000`, salvo se o Apps Script precisar de outro tempo de espera.
8. Publique este repositorio no GitHub Pages em `main` + `/(root)`.

## Rotas do Apps Script

- `?route=appsel.challenge`
- `?route=appsel.loginProof`
- `?route=appsel.changePasswordHash`
- `?route=appsel.call&method=...`

O login no GitHub Pages usa desafio criptografico: a senha digitada nao e enviada aberta na URL. As demais chamadas preservam a compatibilidade com as funcoes atuais do AppSEL e exigem token quando a funcao original ja exigia token.

## Cuidados

- Nao publicar ID real de planilha no GitHub.
- Nao publicar e-mails pessoais ou PDFs/planilhas reais neste repositorio.
- Manter o Painel e o AppSEL em repositorios separados.
- Testar em Chrome, Edge e aba anonima depois de publicar.
- Testar login preferencialmente no GitHub Pages, com HTTPS. Abrir o `index.html` localmente pode bloquear a validacao criptografica da senha em alguns navegadores.
