module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", ["sibling", "index"]],
      },
    ],
    "import/newline-after-import": ["error", { count: 1 }],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "padded-blocks": ["error", "never"],
    "lines-between-class-members": ["error", "always"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    "arrow-body-style": ["error", "as-needed"],
    "prefer-arrow-callback": "error",
    semi: ["error", "always"],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
};
