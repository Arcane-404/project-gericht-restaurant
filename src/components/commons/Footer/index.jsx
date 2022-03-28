import { HOME } from '@/constants/content'
import { Root } from '@/components/commons'
import {
	Wrapper,
	Logo,
	Heading,
	Subheading,
	Text,
	Copyright,
} from './_.styles'
import { SocialLinks } from './SocialLinks'
import { Svgs, images } from '@/assets'

const Footer = () => {
	return (
		<Root.Frame as="footer">
			<Root.Container>
				<Wrapper>
					<Wrapper.Box>
						<Heading>{ HOME.footer.contact_us.heading }</Heading>
						<Wrapper.SubBox>
							<Text>{ HOME.footer.contact_us.location }</Text>
						</Wrapper.SubBox>
						<Wrapper.SubBox>
							<Text>{ HOME.footer.contact_us.phone_1 }</Text>
							<Text>{ HOME.footer.contact_us.phone_2 }</Text>
						</Wrapper.SubBox>
					</Wrapper.Box>

					<Wrapper.Box>
						<Logo src={ images.gericht } alt="gericht logo" />
						<Text vr="white">{ HOME.footer.quote }</Text>
						<Svgs.Spoon />
						<SocialLinks />
					</Wrapper.Box>

					<Wrapper.Box>
						<Heading>{ HOME.footer.working_hours.heading }</Heading>
						<Wrapper.SubBox>
							<Subheading>{ HOME.footer.working_hours.weekday.label }</Subheading>
							<Text vr="gold">{ HOME.footer.working_hours.weekday.time }</Text>
						</Wrapper.SubBox>
						<Wrapper.SubBox>
							<Subheading>{ HOME.footer.working_hours.weekend.label }</Subheading>
							<Text vr="gold">{ HOME.footer.working_hours.weekend.time }</Text>
						</Wrapper.SubBox>
					</Wrapper.Box>
				</Wrapper>

				<Copyright>{ HOME.footer.copyright }</Copyright>
			</Root.Container>
		</Root.Frame>
	)
}

export { Footer }
