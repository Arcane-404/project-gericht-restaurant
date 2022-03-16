import { Root } from '@/components/commons'
// import { HOME } from '@/constants/content'
import {
	Display,
	Heading,
	SubHeading,
	Text,
} from './_type.styles'
import {
	Link,
	Button,
	Input,
} from './_comp.styles'

const StyleGuide = () => (
	<Root.Frame tw="min-h-full bg-black py-5">
		<Root.Container>
			<pre tw="dark:text-white">Style Guide Page</pre>
			<div>
				<Display>Display</Display>
				<Heading>Heading 1</Heading>
				<Heading.H2>Heading 2</Heading.H2>
				<SubHeading>Sub Heading 1</SubHeading>
				<SubHeading.H3>Sub Heading 2</SubHeading.H3>
			</div>
			<hr />
			<div>
				<Text>Body 1</Text>
				<Text.B2>Body 2</Text.B2>
				<Text.Alt>Body Alt</Text.Alt>
				<Text.Cap>Caption</Text.Cap>
			</div>
			<hr />
			<div>
				<Link>Link 1</Link>
				<br />
				<Link.L2>Link 2</Link.L2>
			</div>
			<div tw="space-y-2">
				<Button>Button</Button>
				<br />
				<Input type="text" value="Input" readOnly />
				<br />
				<Input type="text" placeholder="Placeholder" />
			</div>
		</Root.Container>
	</Root.Frame>
)

export { StyleGuide }
