const plugin = require('tailwindcss/plugin')
const {
	test,
	content,
	center,
	beforeAfter,
	/*  */
	fontFamily,
	colors,
	screens,
	/*  */
	motion,
	typography,
} = require('./config')

module.exports = {
  content: [
		'./src/components/blocks/**/*.{js,ts,jsx,tsx}',
    './src/components/commons/**/*.{js,ts,jsx,tsx}',
    './src/components/containers/**/*.{js,ts,jsx,tsx}',
    './src/components/layouts/**/*.{js,ts,jsx,tsx}',
		'./src/components/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily,
    extend: {
			container: { center: true },
			screens,
			colors,
		}
  },
  plugins: [
		plugin(motion),
		plugin(typography),
		plugin(beforeAfter),
		plugin(test),
		plugin(content),
		plugin(center),
	],
}
