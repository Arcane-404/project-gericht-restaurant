import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'
import { GlobalStyles } from './theme'
import { App } from './App'

render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.getElementById('root')
)