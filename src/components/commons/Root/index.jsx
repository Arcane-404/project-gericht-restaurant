import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const Frame = styled(motion.div)(({ isAlt = false }) => [
  tw`px-4 tablet:(px-6) desktop:(px-8)`,
	!isAlt && tw`py-24`
])

export const Container = styled(motion.div)(() => [ tw`container` ])
