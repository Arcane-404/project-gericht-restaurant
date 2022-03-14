import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const Frame = styled(motion.div)(() => [
	tw`border-black`,
  tw`px-4 tablet:px-6`
])

export const Container = styled(motion.div)(() => [ tw`container` ])
