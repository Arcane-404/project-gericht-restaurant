import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import { browserAccessory, fontFace } from './'

const CustomStyles = createGlobalStyle`
  ${ fontFace }
  ${ browserAccessory }

  html, body, #root {
		background-color: #242424;
		min-height: 100%;
		height: 100%;
    scroll-behavior: smooth;
		text-size-adjust: 100%;
	}
`

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)
