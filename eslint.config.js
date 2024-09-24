import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  // Configuração para arquivos JavaScript
  {
    files: ['**/*.js'],
    ignores: ['node_modules'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'never'], // Remove o ponto e vírgula
      quotes: ['error', 'single'], // Usa aspas simples
    },
  },
  // Configuração para usar o Prettier
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error'], // Integra o Prettier com o ESLint
    },
  },
  // Adiciona as configurações do ESLint recomendadas
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      // Adicione outras regras padrão aqui, se necessário
    },
  },
]
