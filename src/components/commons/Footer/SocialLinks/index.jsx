import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'
import uniqid from 'uniqid'
import { social } from '@/constants/listing'

const Social = styled(motion.div)(() => [
	tw`flex gap-6`
])
Social.Link = styled(motion.a)(() => [
	tw`text-white text-2xl`,
	tw`hover:(text-accent-base)`
])

const SocialLinks = () => {
	return (
		<Social>
			{social.map((item) => (
				<Social.Link
					key={ uniqid() }
					targe="_blank"
					rel="noopener noreferrer"
					href={ item.link }
				>
					<item.Icon />
				</Social.Link>
			))}
		</Social>
	)
}

export { SocialLinks }
