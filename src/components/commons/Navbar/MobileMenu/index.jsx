import { useState } from 'react'
import uniqid from 'uniqid'
import { Icons } from '@/assets'
import {
	Logo,
	Frame,
	Menu,
	CtaOpt,
} from './_.styles'

const MobileMenu = ({ logo, menuList, ctaOptList }) => {
	const [ isMenuOpen, setToggleMenu ] = useState(false)
	const handleToggleMenu = () => setToggleMenu(!isMenuOpen)

	return (
		<>
			<Logo src={ logo.image } alt={ logo.alt_info } />

			<Menu.Button status="open" onClick={ handleToggleMenu }>
				<Icons.OpenMenu />
			</Menu.Button>

			<Frame isMenuOpen={ isMenuOpen }>
				<Menu.Button status="close" onClick={ handleToggleMenu }>
					<Icons.CloseMenu />
				</Menu.Button>

				<Menu>
					{menuList?.map((path) => (
						<Menu.Item key={ uniqid() }>
							<Menu.Link to={ path.to }>{ path.label }</Menu.Link>
						</Menu.Item>
					))}
				</Menu>

				<CtaOpt>
					{ctaOptList?.map((path) => (
						<CtaOpt.Item key={ uniqid() }>
							{ path?.to && <CtaOpt.Link1 to={ path.to }>{ path.label }</CtaOpt.Link1> }
							{ path?.href && <CtaOpt.Link2 href={ path.href }>{ path.label }</CtaOpt.Link2> }
						</CtaOpt.Item>
					))}
				</CtaOpt>
			</Frame>
		</>
	)
}

export { MobileMenu }
