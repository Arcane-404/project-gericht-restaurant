module.exports = {
	/*  */
	test: require('./plugins/_test'),
	content: require('./plugins/_content'),
	center: require('./plugins/_center'),
	/*  */
	fontFamily: require('./styles/_fontFamily'),
	colors: require('./styles/_colors'),
	screens: require('./styles/_screens'),
	/*  */
	typography: require('./styles/_typography'),
	htmlPluginOptions: require('./vite/_htmlPluginOptions'),
}
