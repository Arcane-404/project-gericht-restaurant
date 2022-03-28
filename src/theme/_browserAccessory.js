import { css } from 'twin.macro'

export const browserAccessory = (css`
	::selection {
    background-color: #DCCA87 !important;
		color: #FFF !important;
	}

	::-webkit-scrollbar {
		background-color: #242424;
		/* width: 1rem; */
		width: 0.5rem;
	}
	::-webkit-scrollbar-corner {
		background-color: #242424;
	}
	::-webkit-scrollbar-thumb {
		border: 3.5px solid transparent !important;
		/* border-radius: 1vmax; */
		background-color: #DCCA87;
		/* background-clip: content-box; */
	}
	::-webkit-scrollbar-thumb:hover {
		background: #F5EFDB;
		/* background-clip: content-box; */
	}
	::-webkit-resizer {
		background-color: transparent;
		resize: none;
	}
`)
