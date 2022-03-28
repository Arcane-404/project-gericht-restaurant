module.exports = ({ addComponents, theme }) => {
	addComponents({
		'.motion-500': {
			'transition-property': 'all',
			'transition-duration': theme('transitionDuration.500'),
			'transition-timing-function': theme('transitionTimingFunction.in-out')
		},

		'.motion-700': {
			'transition-property': 'all',
			'transition-duration': theme('transitionDuration.700'),
			'transition-timing-function': theme('transitionTimingFunction.in-out')
		}
	})
}
