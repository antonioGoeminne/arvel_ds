import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: './tests/setup',
      environment: 'jsdom',
      coverage: {
        exclude: [
          'commitlint.config.cjs',
          '.eslintrc.cjs',
          'vite.config.ts',
          'vitest.config.ts',
          'tests',
          '**/*.stories.ts',
          '**/*.styled.ts',
          'dist',
          '.storybook',
          'plopfile.js'
        ]
        // thresholds: {
        //   lines: 10,
        //   functions: 10,
        //   branches: 10,
        //   statements: 10
        // }
      }
    }
  })
)
