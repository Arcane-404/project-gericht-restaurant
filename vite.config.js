import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import htmlPlugin from 'vite-plugin-html-config'
import { htmlPluginOptions } from './config'

export default defineConfig({
	envDir: './env',
  build: { sourcemap: true },
	resolve: {
		alias: [ {
			find: '@',
			replacement: resolve(__dirname, 'src'),
		} ],
  },
  plugins: [
		htmlPlugin(htmlPluginOptions),
    react({
      babel: {
        plugins: [
          'babel-plugin-twin',
          'babel-plugin-macros',
          'babel-plugin-styled-components'
        ],
      },
    }),
		eslintPlugin({ cache: false, }),
  ],
})
