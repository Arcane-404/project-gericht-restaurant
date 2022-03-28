import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const Frame = styled(motion.div)(({ isAlt = false }) => [
	tw`border-black`,
  tw`px-4 tablet:(px-6) 2xl:(px-0)`,
	!isAlt && tw`py-24`
])

export const Container = styled(motion.div)(() => [ tw`container` ])
