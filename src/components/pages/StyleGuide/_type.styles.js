import tw, { styled } from 'twin.macro'

export const Display = styled('h1')(() => [
	tw`type-display`,
])

export const Heading = styled('h1')(() => [
	tw`type-heading-1`,
	// size: 45px // 64px // text-[2.8125rem]
	// lead: 70px // 83px
	// tw`text-accent-base font-heading text-5xl font-bold leading-normal tracking-wide capitalize`,
])

Heading.H2 = styled('h2')(() => [
	tw`type-heading-2`,
	// sive: 32px
	// lead: 42px
	// tw`text-neutral-white font-heading text-[2rem] font-normal leading-normal tracking-wide capitalize`,
])

export const SubHeading = styled('h2')(() => [
	tw`type-subheading-1`,
	// size: 35px // 45px // text-[2.1875rem]
	// lead: 48px
	// tw`text-accent-base font-heading text-3xl font-bold leading-loose tracking-wide capitalize`,
])

SubHeading.H3 = styled('h3')(() => [
	tw`type-subheading-2`,
	// (vr === 'subheading-2') && tw`text-accent-base font-body-alt text-lg font-bold leading-loose tracking-wide capitalize`,
])

export const Text = styled('p')(() => [
	tw`type-body-1`,
	// tw`type-body-2`,
	// size: 12px // 14px // 16px
	// lead: 28px
	// tw`text-neutral-white font-body text-xs font-normal leading-loose tracking-wide capitalize`,
])

Text.B2 = styled('p')(() => [
	tw`type-body-2`,
	// (vr === 'body-2') && tw`text-neutral-gray-1 font-body text-xs font-normal leading-loose tracking-wide capitalize`,
])

Text.Alt = styled('p')(() => [
	tw`type-body-alt-1`,
	// lead: 41px
	// (vr === 'body-alt-1') && tw`text-accent-base font-body-alt text-base font-normal leading-loose tracking-wide capitalize`,
])

Text.Cap = styled('p')(() => [
	tw`type-caption`,
	// size: 19px // 21px // 23px
	// lead: 30px
	// font-feature-settings: "tnum" on,"lnum" on;
	// (vr === 'caption') && tw`text-neutral-white font-body-alt text-lg font-bold leading-loose tracking-wide capitalize`,
])
