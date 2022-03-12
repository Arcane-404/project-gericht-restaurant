import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'
import uniqid from 'uniqid'
import { ROUTER_LIST } from '@/service/routes'

const RouterProvider = () => {
	return (
		<BrowserRouter>
			<Routes>
				{ROUTER_LIST.map((path) => (
					<Route key={ uniqid() } { ...path } />
				))}
			</Routes>
		</BrowserRouter>
	)
}

export { RouterProvider }
