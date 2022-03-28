import { motion } from 'framer-motion'
import tw, { styled, css } from 'twin.macro'

export const Wrapper = styled(motion.div)(() => [
	tw`border border-primary-5 bg-primary-4 py-8 px-6`,
	css`box-shadow: 22px 30px 95px 1px rgb(0 0 0 / 70%);`,
	tw`tablet:(p-10) laptop:(p-20)`
])

export const Heading = styled(motion.h2)(() => [
	tw`type-heading-1 text-[2.441rem] text-center mt-2 mb-5`,
	tw`laptop:(w-[700px] mx-auto mb-16 text-6xl leading-snug)`,
])
