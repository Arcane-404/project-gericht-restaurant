import tw, { styled } from 'twin.macro'

export const Link = styled('a')(() => [
	tw`type-link-1`,
])

Link.L2 = styled('a')(() => [
	tw`type-link-2`
])

export const Button = styled('button')(() => [
	tw`type-button`,
	// lead: 28px
	// padding: .5rem 1.5rem;
	tw`bg-accent-light py-2 px-6 hocus:(bg-accent-base)`,
	// tw`text-neutral-black font-body-alt text-base font-bold leading-loose tracking-wide capitalize`,
])

export const Input = styled('input')(() => [
	tw`type-field`,
	tw`bg-transparent py-3 px-4 border border-accent-base rounded-md w-full focus:(border-accent-light)`,
	// tw`text-neutral-white font-body-alt text-base font-normal`,
])
