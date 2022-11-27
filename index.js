module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@xia0hj/eslint-config',
  ],
  plugins      : ['react'],
  parserOptions: { ecmaFeatures: { jsx: true } },

  // https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
  rules: {
    'react/function-component-definition': [
      'error',
      { namedComponents: 'function-declaration' },
    ],

    // 关闭 useState 命名对称的规则
    'react/hook-use-state': 'off',

    // JSX 的布尔属性要求显式赋值
    'react/jsx-boolean-value': ['error', 'always'],

    // 要求 JSX 的右尖括号位置与左尖括号对齐
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],

    // JSX 的结束标签与起始标签对齐
    'react/jsx-closing-tag-location': 'warn',

    // JSX 属性值为组件时要求用大括号包裹
    'react/jsx-curly-brace-presence': [
      'error', {
        props            : 'ignore',
        children         : 'ignore',
        propElementValues: 'always',
      },
    ],

    // JSX 表达式两个大括号内部都有换行符，或者不存在换行符
    'react/jsx-curly-newline': ['warn', { multiline: 'consistent', singleline: 'consistent' }],

    // JSX 的属性大括号禁止两边空格，children 大括号要求有两边空格
    'react/jsx-curly-spacing': ['warn', { when: 'never', children: { when: 'always' } }],

    // 禁止 JSX 的等号出现空格
    'react/jsx-equals-spacing': ['error', 'never'],

    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],

    // React.Fragment 禁用缩写形式
    'react/jsx-fragments': ['error', 'element'],

    // JSX 缩进规定
    'react/jsx-indent': ['warn', 2, { checkAttributes: false, indentLogicalExpressions: true }],

    // JSX 属性缩进
    'react/jsx-indent-props': ['warn', 2],

    // JSX 每行的属性限制
    'react/jsx-max-props-per-line': ['warn', { maximum: { single: 3, multi: 1 } }],

    // 禁止 JSX 出现重复属性
    'react/jsx-no-duplicate-props': 'error',

    // 禁止使用未声明的 JSX
    'react/jsx-no-undef': 'error',

    // 禁止 JSX 属性之间的复数空格
    'react/jsx-props-no-multi-spaces': 'warn',

    // 禁止 JSX 的属性为对象解构
    'react/jsx-props-no-spreading': 'error',

    // JSX 标签尖括号的空格
    'react/jsx-tag-spacing': [
      'warn', {
        closingSlash     : 'never',
        beforeSelfClosing: 'always',
        afterOpening     : 'never',
        beforeClosing    : 'never',
      },
    ],

    // 检查是否存在未使用的变量
    'react/jsx-uses-vars': 'warn',

    // 用括号包裹多行 JSX
    'react/jsx-wrap-multilines': [
      'warn', {
        declaration: 'parens-new-line',
        assignment : 'parens-new-line',
        return     : 'parens-new-line',
        arrow      : 'parens-new-line',
        condition  : 'parens-new-line',
        logical    : 'parens-new-line',
        prop       : 'parens-new-line',
      },
    ],

    // 禁止在 setState 函数中访问 state
    'react/no-access-state-in-setstate': 'error',

    // 禁止通过 props 传递 children
    'react/no-children-prop': 'error',

    // 没有 children 的组件要求自闭合
    'react/self-closing-comp': ['error'],
  },
};
