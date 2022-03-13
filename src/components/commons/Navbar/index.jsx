import { useState } from 'react'
// import uniqid from 'uniqid'
// import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'
import { Root } from '@/components/commons'
import { images, Icons } from '@/assets'
import { MobileMenu } from './V1'

const Frame = styled(Root.Frame)(() => [
	tw`bg-black relative`,
])

const Container = styled(Root.Container)(() => [
	tw`flex justify-between items-center py-4`,
])

const Logo = styled(motion.img)(() => [
	tw`w-[110px]`,
	tw`laptop:(w-[150px])`,
	tw`desktop:(w-[210px])`
])

// const Menu = styled(motion.menu)(() => [
// 	tw`flex`,
// 	tw`laptop:(space-x-6)`
// ])
// const MenuItem = styled(motion.li)(() => [
// 	tw`cursor-pointer`,
// ])
// const MenuLink = styled(Link)(() => [
// 	tw`font-body text-white`,
// 	tw`hover:(text-alt-gray_2)`
// ])

const MenuDropDown = styled(motion.button)(() => [
	tw`text-white text-3xl hover:(text-alt-golden)`,
])

// const CtaOpt = styled(motion.menu)(() => [
// 	tw`flex justify-center items-center`,
// 	tw`laptop:(space-x-6)`
// ])
// const CtaOptItem = styled(motion.li)(() => [
// 	tw`cursor-pointer`,
// 	// tw`before:(content-['|'] bg-white w-1 h-6 mr-6)`,
// ])
// const CtaOptLink = styled(Link)(() => [
// 	tw`font-body text-white`,
// 	tw`transition	duration-500`,
// 	tw`hover:(border-b-2 border-b-alt-golden)`
// ])


// const MENU_LIST = [
// 	{ to: '#home', label: 'Home' },
// 	{ to: '#about', label: 'About' },
// 	{ to: '#menu', label: 'Menu' },
// 	{ to: '#awards', label: 'Awards' },
// 	{ to: '#contact', label: 'Contact' },
// ]

// const CTA_OPT_LIST = [
// 	{ to: '#login', label: 'Login / Register' },
// 	{ to: '#book', label: 'Book Table' },
// ]


const Navbar = () => {
	const [ isMenuOpen, setToggleMenu ] = useState(false)
	const handleToggleMenu = () => setToggleMenu(!isMenuOpen)

	return (
		<Frame as="nav">
			<Container>
				<Logo src={ images.gericht } alt="gericht logo" />

				{/* { isMenuOpen && <MobileMenu isMenuOpen={ isMenuOpen } handleToggleMenu={ handleToggleMenu } /> } */}
				<MobileMenu isMenuOpen={ isMenuOpen } handleToggleMenu={ handleToggleMenu } />

				<MenuDropDown onClick={ handleToggleMenu }>
					<Icons.OpenMenu />
				</MenuDropDown>
			</Container>
		</Frame>
	)
}

export { Navbar }
