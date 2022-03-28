import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const Form = styled(motion.form).attrs(() => ({
	'aria-label': 'Newsletter email information'
}))(() => [
	tw`flex flex-col gap-6 relative`,
	tw`laptop:(w-[700px] mt-4 mx-auto)`
])

// Form.Field = styled(motion.fieldset)(() => [
// 	tw`relative`
// ])

Form.Input = styled(motion.input).attrs(({ isInvalid = false }) => ({
	type: 'text',
	autoComplete: 'off',
	autoCorrect: 'off',
	autoCapitalize: 'off',
	spellCheck: 'false',
	'aria-invalid': isInvalid ? 'true' : 'false'
}))(({ status = '' }) => [
	tw`type-field motion-500`,
	tw`
	border border-primary-3 rounded-sm focus:(border-accent-base)
	outline-none bg-transparent	w-full py-3 px-4
	placeholder:(italic)
	`,
	(status === 'error') && tw`border-red-400 focus:(border-red-600)`,
	(status === 'warning') && tw`border-yellow-400 focus:(border-yellow-600)`,
	(status === 'success') && tw`border-green-400 focus:(border-green-600)`,
	// isInvalid && tw`border-red-400 focus:(border-red-600)`,
])

Form.Submit = styled(motion.button).attrs(({ disabled = false }) => ({
	type: 'submit',
	'aria-disabled': `${ disabled }`
}))(() => [
	tw`type-button motion-500`,
	tw`self-center bg-accent-base py-2 px-8`,
	tw`
	relative
	// before-after:(motion-700 absolute h-[3px] bg-accent-base)
	before:(motion-700 absolute w-0 h-[3px] bg-accent-base top-0 right-0)
	after:(motion-700 absolute w-0 h-[3px] bg-accent-base bottom-0 left-0)
	`,
	tw`
	hocus:(bg-transparent text-accent-base before:(w-full) after:(w-full))
	active:(text-neutral-black before:(h-1/2) after:(h-1/2))
	disabled:(bg-opacity-50 before:(bg-opacity-50) after:(bg-opacity-50))
	`,
	tw`laptop:(absolute right-1.5 top-1.5 bottom-1.5)`
])
