export default {
  env: {
    browser: true,
    es2021: true,
    node: true  // Додаємо підтримку для Node.js середовища
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    "no-undef": "error"
  },
  ignores: [
    "dist/",
    "node_modules/"
  ]
};