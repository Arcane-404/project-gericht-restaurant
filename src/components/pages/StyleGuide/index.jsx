import tw, { styled, css } from 'twin.macro'
import { Root } from '@/components/commons'
// import { HOME } from "@/constants/content"

const Display = styled('h1')(() => [
	// tw`type-display`,
	// size: 90px
	// lead: 117px
	tw`text-secondary-base font-display text-[5.625rem] font-bold leading-loose tracking-wide uppercase`,
	css`font-variant-numeric: tabular-nums lining-nums;`,
])

const Heading = styled('h1')(({ vr }) => [
	// tw`type-heading-1`,
	// size: 45px // 64px // text-[2.8125rem]
	// lead: 70px // 83px
	tw`text-secondary-base font-heading text-5xl font-bold leading-normal tracking-wide capitalize`,
	// tw`type-heading-2`,
	// sive: 32px
	// lead: 42px
	(vr === 'heading-2') && tw`text-neutral-white font-heading text-[2rem] font-normal leading-normal tracking-wide capitalize`,
	css`font-variant-numeric: tabular-nums lining-nums;`,
])

const SubHeading = styled('h2')(({ vr = 'subheading-1' }) => [
	// tw`type-subheading-1`,
	// size: 35px // 45px // text-[2.1875rem]
	// _ | _ | 48px
	tw`text-secondary-base font-heading text-3xl font-bold leading-loose tracking-wide capitalize`,
	// tw`type-subheading-2`,
	(vr === 'subheading-2') && tw`text-accent-base font-body-alt text-lg font-bold leading-loose tracking-wide capitalize`,
	css`font-variant-numeric: tabular-nums lining-nums;`,
])

const Text = styled('p')(({ vr }) => [
	// tw`type-body-1`,
	// tw`type-body-2`,
	// size: 12px // 14px // 16px
	// lead: 28px
	tw`text-neutral-white font-body text-xs font-normal leading-loose tracking-wide capitalize`,
	(vr === 'body-2') && tw`text-neutral-gray-1 font-body text-xs font-normal leading-loose tracking-wide capitalize`,
	// tw`type-overline`,
	// tw`type-caption`,
	// size: 19px // 21px // 23px
	// lead: 30px
	// font-feature-settings: "tnum" on,"lnum" on;
	(vr === 'caption') && tw`text-neutral-white font-body-alt text-lg font-bold leading-loose tracking-wide capitalize`,
	css`font-variant-numeric: tabular-nums lining-nums;`,
	// tw`type-alt-1`,
	// tw`type-alt-2`,
	// lead: 41px
	(vr === 'body-alt-1') && tw`text-accent-base font-body-alt text-base font-normal leading-loose tracking-wide capitalize`,
])

const Link = styled('a')(({ vr = 'link-1' }) => [
	// tw`type-link`,
	tw`text-accent-base font-body-alt text-3xl font-normal leading-loose tracking-wide capitalize`,
	// tw`type-link-2`
	(vr === 'link-2') && tw`text-neutral-white text-2xl font-normal leading-loose tracking-wide capitalize`,
])

const Button = styled('button')(() => [
	// tw`type-button`,
	// lead: 28px
	tw`bg-accent-base`,
	tw`text-neutral-black font-body-alt text-base font-bold leading-loose tracking-wide capitalize`,
])

const Input = styled('input')(() => [
	// tw`type-field`,
	tw`bg-transparent border-2 border-accent-base`,
	tw`text-neutral-white font-body-alt text-base font-normal`,
])


const StyleGuide = () => {
	return (
		<Root.Frame tw="bg-black py-5">
			<Root.Container>
				<pre>Style Guide Page</pre>
				<div>
					<Display>Display</Display>
					<Heading>Heading 1</Heading>
					<Heading as="h2" vr="heading-2">Heading 2</Heading>
					<SubHeading>Sub Heading 1</SubHeading>
					<SubHeading as="h3" vr="subheading-2">Sub Heading 2</SubHeading>
				</div>
				<hr />
				<div>
					<Text>Body 1</Text>
					<Text vr="body-2">Body 2</Text>
					<Text vr="body-alt-1">Body Alt</Text>
					<Text vr="caption">Caption</Text>
				</div>
				<hr />
				<div>
					<Link>Link 1</Link>
					<br />
					<Link vr="link-2">Link 2</Link>
					<br />
					<Button>Button</Button>
				</div>
				<hr tw="py-1" />
				<div>
					<Input type="text" className="type-field" value="Input" />
					<br />
					<Input type="text" className="type-field" placeholder="Placeholder" />
				</div>
			</Root.Container>
		</Root.Frame>
	)
}

export { StyleGuide }
