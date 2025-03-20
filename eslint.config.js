import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default tseslint.config(
    { ignores: ['dist', 'old'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked
        ],
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                project: './tsconfig.node.json'
            }
        },

        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            '@stylistic/js': stylisticJs
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ],
            '@stylistic/js/indent': ['error', 4],
            '@stylistic/js/semi': ['error', 'never'],
            '@stylistic/js/comma-dangle': ['error', 'never'],
            '@stylistic/js/comma-spacing': ['error', { 'after': true }],
            '@stylistic/js/jsx-quotes': ['error', 'prefer-single'],
            '@stylistic/js/quotes': ['error', 'single', {
                'allowTemplateLiterals': 'always'
            }],
            'eqeqeq': ['error', 'always'],
            '@stylistic/js/object-curly-spacing': ['error', 'always'],
            '@stylistic/js/arrow-spacing': ['error', { 'before': true, 'after': true }]
        }
    }
)
