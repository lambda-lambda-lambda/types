import eslintParser from '@typescript-eslint/parser';
import expectType   from 'eslint-plugin-expect-type/configs/recommended';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 13,
      parser: eslintParser,
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  },
  expectType
];
