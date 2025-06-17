import { FlatCompat } from "@eslint/eslintrc"
import { checkFileConfig } from "./configs/check-file.mjs"
import { getLanguageOptionsConfig } from "./configs/language-options.mjs"
import { importRules } from "./rules/import.mjs"
import { reactRules } from "./rules/react.mjs"
import { typescriptRules } from "./rules/typescript.mjs"
/**
 * @typedef {import('eslint').Linter.Config} Config
 */

/**
 * @param {string} dirname
 */
export const getEslintConfig = (dirname) => {
  const compat = new FlatCompat({
    baseDirectory: dirname,
  })

  const languageOptions = getLanguageOptionsConfig(dirname)

  /** @type {Config} */
  const rules = {
    rules: {
      ...typescriptRules,
      ...reactRules,
      ...importRules,
    },
  }

  const eslintConfig = [
    ...compat.extends("next/core-web-vitals"),
    ...compat.extends("next/typescript"),
    ...compat.extends("plugin:import/recommended"),
    ...compat.extends("plugin:prettier/recommended"),
    ...compat.config(checkFileConfig),
    languageOptions,
    rules,
  ]

  return eslintConfig
}
