import { HOME } from '@/constants/content'
import { Root, Caption } from '@/components/commons'
import { Wrapper, Heading } from './_.styles'
import { NewsletterForm } from './Form'

const Newsletter = () => {
	return (
		<Root.Frame>
			<Root.Container>
				<Wrapper>
					<Caption center text={ HOME.newsletter.caption } />
					<Heading>{ HOME.newsletter.heading }</Heading>
					<NewsletterForm />
				</Wrapper>
			</Root.Container>
		</Root.Frame>
	)
}

export { Newsletter }
