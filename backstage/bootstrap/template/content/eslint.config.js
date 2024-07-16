import eslint from '@eslint/js';

import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { ignores: ['dist/'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      'no-unused-vars': 'error',
    },
  },
];
