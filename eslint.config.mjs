// import globals from "globals"
// import pluginJs from "@eslint/js"
// import tseslint from "typescript-eslint"

export default [
  {
    rules: {
      "no-undef": "off",
      "no-unused-vars": "error",
      "no-unused-expressions": "off",
      "no-unused-labels": "off",
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2016,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
  },
]
