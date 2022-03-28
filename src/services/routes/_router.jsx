import {
	Home,
	StyleGuide,
	Error,
} from '@/components/pages'

export const ROUTER_PATH = {
	home: '/',
	style_guide: '/style-guide',
	error: '/*',
}

export const ROUTER_LIST = [
	{	exact: true, path: ROUTER_PATH.home, element: <Home /> },
	{	path: ROUTER_PATH.style_guide, element: <StyleGuide /> },
	{	path: ROUTER_PATH.error,	element: <Error /> },
]
