import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const Wrapper = styled(motion.div)(() => [
	tw`flex flex-col space-y-12`, // gap-12
	tw`laptop:(flex-row justify-center gap-6 space-y-0 space-x-0)`
])
Wrapper.Box = styled(motion.div)(() => [
	tw`flex flex-col items-center space-y-4`,
	tw`laptop:(flex-[1 1])`
])
Wrapper.SubBox = styled(motion.div)(() => [])

export const Logo = styled(motion.img)(() => [
	tw`w-52`,
])

export const Heading = styled(motion.h2)(() => [
	tw`type-heading-2 text-center`,
])
const TextStyle = ({ vr }) => [
	tw`type-body-2 text-center`,
	(vr === 'white') && tw`text-neutral-white`,
	(vr === 'gold') && tw`text-accent-base`,
	tw`laptop:(text-base)`,
]
export const Subheading = styled(motion.h3)(TextStyle)
export const Text = styled(motion.p)(TextStyle)
export const Copyright = styled(motion.span)(() => [
	tw`type-body-1 text-center block mt-12`
])
