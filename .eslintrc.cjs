module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Integra o Prettier com o ESLint
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Adicione suas regras personalizadas
    semi: ['error', 'never'], // Desabilita o uso do ponto e vírgula
  },
}
