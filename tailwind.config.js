const plugin = require('tailwindcss/plugin')
const {
	test,
	content,
	/*  */
	fontFamily,
	colors,
	screens,
} = require('./config')

module.exports = {
  content: [
		'./src/components/blocks/**/*.{js,ts,jsx,tsx}',
    './src/components/commons/**/*.{js,ts,jsx,tsx}',
    './src/components/containers/**/*.{js,ts,jsx,tsx}',
    './src/components/layouts/**/*.{js,ts,jsx,tsx}',
		// "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily,
    extend: {
			screens,
			colors,
		}
  },
  plugins: [
		plugin(({ addComponents }) => addComponents(test)),
		plugin(({ addUtilities }) => addUtilities(content)),
	],
}
