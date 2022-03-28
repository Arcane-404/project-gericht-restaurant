module.exports = {
	/*  */
	test: require('./plugins/_test'),
	content: require('./plugins/_content'),
	center: require('./plugins/_center'),
	beforeAfter: require('./plugins/_before-after'),
	/*  */
	fontFamily: require('./styles/_fontFamily'),
	colors: require('./styles/_colors'),
	screens: require('./styles/_screens'),
	/*  */
	motion: require('./styles/_motion'),
	typography: require('./styles/_typography'),
	htmlPluginOptions: require('./vite/_htmlPluginOptions'),
}
