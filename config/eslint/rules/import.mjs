/**
 * @typedef {import('eslint').Linter.RulesRecord} RulesRecord
 * @typedef {import('eslint').Linter.Config} Config
 *
 */

/** @type {RulesRecord} */
export const importRules = {
  "import/no-anonymous-default-export": "off",
  "import/no-internal-modules": "off",
  "import/order": [
    "error",
    {
      groups: ["external", "builtin", "internal", "sibling", "parent", "index"],
      pathGroups: [
        {
          pattern: "react",
          group: "external",
        },
        {
          pattern: "@",
          group: "internal",
        },
      ],
      pathGroupsExcludedImportTypes: ["internal"],
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],
}
