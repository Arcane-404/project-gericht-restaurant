# CONTRIBUTE

## Overview

- Branch Name
- Commit Message
- Extension/Plugin

## Extensions/Plugins

- ConfigEditor :: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
- Prettier :: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- ESLint :: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## Subject (e.g. Changlog)

Group changes to describe their impact on the project

| Action    | Purpose                               |
| --------- | ------------------------------------- |
| Add       | for new features                      |
| Change    | for changes in existing functionality |
| Deprecate | for soon-to-be removed features       |
| Remove    | for now removed features              |
| Fix       | for any bug fixes                     |

## Type

| Action   | Purpose                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------- |
| build    | changes that affect build system<br>e.g. build tool, ci pipeline, dependencies, project version, etc... |
| chore    | changes that aren't user-facing                                                                         |
| feat     | changes that introduce a new feature                                                                    |
| enh      | changes on a feature as an enhancement                                                                  |
| perf     | changes which improve performance                                                                       |
| docs     | changes that affect the documentation                                                                   |
| fix      | changes that patch a bug fix or hot fix                                                                 |
| refactor | changes which neither fix a bug nor add a feature                                                       |
| revert   | changes that revert a previous commit                                                                   |
| style    | changes that don't affect code logic<br>e.g. white-spaces, formatting, missing semi-colons, etc...      |
| test     | changes that add missing tests or correct existing tests                                                |

## Scope

- indicates the scope in your project
  - e.g. `enh(navbar):`, `feat(api):`, `build(files):`
- examples
  - client, server, database, api
  - authentication, admin, user
  - dashboard, settings, payments

## Guidelines

- imperative commands (present tense)
  - e.g. "change" != "changed" | "changes" | "changing"
- Don't capitalize the first letter
- No dot (.) at the end of the subject
- footer commit
  - in end of body message, include, "BREAKING CHANGE"
  - indicating if it's breaking changes or the reference issues that this commit refers to
  - name of authors who contributed

### Valid Examples

```
docs: correct spelling of CHANGELOG

feat(translation): add support for french language

style(database): delete useless code inside the generated migration

build: release version 2.1.0

feat(authentication): replace the authentication provider from xxx to yyy

perf(payments): improve payment processing by 500ms

---

chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
refers to JIRA-1337
Co-authored-by: teco, pinas, pavelito
```

## Format

- `type(scope): [ticket-id]`
- `type(scope): [descriptor | caption | subject]`
- `<keyword type>[optional scope]: <description> [optional body] [optional footer(s)]`
