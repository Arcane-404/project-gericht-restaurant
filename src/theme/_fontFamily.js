import { css } from 'twin.macro'
import { fonts } from '../assets'

export const fontFamily = (css`
  /* Cormorant Upright */
  @font-face {
    font-family: 'Cormorant Upright';
    font-style: normal;
    font-weight: 300;
    src: url(${ fonts.cuLight }) format('truetype');
  }
  @font-face {
    font-family: 'Cormorant Upright';
    font-style: normal;
    font-weight: 400;
    src: url(${ fonts.cuRegular }) format('truetype');
  }
  @font-face {
    font-family: 'Cormorant Upright';
    font-style: normal;
    font-weight: 500;
    src: url(${ fonts.cuMedium }) format('truetype');
  }
  @font-face {
    font-family: 'Cormorant Upright';
    font-style: normal;
    font-weight: 600;
    src: url(${ fonts.cuSemiBold }) format('truetype');
  }
  @font-face {
    font-family: 'Cormorant Upright';
    font-style: normal;
    font-weight: 700;
    src: url(${ fonts.cuBold }) format('truetype');
  }
  
  /* Open Sans */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: url(${ fonts.osLight }) format('truetype');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${ fonts.osRegular }) format('truetype');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 500;
    src: url(${ fonts.osMedium }) format('truetype');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: url(${ fonts.osSemiBold }) format('truetype');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${ fonts.osBold }) format('truetype');
  }
`)
