import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const Logo = styled(motion.img)(() => [
	tw`w-[110px]`,
	tw`laptop:(w-[150px])`,
	tw`desktop:(w-[210px])`
])

export const Menu = styled(motion.menu)(({ isMenuOpen }) => [
	tw`flex flex-col items-center px-10 py-4 space-y-1 z-0`,
	tw`bg-black absolute top-full right-0`,
	tw`transition-[top] duration-500`,
	!isMenuOpen && tw`top-[-400px]`,
])
Menu.Item = styled(motion.li)(() => [])
Menu.Link = styled(Link)(() => [
	tw`type-link-1 text-neutral-white hover:(text-accent-base)`,
])

export const Frame = styled(motion.div)(() => [
	tw`flex gap-6 z-10`,
])

export const CtaOpt = styled(motion.menu)(() => [
	tw`flex justify-center items-center space-x-6`,
])
CtaOpt.Item = styled(motion.li)(() => [
	tw`relative`,
	tw`not-first:before:(content-[''] bg-white inline-block w-[1px] h-[2em] absolute top-2 -left-3.5)`,
])
const LinkStyle = [
	tw`type-link-2 hover:(text-accent-base)`,

	tw`transition	duration-500`,
	tw`hover:(border-b-2 border-b-secondary-base)`
]
CtaOpt.Link1 = styled(Link)(() => LinkStyle)
CtaOpt.Link2 = styled(motion.a)(() => LinkStyle)

Menu.Button = styled(motion.button)(() => [
	// tw`text-secondary-base text-3xl hover:(text-neutral-white)`,
	tw`text-neutral-white text-3xl hover:(text-secondary-base)`,
])
