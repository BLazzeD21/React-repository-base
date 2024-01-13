module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'react/prop-types': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-unused-vars': 1,
    'import/extensions': 0,
    'require-jsdoc': 0,
    'linebreak-style': 0,
    'react/function-component-definition': [
      1, {
        'namedComponents': 'arrow-function',
        'unnamedComponents': 'function-expression',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
  },
};
