# Resources

All software apps, technologies, web tools, or articles I used for this project.

## Project Resources

- DEMO : https://gericht-restaurant.com/#home
- REPO : https://github.com/adrianhajdin/project_modern_ui_ux_restaurant
- DESIGN : https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-Ui%2FUx%3A-Gericht?node-id=53%3A2
- VIDEO : https://www.youtube.com/watch?v=4oV65GVVits
- Iqonic Design
  - source : https://ui8.net/iqonicdesign/products/gericht-restaurant-website-ui-in-figma
  - video : https://www.youtube.com/watch?v=6pq1VjdZFbU
  - purchase : https://iqonic.design/product/wordpress-themes/gericht-best-free-wordpress-theme-for-restaurant/
- other
  - dark mode : https://wordpress.iqonic.design/product/wp/gericht/
  - light mode : https://wordpress.iqonic.design/product/wp/gericht/home-light/

## API HTTP Request w/ cURL + JSON-Server

```sh
CLEAR == clear
curl -v == show spec output
curl -i == include header response

GET ALL
curl -X GET -H "Content-Type: application/json"  "http://localhost:8000/api/newsletter"

GET ONE
curl -X GET -H "Content-Type: application/json"  "http://localhost:8000/api/newsletter/1"

POST
curl -X POST -H "Content-Type: application/json" -d '{"email" : "new@example.com"}'  "http://localhost:8000/api/newsletter"

PUT
curl -XPUT -H "Content-Type: application/json" -d '{"email" : "new@another.com"}'  "http://localhost:8000/newsletter/3"

DELETE
curl -XDELETE -H "Content-Type: application/json"  "http://localhost:8000/newsletter/3"
```

- main
  - https://www.journaldev.com/10660/json-server
- other
  - https://flaviocopes.com/http-curl/
  - https://hackernoon.com/how-to-easily-use-curl-for-http-requests-db3249c5d4e6
  - https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d

## TailwindCSS Config

- main : https://tailwindcss.com/docs/configuration
- spec : https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
- variants : https://github.com/ben-rogerson/twin.macro/blob/master/src/config/variantConfig.js

## Contribute (Article)

- https://www.conventionalcommits.org/en/v1.0.0/
- https://blog.tericcabrel.com/apply-conventional-commit-style-on-your-project-with-commitlint/
- https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index

## Changelog (Article)

- main
  - https://changelog.md/
  - https://keepachangelog.com/en/1.0.0/
- other
  - https://www.freecodecamp.org/news/a-beginners-guide-to-git-what-is-a-changelog-and-how-to-generate-it/
  - https://gist.github.com/brianclements/5d9b8412de1683cce648
- dependency
  - https://github.com/github-changelog-generator/github-changelog-generator
  - https://github.com/conventional-changelog/conventional-changelog
  - https://github.com/git-chglog/git-chglog
  - https://github.com/CookPete/auto-changelog
  - https://github.com/lob/generate-changelog

## Web Tool

- Markdown
  - https://www.tablesgenerator.com/markdown_tables
