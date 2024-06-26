<!-- TODO: add badges semantic release, lerna, commitlint, github actions -->

# Versioned Monorepo Template

This project showcases a monorepo template with independent versioning capabilities. Versioning is based on semantic commits and is applied to to the packages and to the whole project itself.

## Features

<!-- TODO: document features of this template -->

## What is used?

- [Lerna / NX](https://lerna.js.org/)
- [NPM Workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces)
- [Semantic Release](https://github.com/conventional-changelog/commitlint)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Github Actions](https://docs.github.com/en/actions)

<!-- TODO: document config -->

## Commands

| Command name | Description |
| -- | -- |
| `npm run prepare` | Runs the project development preparation scripts (runs automatically after npm install). |
| `npm start` | compiles into dist in watch mode |
| `npm run build` | Runs the build command for all packages |
| `npm run test` | Runs the test command for all packages |
| `npm run format` | Run formatting checks at project root |
| `npm run lint` | Runs all lint commands below |
| `npm run lint:format` | Checks for formatting issues |
| `npm run lint:format:fix` | Fix formatting automatically |
| `npm run lint:code` | Checks for code issues,  |
| `npm run lint:code:fix` | Fix code lint issues automatically |
| `npm run lint:typescript` | Checks for typescript issues |
| `npm run lint:style` | Checks for CSS issues |
| `npm run clean` | Clean production output for all packages |
| `npm run audit` | Get dependency info, unused stuff, list all TODO's and FIXME's |
| `npm run clean` | Cleans outputs from generated files such as `dist` |
| `npm run clean:cache` | Cleans cache files |
| `npm run clean:deps` | Cleans dependencies | 

## Package Standards & Guidelines

All packages should match the following standards and guidelines
 in order to allow a linear maintenance capability and overall project readability.

### Commands

| Command name | Description |
| -- | -- |
| `npm start` | Run development mode build in watch mode |
| `npm run build` | Build the production output |
| `npm run test` | Run tests once |
| `npm run clean` | Clean production output |

### Structure

| Path | Description |
| -- | -- |
| `dist` | Location of production output files |
| `src` | Location of source code files, ideally having an `index` file as entry point |
| `README.md` | Entry point for the package documentation, the documentation should cover all the distribution output and should link to package development documentation |

## Package Visibility & Package Registries

Ensure all of the packages are either [public or private](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#private) as specifically intended.

Set up a `.npmrc` file or npm authentication in order to publish to the desired registry (npm/github, etc).
- [NPM - Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Github - Introduction to GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#about-github-package-registry)
- [Github - Publishing a Package](https://docs.github.com/en/packages/learn-github-packages/publishing-a-package)

## CI/CD

https://lerna.js.org/docs/features/distribute-tasks#cicd-examples
https://lerna.js.org/docs/features/distribute-tasks#ci-execution-flow
https://github.com/semantic-release/semantic-release/blob/master/docs/usage/ci-configuration.md#ci-configuration
https://github.com/semantic-release/cli#github-actions
