module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    // 'plugin:vue/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'process': true,
  },
  // 'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': '@typescript-eslint/parser',
    'project': './tsconfig.json',
    // 'extraFileExtensions': [ '.vue' ],
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'legacyDecorators': true,
    },
  },
  'plugins': [
    'import',
    '@typescript-eslint',
  ],
  'settings': {
    'import/resolver': {
      'typescript': {},
    },
  },
  'rules': {
    'indent': 'off',
    'linebreak-style': [ 'error', 'windows' ],
    'quotes': [ 'error', 'single' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    '@typescript-eslint/func-call-spacing': [ 'error', 'never' ],
    // 'space-infix-ops': [ 'error' ],
    // 'space-unary-ops': [ 'error' ],
    'curly': [ 'error' ],
    'no-cond-assign': [ 'error', 'always' ],
    'import/no-unresolved': 'error',
    'eqeqeq': 'error',
    'no-console': 'warn',
    'no-alert': 'warn',

    'block-scoped-var': 'error',
    'complexity': [ 'error', { 'max': 10 }],
    'consistent-return': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-empty-function': 'off', // defer to @typescript-eslint/no-empty-function
    // '@typescript-eslint/no-empty-function': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-labels': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    // 'no-magic-numbers': [ 'error', { 'ignore': [ 0, 1, -1 ], 'enforceConst': true, 'detectObjects': true }],
    'no-multi-spaces': [ 'error', { 'ignoreEOLComments': true, 'exceptions': {
      'Property': true,
      'VariableDecorator': true,
      'ImportDeclaration': true,
    }}],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'off',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'prefer-promise-reject-errors': 'error',
    'wrap-iife': 'error',
    'yoda': 'error',
    
    'init-declarations': [ 'error', 'always' ],
    'no-shadow': 'error',
    
    // 'camelcase': 'error',
    'array-bracket-spacing': [ 'error', 'always', { 'objectsInArrays': false, 'arraysInArrays': false }],
    'block-spacing': 'error',
    'brace-style': [ 'error', 'stroustrup', { 'allowSingleLine': true }],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': [ 'error', 'always' ],
    'consistent-this': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'key-spacing': [ 'error', { 'mode': 'minimum' }],
    'keyword-spacing': 'error',
    // 'linebreak-style': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-mixed-operators': [ 'error', { 'allowSamePrecedence': true } ],
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-trailing-spaces': [ 'error', { 'skipBlankLines': true, 'ignoreComments': true }],
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': [ 'error', 'always', { 'arraysInObjects': false, 'objectsInObjects': false }],
    'one-var': [ 'error', 'never' ],
    'prefer-object-spread': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [ 'error', { 'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always' }],
    'space-infix-ops': 'error',
    'space-unary-ops': [ 'error', { 'words': true, 'nonwords': false }],
    'spaced-comment': [ 'error', 'always', { 'exceptions': [ '-', '=', '+', '*' ]}],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'generator-star-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'rest-spread-spacing': 'error',
    'symbol-description': 'error',
    'yield-star-spacing': 'error',
    
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',

    'semi': 'off', // defer to @typescript-eslint/semi
    '@typescript-eslint/semi': [ 'error', 'never' ],

    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/indent': [ 'error', 2 ],
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': [ 'error', 'always' ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': [ 'warn', {
      'varsIgnorePattern': '^_',
      'argsIgnorePattern': '^_',
    }],
    '@typescript-eslint/member-delimiter-style': [ 'error', {
      'multiline': {
        'delimiter': 'none',
      },
    }],
    '@typescript-eslint/array-type': [ 'error', { 'default': 'generic' }],
    '@typescript-eslint/no-use-before-define': 'off',

    // 'vue/multiline-html-element-content-newline': 'off',
    // 'vue/max-attributes-per-line': 'off',
    // 'vue/attributes-order': 'off',
    // 'vue/html-self-closing': 'off',
    // 'vue/singleline-html-element-content-newline': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    
  },
}
