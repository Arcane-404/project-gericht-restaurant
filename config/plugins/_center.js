module.exports = ({ addUtilities }) => {
	addUtilities({
		'.flex-center': {
			'justify-content': 'center',
			'align-items': 'center',
		},
		'.grid-center': {
			'justify-content': 'center',
			'align-content': 'center',
		},
	})
}
