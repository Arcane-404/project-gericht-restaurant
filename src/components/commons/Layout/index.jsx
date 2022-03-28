import { Footer } from '@/components/commons'
// Navbar,
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
