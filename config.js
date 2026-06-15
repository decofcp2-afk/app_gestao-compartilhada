window.APPSEL_CONFIG = {
  // Cole aqui a URL /exec da implantacao Web App do Apps Script do APP GESTAO das Licitacoes Compartilhadas.
  // Exemplo: https://script.google.com/macros/s/SEU_ID_DE_IMPLANTACAO/exec
  apiUrl: "COLE_AQUI_A_URL_EXEC_DO_APPS_SCRIPT_DO_APP_GESTAO_COMPARTILHADA/exec",

  // Municipio usado para simular prazos no navegador. O Apps Script tambem
  // deve ter SEL_MUNICIPIO_CALENDARIO com o mesmo valor.
  municipioCalendario: "Rio de Janeiro",

  // Tempo maximo de espera das chamadas ao Apps Script.
  apiTimeoutMs: 90000,

  // Link rapido para o Painel publico das Licitacoes Compartilhadas.
  painelUrl: "https://decofcp2-afk.github.io/painel-contratacoes-compartilhada/"
};
