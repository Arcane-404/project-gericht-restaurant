import tw, { styled } from 'twin.macro'
import { Root } from '@/components/commons'
import { images } from '@/assets'
import { MobileMenu } from './MobileMenu'

const Frame = styled(Root.Frame)(() => [
	tw`bg-black relative`,
])

const Container = styled(Root.Container)(() => [
	tw`flex justify-between items-center py-4`,
])


const LOGO = {
	image: images.gericht,
	alt_info: 'gericht logo',
}

const MENU_LIST = [
	{ to: '#home', label: 'Home' },
	{ to: '#about', label: 'About' },
	{ to: '#menu', label: 'Menu' },
	{ to: '#awards', label: 'Awards' },
	{ to: '#contact', label: 'Contact' },
]

const CTA_OPT_LIST = [
	{ href: 'tel:+1234567890', label: '+(209) 555-0104' },
	{ to: '#book', label: 'Book Table' },
]

const menuProps = {
	logo: LOGO,
	menuList: MENU_LIST,
	ctaOptList: CTA_OPT_LIST,
}


const Navbar = () => {
	return (
		<Frame as="nav">
			<Container>
				<MobileMenu { ...menuProps } />
			</Container>
		</Frame>
	)
}

export { Navbar }
