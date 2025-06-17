import { dirname } from "path"
import { fileURLToPath } from "url"

import { getEslintConfig } from "./config/eslint/index.mjs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config = getEslintConfig(__dirname)

export default config
