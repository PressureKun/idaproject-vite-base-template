import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([{
    rules: {
        'max-lines': ['error', 700],
        'no-alert': 'off',
        'no-console': 0,
        'no-eval': 'error',
        'no-extend-native': 0,
        curly: [
            'error',
            'all',
        ],
        'prefer-regex-literals': [
            'off',
        ],
        'import/no-webpack-loader-syntax': 'off',
        'no-else-return': 0,
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-extra-parens': 'error',
        'no-labels': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-loss-of-precision': 'error',
        'class-methods-use-this': 'off',
        'no-constructor-return': 'error',
        'no-promise-executor-return': 'error',
        'array-callback-return': 'error',
        'no-extra-bind': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-lone-blocks': 'error',
        'no-multi-spaces': 'error',
        'no-return-await': 'error',
        'no-self-compare': 'error',
        'no-unused-expressions': [
            'error',
            {
                allowTernary: true,
            },
        ],
        'no-unused-vars': 'off',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        radix: 'error',
        'require-await': 'off',
        'wrap-iife': [
            'error',
            'inside',
        ],
        'no-label-var': 'error',
        'no-undef-init': 'error',
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
            },
        ],
        'array-bracket-newline': [
            'error',
            'consistent',
        ],
        'array-bracket-spacing': [
            'error',
            'never',
        ],
        'array-element-newline': [
            'error',
            'consistent',
        ],
        'brace-style': [
            'error',
            '1tbs',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'comma-style': [
            'error',
            'last',
        ],
        'computed-property-spacing': [
            'error',
            'never',
        ],
        'consistent-this': [
            'error',
            'self',
        ],
        'eol-last': [
            'error',
            'always',
        ],
        'func-call-spacing': 'off',
        'func-name-matching': 'error',
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: true,
            },
        ],
        'function-call-argument-newline': [
            'error',
            'never',
        ],
        'function-paren-newline': [
            'error',
            'multiline',
        ],
        'implicit-arrow-linebreak': [
            'error',
            'beside',
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'jsx-quotes': [
            'error',
            'prefer-double',
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            },
        ],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        'multiline-comment-style': [
            'error',
            'separate-lines',
        ],
        'multiline-ternary': [
            'error',
            'always-multiline',
        ],
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: true,
                properties: false,
            },
        ],
        'new-parens': [
            'error',
            'always',
        ],
        'newline-per-chained-call': [
            'error',
            {
                ignoreChainWithDepth: 2,
            },
        ],
        'no-array-constructor': 'error',
        'no-inline-comments': 0,
        'no-lonely-if': 'off',
        'no-mixed-operators': 'off',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
                maxEOF: 0,
                maxBOF: 0,
            },
        ],
        'no-new-object': 'error',
        'no-tabs': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': [
            'error',
            'beside',
        ],
        'object-curly-newline': [
            'error',
            {
                consistent: true,
            },
        ],
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'object-property-newline': [
            'error',
            {
                allowMultiplePropertiesPerLine: true,
            },
        ],
        'one-var': [
            'error',
            'never',
        ],
        'one-var-declaration-per-line': [
            'error',
            'initializations',
        ],
        'operator-assignment': [
            'error',
            'always',
        ],
        'padded-blocks': [
            'error',
            'never',
        ],
        'quote-props': [
            'error',
            'as-needed',
        ],
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'semi-style': [
            'error',
            'last',
        ],
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-in-parens': [
            'error',
            'never',
        ],
        'space-unary-ops': 'error',
        'spaced-comment': [
            'error',
            'always',
            {
                exceptions: [
                    '-+',
                ],
            },
        ],
        'switch-colon-spacing': 'error',
        // ECMAScript 6
        'arrow-body-style': [
            'error',
            'as-needed',
        ],
        'arrow-parens': [
            'error',
            'as-needed',
        ],
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'generator-star-spacing': [
            'error',
            {
                before: false,
                after: true,
                anonymous: 'neither',
                method: {
                    before: true,
                    after: true,
                },
            },
        ],
        'no-duplicate-imports': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'rest-spread-spacing': [
            'error',
            'never',
        ],
        'template-curly-spacing': [
            'error',
            'never',
        ],
    },
}, globalIgnores(['dist/**/*', '**/*+.js'])]);
