import { Navbar, Footer } from '@/components/commons'

// isAlt
const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{ children }
			<Footer />
			{/* { !isAlt && <Footer /> } */}
		</>
	)
}

export { Layout }
