module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": ["warn"],
    "no-useless-catch": 0,
    "max-len": ["warn", { "code": 120 }],
    "indent": [
      "warn",
      2
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "semi": [
      "warn",
      "always"
    ],
  },
}
