// import { FlatCompat } from '@eslint/eslintrc'
// import vueEssential from 'eslint-plugin-vue/lib/configs/vue3-essential.js'
// import vueRecommended from 'eslint-plugin-vue/lib/configs/vue3-recommended.js'
// import vueTypescript from '@vue/eslint-config-typescript'
// import prettier from '@vue/eslint-config-prettier'

import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import prettierConfig from '@vue/eslint-config-prettier/skip-formatting'

// enable ignore functionality
import { includeIgnoreFile } from '@eslint/compat'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')
// end enable ignore

export default [
  includeIgnoreFile(gitignorePath),
  ...pluginVue.configs['flat/essential'],
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.vue', '**/*.js', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest'
    },
    rules: {
      'vue/comment-directive': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
]
