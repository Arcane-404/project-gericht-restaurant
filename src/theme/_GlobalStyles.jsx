import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import { browserAccessory, fontFamily } from './'

const CustomStyles = createGlobalStyle`
  ${ fontFamily }
  ${ browserAccessory }

  html, body, #root {
		/* border: 3px solid darkslategray; */
    scroll-behavior: smooth;
		min-height: 100%;
		height: 100%;
	}
`

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)
