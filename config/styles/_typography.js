module.exports = ({ addComponents, theme }) => {
	addComponents({
		'.type-display': {
			'color': theme('colors.secondary.base'),
			'font-family': theme('fontFamily.heading'),
			'font-size': '5.625rem', // 90px / 117px / 0.04em
			'font-weight': theme('fontWeight.bold'),
			'text-transform': 'uppercase',
		},

		// '.type-heading-1': {},
		// '.type-heading-2': {},
		// '.type-subheading-1': {},
		// '.type-subheading-2': {},
		// '.type-body-1': {},
		// '.type-body-2': {},
		// '.type-caption': {},
		// '.type-menu-1': {},
		// '.type-menu-2': {},
		// '.type-menu-3': {},
		// '.type-link': {},
		// '.type-button': {},
		// '.type-overline': {},
		// '.type-field': {}
	})
}

/*

'.type-heading': {
	'color': theme('colors.neutral.white'),
	'font-size': theme('fontSize.3xl'),
	'&:hover': {
		'color': theme('colors.secondary.base'),
	},
	[`@media (min-width: ${theme('screens.laptop')})`]: {
		'color': theme('colors.red.400'),
	},
}

*/
