import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

const Frame = styled(motion.span).attrs(() => ({
	role: 'alert',
}))(({ status = '' }) => [
	tw`inline-block absolute bottom-full left-0`,
	(status === 'error') && tw`text-red-400`,
	(status === 'warning') && tw`text-yellow-400`,
	(status === 'success') && tw`text-green-400`,
])

const Alert = ({ children, message, status = '', ...rest }) => (
	status && (
		<Frame status={ status } { ...rest }>
			{ children || message }
		</Frame>
	)
)

export { Alert }
