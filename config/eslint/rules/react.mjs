/**
 * @typedef {import('eslint').Linter.RulesRecord} RulesRecord
 *
 */

/** @type {RulesRecord} */
export const reactRules = {
  "react/function-component-definition": [
    "error",
    {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    },
  ],
}
