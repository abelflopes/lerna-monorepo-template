/** @type import("eslint").Linter.Config */
const config = {
  extends: "@abelflopes/eslint-config-tsr-pro",
  rules: {
    "react/jsx-no-literals": 1,
    "react/react-in-jsx-scope": 0,
  },
};

module.exports = config;
