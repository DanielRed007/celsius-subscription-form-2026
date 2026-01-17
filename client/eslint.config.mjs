// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,                  // ESLint's recommended JS rules
  ...tseslint.configs.recommended,         // TypeScript recommended rules (good baseline)
  // ...tseslint.configs.strict,           // Uncomment for stricter TS rules if you want
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],   // Lint these file types
    languageOptions: {
      parser: tseslint.parser,             // Use TS parser
      parserOptions: {
        project: true,                     // Enables type-aware rules (needs tsconfig.json)
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Customize or override rules here, e.g.:
      // '@typescript-eslint/no-unused-vars': 'warn',
      // 'no-console': 'off',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.js'],  // Common ignores
  }
);
