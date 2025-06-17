/**
 * @typedef {import('eslint').Linter.RulesRecord} RulesRecord
 */

/** @type {RulesRecord} */
export const typescriptRules = {
  "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  "@typescript-eslint/consistent-type-imports": [
    "error",
    {
      disallowTypeAnnotations: false,
    },
  ],
}
