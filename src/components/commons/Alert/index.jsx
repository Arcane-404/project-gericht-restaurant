import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

const FrameStyle = styled(motion.span)(({ status = '' }) => [
	// tw`inline-block absolute bottom-full left-0`,
	(status === 'error') && tw`text-red-400`,
	(status === 'warning') && tw`text-yellow-400`,
	(status === 'success') && tw`text-green-400`,
])

const Frame = styled(FrameStyle)(() => [
	tw`inline-block absolute bottom-full left-0`,
])

const Alert = ({ children, message, status = '', ...rest }) => (
	status && (
		<Frame role="alert" status={ status } { ...rest }>
			{ children || message }
		</Frame>
	)
)

export { Alert }
// maybe keep it w/ form in Newsletter
