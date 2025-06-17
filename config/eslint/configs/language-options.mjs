/**
 * @typedef {import('eslint').Linter.Config} Config
 */

/**
 * @param {string} dirname
 */
export const getLanguageOptionsConfig = (dirname) => {
  /** @type {Config} */
  const languageOptionsConfig = {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: dirname,
      },
    },
  }

  return languageOptionsConfig
}
