module.exports = {
  // Mapear scopes para nomes de exibição específicos
  scopeDisplayName: {
    api: 'API',
    ui: 'User Interface',
  },

  // Tipos de commits a serem exibidos no changelog
  displayTypes: [
    'feature',
    'feat',
    'fix',
    'docs',
    'style',
    'refactor',
    'perf',
    'test',
    'build',
    'ci',
    'chore',
    'revert',
  ],

  // Incluir emojis no título das seções
  withEmoji: true,

  // Idioma dos títulos
  titleLanguage: 'en-US',

  // Mostrar o autor do commit
  showAuthor: true,

  // Mostrar o avatar do autor
  showAuthorAvatar: false,

  // Mostrar um resumo
  showSummary: true,

  // Reduzir o nível do cabeçalho de # para ##
  reduceHeadingLevel: true,

  // Colocar o timestamp na segunda linha
  newlineTimestamp: false,

  // Adicionar um botão de "voltar ao topo"
  addBackToTop: true,

  // Mapeamento personalizado de tipos de commits para exibição no changelog
  customTypeMap: {
    feature: { displayName: '✨ Features' },
    feat: { displayName: '✨ Features' },
    fix: { displayName: '🐛 Bug Fixes' },
    docs: { displayName: '📝 Documentation' },
    style: { displayName: '💄 Styles' },
    refactor: { displayName: '♻️ Refactoring' },
    perf: { displayName: '⚡ Performance Improvements' },
    test: { displayName: '✅ Tests' },
    build: { displayName: '🔧 Build System' },
    ci: { displayName: '👷 Continuous Integration' },
    chore: { displayName: '🛠 Chores' },
    revert: { displayName: '⏪ Reverts' },
    breaking: { displayName: '💥 Breaking Changes' },
  },
};
