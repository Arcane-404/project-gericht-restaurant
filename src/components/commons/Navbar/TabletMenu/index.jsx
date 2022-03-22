import { useState } from 'react'
import uniqid from 'uniqid'
import { Icons } from '@/assets'
import {
	Logo,
	Frame,
	Menu,
	CtaOpt,
} from './_.styles'

const TabletMenu = ({ logo, menuList, ctaOptList }) => {
	const [ isMenuOpen, setToggleMenu ] = useState(false)
	const handleToggleMenu = () => setToggleMenu(!isMenuOpen)

	return (
		<>
			<Logo src={ logo.image } alt={ logo.alt } />

			<Menu isMenuOpen={ isMenuOpen }>
				{menuList?.map((path) => (
					<Menu.Item key={ uniqid() }>
						<Menu.Link to={ path.to }>{ path.label }</Menu.Link>
					</Menu.Item>
				))}
			</Menu>

			<Frame>
				<CtaOpt>
					{ctaOptList?.map((path) => (
						<CtaOpt.Item key={ uniqid() }>
							{ path?.to && <CtaOpt.Link1 to={ path.to }>{ path.label }</CtaOpt.Link1> }
							{ path?.href && <CtaOpt.Link2 href={ path.href }>{ path.label }</CtaOpt.Link2> }
						</CtaOpt.Item>
					))}
				</CtaOpt>

				<Menu.Button onClick={ handleToggleMenu }>
					{ isMenuOpen ? <Icons.CloseMenu /> : <Icons.OpenMenu /> }
				</Menu.Button>
			</Frame>
		</>
	)
}

export { TabletMenu }
