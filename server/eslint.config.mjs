import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.express
      }
    },
    rules: {
      // Error prevention
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-var": "error",
      "prefer-const": "warn",
      
      // Best practices
      "eqeqeq": ["error", "always"],
      "no-throw-literal": "error",
      "handle-callback-err": "error",
      
      
      // Node.js specific
      "global-require": "error",
      
      // ES6+ features
      "no-duplicate-imports": "error",
      "no-useless-constructor": "error",
      
      // Error handling
      "no-await-in-loop": "warn",
      "require-await": "error",
      "no-return-await": "error",
      
    }
  },
  pluginJs.configs.recommended
];