# Structure

## File Structure

```
/folder
	/sub-folder
		_.styles.js
		_.stories.js
		_.test.js
		index.jsx
	index.js
```

### import/export

- use index files as default/root file
- export one :: `index.jsx` == `const ExampleItem = (props) => ()` && `export { ExampleItem }`
- export all :: `index.js` == `export { ExampleItem } from './ExampleItem'`
- import any :: `import { ExampleItem } from './components'`

## Folder Structure

### `/`

```
/.github :: action workflow, CI/CD
/.husky  :: commit code quality standards
/config  :: modules for Vite + TailwindCSS
/docs 	 :: repo info + content

---

.babel-plugin-macrorc.json
	:: to connect TailwindCSS + Twin Macro

.commitlintrc.json
	:: to check quality of commit messages
.cz.json
	:: to help prepare make commit message

.editorconfig.json
	:: to clean up editor changes
.eslintrc.json + .eslintignore
	:: to lint for code quality
.lintstagedrc.json
	:: to change only staged files
.prettierrc.json + .prettierignore
	:: to format for code quality

postcss.config.json
	:: to apply for cross-browser styling
tailwind.config.json
	:: to connect to TailwindCSS (compiler)
vite.config.json
	:: to connect to Vite (bundler)

index.html
	:: root file
jsconfig.json
	:: custom paths
CHANGELOG.md
	:: doc notes on progress
README.md
	:: repo content about project
```

### `/src`

```
/assets
	/fonts 	:: files
	/icons 	:: react files
	/images :: files
	/svgs 	:: react files
	/videos :: files

/components :: ui
	/blocks 	:: single elements
	/commons 	:: shareable elements
	/containers	:: widget/partial
	/pages 		:: layout/template

/services :: feature
	/contexts 	:: context provider + consumer
	/routes 	:: endpoint, pathway

---

/constants	:: static data/content
/utils 		:: custom tools
/theme 		:: Theme Provider
```
