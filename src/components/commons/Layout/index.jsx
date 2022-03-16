import { Navbar } from '@/components/commons'

// isAlt
const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{ children }
			{/* { !isAlt && <Footer /> } */}
		</>
	)
}

export { Layout }
