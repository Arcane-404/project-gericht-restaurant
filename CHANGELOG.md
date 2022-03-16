# Changelog

All noteable changes to this project will be documented in this project.

## 2022-03-15

- build: finally have GitHub Action working
- enh(navbar): update mobile NavBar, include type

- notes
  - later
    - add Test: testing w/ Storybook + Jest
    - add Build: building w/ Vite + TailwindCSS
    - add Publish: deploy to Netlify/Heroku, get SECRET_TOKEN

## 2022-03-14

- enh(style-guide): apply type into theme, convert to compound component

- notes
  - [ ] apply typography for tablet, laptop, desktop
  - [ ] change Navbar w/ typography
  - [ ] start working on Footer

## 2022-03-12

- fix(navbar): remove uneeded prop and styling
- feat(navbar): apply toggle effect to open or close menu
- enh(navbar): create section, apply typography and desktop layout
- enh(home): create home page content on json file

- notes
  - [ ] replace `<hr/>` w/ `li::before` to create divider
  - [ ] create Navbar for Mobile, Tablet, and Laptop
    - [ ] Mobile: full screen, vertical
    - [ ] Tablet: drop down, vertical
    - [ ] Laptop: show as regular, horizonal
  - [ ] in Style Guide Page, create reusable text style (e.g. `type-`)
    - [ ] e.g. caption, heading, description, body, link, button
  - [ ] research better Navbar setup
    - [ ] e.g. tailwind, npm ui library, functionality
