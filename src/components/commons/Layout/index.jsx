import { Navbar, Footer } from '@/components/commons'

const Layout = ({ children }) => {
	return (
		<>
			{/* <Navbar /> */}
			{ children }
			<Footer />
		</>
	)
}

export { Layout }
