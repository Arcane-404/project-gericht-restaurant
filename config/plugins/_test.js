module.exports = ({ addComponents }) => {
	addComponents({
		'.test': {
			'box-shadow': 'inset 0 0 5px silver',
			'transition': 'all 0.3s linear',
		},
		'.test-all, .test-all *': {
			'box-shadow': 'inset 0 0 5px silver',
			'transition': 'all 0.3s linear'
		},
		'.test-block': {
			'box-shadow': 'inset 0 0 5px silver',
		},
		'.test-motion': {
			'transition': 'all 0.3s linear',
		},
	})
}
