module.exports = ({ addComponents, theme }) => {
	addComponents({
		'.type-display': {
			'color': theme('colors.accent.base'),
			'font-family': theme('fontFamily.display'),
			'font-size': '5rem',
			'font-weight': theme('fontWeight.bold'),
			'line-height': theme('lineHeight.normal'),
			'letter-spacing': theme('letterSpacing.wide'),
			'text-transform': 'uppercase',
			'font-variant-numeric': 'tabular-nums lining-nums',
			[`@media (min-width: ${theme('screens.tablet')})`]: {
				'font-size': '5.625rem'
			}
		},

		'.type-heading-1': {
			'color': theme('colors.accent.base'),
			'font-family': theme('fontFamily.heading'),
			'font-size': theme('fontSize.5xl'),
			'font-weight': theme('fontWeight.bold'),
			'line-height': theme('lineHeight.normal'),
			'letter-spacing': theme('letterSpacing.wide'),
			'text-transform': 'capitalize',
		},

		'.type-heading-2': {
			'color': theme('colors.neutral.white'),
			'font-family': theme('fontFamily.heading'),
			'font-size': '2rem',
			'font-weight': theme('fontWeight.normal'),
			'line-height': theme('lineHeight.normal'),
			'letter-spacing': theme('letterSpacing.wide'),
			'text-transform': 'capitalize',
		},

		'.type-subheading-1': {
			'color': theme('colors.accent.base'),
			'font-family': theme('fontFamily.heading'),
			'font-size': theme('fontSize.3xl'),
			'font-weight': theme('fontWeight.bold'),
			'line-height': theme('lineHeight.loose'),
			'letter-spacing': theme('letterSpacing.wide'),
			'text-transform': 'capitalize',
		},

		'.type-subheading-2': {
			'color': theme('colors.accent.base'),
			'font-family': theme('fontFamily.body-alt'),
			'font-size': theme('fontSize.lg'),
			'font-weight': theme('fontWeight.bold'),
			'line-height': theme('lineHeight.loose'),
			'letter-spacing': theme('letterSpacing.wide'),
			'text-transform': 'capitalize',
		},

		'.type-body-1': {
			'color': theme('colors.neutral.white'),
			'font-family': theme('fontFamily.body'),
			'font-size': theme('fontSize.xs'),
			'font-weight': theme('fontWeight.normal'),
			'line-height': theme('lineHeight.loose'),
			'letter-spacing': theme('letterSpacing.wide'),
			'text-transform': 'capitalize',
		},

		'.type-body-2': {
			'color': theme('colors.neutral.gray.1'),
			'font-family': theme('fontFamily.body'),
			'font-size': theme('fontSize.xs'),
			'font-weight': theme('fontWeight.normal'),
			'line-height': theme('lineHeight.loose'),
			'letter-spacing': theme('letterSpacing.wide'),
			'text-transform': 'capitalize',
		},

		'.type-body-alt-1': {
			'color': theme('colors.accent.base'),
			'font-family': theme('fontFamily.body-alt'),
			'font-size': theme('fontSize.base'),
			'font-weight': theme('fontWeight.normal'),
			'line-height': theme('lineHeight.loose'),
			'letter-spacing': theme('letterSpacing.wide'),
			'text-transform': 'capitalize',
		},

		'.type-caption': {
			'color': theme('colors.neutral.white'),
			'font-family': theme('fontFamily.body-alt'),
			'font-size': theme('fontSize.lg'),
			'font-weight': theme('fontWeight.bold'),
			'line-height': theme('lineHeight.loose'),
			'letter-spacing': theme('letterSpacing.wide'),
			'text-transform': 'capitalize',
			'font-variant-numeric': 'tabular-nums lining-nums',
		},

		'.type-link-1': {
			'color': theme('colors.accent.base'),
			'font-family': theme('fontFamily.body-alt'),
			'font-size': theme('fontSize.3xl'),
			'font-weight': theme('fontWeight.normal'),
			'line-height': theme('lineHeight.loose'),
			'letter-spacing': theme('letterSpacing.wide'),
			'text-transform': 'capitalize',
		},

		'.type-link-2': {
			'color': theme('colors.neutral.white'),
			'font-family': theme('fontFamily.body-alt'),
			'font-size': theme('fontSize.2xl'),
			'font-weight': theme('fontWeight.normal'),
			'line-height': theme('lineHeight.loose'),
			'letter-spacing': theme('letterSpacing.wide'),
			'text-transform': 'capitalize',
		},

		'.type-button': {
			'color': theme('colors.neutral.black'),
			'font-family': theme('fontFamily.body-alt'),
			'font-size': theme('fontSize.lg'),
			'font-weight': theme('fontWeight.bold'),
			'line-height': theme('lineHeight.relaxed'),
			'letter-spacing': theme('letterSpacing.wide'),
			'text-transform': 'capitalize',
		},

		'.type-field': {
			'color': theme('colors.neutral.white'),
			'font-family': theme('fontFamily.body-alt'),
			'font-size': theme('fontSize.base'),
			'font-weight': theme('fontWeight.semibold'),
			'line-height': theme('lineHeight.loose'),
			'letter-spacing': theme('letterSpacing.wider'),
		}
	})
}
