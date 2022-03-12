module.exports = {
	test: require('./plugins/_test'),
	content: require('./plugins/_content'),
	/*  */
	fontFamily: require('./styles/_fontFamily'),
	colors: require('./styles/_colors'),
	screens: require('./styles/_screens'),
	/*  */
	htmlPluginOptions: require('./vite/_htmlPluginOptions'),
}
