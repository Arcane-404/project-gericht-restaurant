module.exports = ({ addVariant }) => {
	addVariant('before-after', '&::before, &:after')
	// addVariant('before-after', ({ modifySelectors, separator }) => {
	// 	modifySelectors(({ className }) => {
	// 		const before = `.${e(`before${ separator }${ className }`)}::before`
	// 		const after = `.${e(`after${ separator }${ className }`)}::after`
	// 		console.log('before ::', before)
	// 		console.log('after ::', after)
	// 		return `${ before }, ${ after }`
	// 	})
	// })
}
