import { HOME } from '@/constants/content'
import { Root } from '@/components/commons'
import {
	Wrapper,
	Logo,
	Spoon,
	Heading,
	Subheading,
	Text,
	Copyright,
} from './_.styles'
import { SocialLinks } from './SocialLinks'
import { gericht } from '@/assets/images'
import { spoonIcon } from '@/assets'

const Footer = () => {
	return (
		<Root.Frame as="footer">
			<Root.Container>
				<Wrapper>
					<Wrapper.Box>
						<Heading>{ HOME.footer.contact_us.heading }</Heading>
						<Wrapper.SubBox>
							<Text>{ HOME.footer.contact_us.location }</Text>
							<Text>{ HOME.footer.contact_us.phone_1 }</Text>
							<Text>{ HOME.footer.contact_us.phone_2 }</Text>
						</Wrapper.SubBox>
					</Wrapper.Box>

					<Wrapper.Box>
						<Logo src={ gericht } alt="gericht logo" />
						<Text>{ HOME.footer.more_information.quote }</Text>
						<Spoon src={ spoonIcon } alt="spoon icon" />
						<SocialLinks />
					</Wrapper.Box>

					<Wrapper.Box>
						<Heading>{ HOME.footer.working_hours.heading }</Heading>
						<Wrapper.SubBox>
							<Subheading>{ HOME.footer.working_hours.weekday.label }</Subheading>
							<Text>{ HOME.footer.working_hours.weekday.time }</Text>
						</Wrapper.SubBox>
						<Wrapper.SubBox>
							<Subheading>{ HOME.footer.working_hours.weekend.label }</Subheading>
							<Text>{ HOME.footer.working_hours.weekend.time }</Text>
						</Wrapper.SubBox>
					</Wrapper.Box>
				</Wrapper>

				<Copyright>{ HOME.footer.copyright }</Copyright>
			</Root.Container>
		</Root.Frame>
	)
}

export { Footer }
