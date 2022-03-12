# Site Structure

## `/Home`

```jsx
import { Navbar, Footer } from '@/components/commons'
import {
	AboutUs,
	Chef,
	FindUs,
	Gallery,
	Header,
	Intro,
	Laurels,
	SpecialMenu,
} from '@/components/containers'

export const App = () => (
	<>
		<Navbar />
		<Header />
		<AboutUs />
		<SpecialMenu />
		<Chef />
		<Intro />
		<Laurels />
		<Gallery />
		<FindUs />
		<Footer />
	</>
)
```

### `@/components`

- `/blocks`

  - Heading : 1,2,3,4,5,6
  - Text : P,A
  - Button
  - Input

- `/commons`

  - MenuList, MenuItem, MenuSpecial
  - NavBar
  - Newsletter
  - Footer

- `/containers`
  - Header
  - AboutUs
  - SpecialMenu
  - Chef
  - Intro
  - Laurels
  - Gallery
  - FindUs

---

## Consideration

- Style Guide Page
- 404 Error Page
