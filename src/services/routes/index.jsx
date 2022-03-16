import {
	Home,
	StyleGuide,
	Error,
} from '@/components/pages'

export const PATH = {
	home: '/',
	style_guide: '/style-guide',
	error: '/*',
}

export const ROUTER_LIST = [
	{	exact: true, path: PATH.home, element: <Home /> },
	{	path: PATH.style_guide, element: <StyleGuide /> },
	{	path: PATH.error,	element: <Error /> },
]
