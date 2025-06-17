/**
 * @typedef {import('eslint').Linter.LegacyConfig} LegacyConfig
 */

/** @type {LegacyConfig}  */
export const checkFileConfig = {
  plugins: ["eslint-plugin-check-file"],
  rules: {
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**/": "KEBAB_CASE",
        "!(src/app)/**/*": "KEBAB_CASE",
      },
    ],
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{ts,tsx}": "KEBAB_CASE",
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
  },
}
