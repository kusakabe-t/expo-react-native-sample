module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    'react-native/react-native': true,
  },
  // singleAttributePerLineを有効化するために、prettierを追加
  // import文の後は空行を入れるために、importを追加
  plugins: ['react-native', '@typescript-eslint', 'prettier', 'import'],
  extends: [
    'plugin:react-native/all',
    // TODO: 様子見。必要になりそうだったら有効化
    // 'eslint:recommended',
    // 'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
    },
    {
      files: ['*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
  rules: {
    'react-native/split-platform-components': 2,
    // 「'React' must be in scope when using JSX」エラーを無視するために追加
    'react/react-in-jsx-scope': 'off',
    // インラインスタイルを許可
    'react-native/no-color-literals': 'off',
    // svgを除外し、1行あたり200文字内まで許可
    'max-len': ['error', { code: 200, ignorePattern: 'd="([\\s\\S]*?)"' }],
    'no-console': 'off',
    curly: ['error', 'multi-line'],
    'import/newline-after-import': ['error'],
  },
}
