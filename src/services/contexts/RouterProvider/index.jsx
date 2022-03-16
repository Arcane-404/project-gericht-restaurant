import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'
import uniqid from 'uniqid'
import { ROUTER_LIST } from '@/services/routes'
import { Layout } from '@/components/commons'

const RouterProvider = () => (
	<BrowserRouter>
		<Layout>
			<Routes>
				{ROUTER_LIST.map((path) => (
					<Route key={ uniqid() } { ...path } />
				))}
			</Routes>
		</Layout>
	</BrowserRouter>
)

export { RouterProvider }
