// import { useState } from 'react'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'
import { Icons } from '@/assets'

const Frame = styled(motion.div)(({ isMenuOpen }) => [
	tw`bg-black w-full min-h-screen absolute top-0 left-0`,
	tw`flex flex-col justify-center items-center`,
	tw`transition-[top] duration-500`,
	!isMenuOpen && tw`top-[-1300%]`
])

const MenuDropDown = styled(motion.button)(() => [
	tw`text-secondary-base text-3xl hover:(text-white)`,
	tw`absolute top-6 right-6`,
])

const Menu = styled(motion.menu)(() => [
	tw`flex flex-col items-center space-y-6`,
	// tw`laptop:(space-x-6)`
])
const MenuItem = styled(motion.li)(() => [
	tw`cursor-pointer`,
])
const MenuLink = styled(Link)(() => [
	tw`font-display text-secondary-base text-3xl`,
	tw`hover:(text-white)`
	// tw`font-body text-white`,
	// tw`hover:(text-alt-gray_2)`
])

const CtaOpt = styled(motion.menu)(() => [
	tw`flex justify-center items-center space-x-6 mt-10 -ml-10`,
])
const CtaOptItem = styled(motion.li)(() => [
	// tw`before:(content-['|'] bg-white w-1 h-6 mr-6)`,
])
const CtaOptLink = styled(Link)(() => [
	// tw`font-body text-white`,
	tw`font-display text-white text-2xl`,

	tw`transition	duration-500`,
	tw`hover:(border-b-2 border-b-secondary-base)`
])


const MENU_LIST = [
	{ to: '#home', label: 'Home' },
	{ to: '#about', label: 'About' },
	{ to: '#menu', label: 'Menu' },
	{ to: '#awards', label: 'Awards' },
	{ to: '#contact', label: 'Contact' },
]

const CTA_OPT_LIST = [
	{ to: '#login', label: 'Login / Register' },
	{ to: '#book', label: 'Book Table' },
]


const MobileMenu = ({ isMenuOpen, handleToggleMenu }) => {
	return (
		<Frame isMenuOpen={ isMenuOpen }>
			<MenuDropDown onClick={ handleToggleMenu }>
				<Icons.CloseMenu />
			</MenuDropDown>

			<Menu>
				{MENU_LIST.map((path) => (
					<MenuItem key={ uniqid() }>
						<MenuLink to={ path.to }>{ path.label }</MenuLink>
					</MenuItem>
				))}
			</Menu>

			<CtaOpt>
				{CTA_OPT_LIST.map((path, index, arr) => (
					<>
						<CtaOptItem key={ uniqid() }>
							<CtaOptLink to={ path.to }>{ path.label }</CtaOptLink>
						</CtaOptItem>
						{ (arr.length - 1 !== index) && <hr tw="w-[1px] h-8 bg-primary-2 border-none" /> }
					</>
				))}
			</CtaOpt>
		</Frame>
	)
}

export { MobileMenu }
