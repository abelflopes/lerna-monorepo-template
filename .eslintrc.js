// https://www.npmjs.com/package/eslint-plugin-workspaces

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["workspaces"],
  extends: ["standard-with-typescript", "plugin:workspaces/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.js", "release.config.js"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "workspaces/no-cross-imports": "warn",
  },
  ignorePatterns: ["**/dist/**"],
};
