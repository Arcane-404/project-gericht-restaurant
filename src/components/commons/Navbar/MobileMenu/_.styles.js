import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const Logo = styled(motion.img)(() => [
	tw`w-[110px]`,
	tw`laptop:(w-[150px])`,
	tw`desktop:(w-[210px])`
])

export const Frame = styled(motion.div)(({ isMenuOpen }) => [
	tw`bg-black w-full min-h-screen absolute top-0 left-0`,
	tw`flex flex-col justify-center items-center`,
	tw`transition-[top] duration-500`,
	!isMenuOpen && tw`top-[-100vh]`,
])

export const Menu = styled(motion.menu)(() => [
	tw`flex flex-col items-center space-y-6`,
])
Menu.Item = styled(motion.li)(() => [
	tw`cursor-pointer`,
])
Menu.Link = styled(Link)(() => [
	tw`type-link-1 hover:(text-neutral-white)`,
])

export const CtaOpt = styled(motion.menu)(() => [
	tw`flex justify-center items-center space-x-6 mt-10 -ml-10`,
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

Menu.Button = styled(motion.button)(({ status }) => [
	(status === 'open') && tw`text-neutral-white text-3xl hover:(text-secondary-base)`,
	(status === 'close') && tw`text-secondary-base text-3xl hover:(text-neutral-white) absolute top-6 right-6`,
])
