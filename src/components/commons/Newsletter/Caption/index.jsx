import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'
import { Svgs } from '@/assets'

const Frame = styled(motion.div)(({ center = false }) => [
	center && tw`flex flex-col items-center`
])
const Text = styled(motion.p)(() => [
	tw`type-caption text-xl mb-2.5 desktop:(text-2xl)`,
])

const Caption = ({ children, text, center = false }) => {
	return (
		<Frame center={ center }>
			<Text>{ children || text }</Text>
			<Svgs.Spoon />
		</Frame>
	)
}

export { Caption }
