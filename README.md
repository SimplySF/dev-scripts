# @simplysf/dev-scripts

[![NPM](https://img.shields.io/npm/v/@simplysf/dev-scripts.svg?label=@simplysf/dev-scripts)](https://www.npmjs.com/package/@simplysf/dev-scripts) [![Downloads/week](https://img.shields.io/npm/dw/@simplysf/dev-scripts.svg)](https://npmjs.org/package/@simplysf/dev-scripts) [![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-yellow.svg)](https://raw.githubusercontent.com/@simplysf/dev-scripts/main/LICENSE.txt)

## What is this?

A collection of commonly needed scripts and hooks used by @simplysf typescript projects. This helps to enforce consistency across and reduces the amount of time it takes to setup new projects. This also reduces the amount of needed configuration required for each project by using common configuration from [@salesforce/dev-config](https://www.npmjs.com/package/@salesforce/dev-config) by default.

When dev-scripts is added as a dev dependency, it will enforce the package.json has the right scripts, hooks, and dependencies. Use the `.sfdevrc.json` to configure what is generated and controlled.

To automatically have dev-scripts enabled after install, edit `package.json`:

```json
// package.json
{
  "scripts": {
    "prepare": "sf-install"
  }
}
```

The common scripts that are added to each project include:

- clean: cleans lib/, coverage/, and a host of other files that shouldn't be included in the repository; include `all` to also clean node_modules
  e.g. `yarn clean` or `yarn clean-all`
- compile: compiles src/ to /lib using tsc
  e.g. `yarn compile`
- lint: lints src/ using tslint
  e.g. `yarn lint`
- test: runs tests using nyc and mocha
  e.g. `yarn test`
- build: runs the clean, compile, lint, and test targets
  e.g. `yarn build`
- docs: generates docs/ using typedoc
  e.g. `yarn docs`

The common hooks that are added to each project include:

- commit-msg: verifies the commit message conforms to [angular guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) using [commitlint](https://github.com/marionebl/commitlint).
- pre-commit: runs prettier on staged files and `yarn docs`.
- pre-push: runs `yarn build`.

## Configuration

To configure what this generates and controls, create a `.sfdevrc` file. Look at the [schema](./sfdevrc.schema.json) to see what options are available.

## Config File Notes

By default, devScripts will try to keep your package.json aligned with its standards.

For example, devScripts will remove dependencies that it provides. If you want to keep yours, you'd add it in to the `sfdevrc`. Imagine you need to be on a higher or lower version of mocha that devScripts provides:

```json
{
  "devDepOverrides": ["mocha", "@types/mocha"]
}
```

And it maintains the `scripts` and `wireit` properties. Imagine you want a different lint step in wireit, and a different test step:

```json
{
  "scripts": {
    "test": "yarn test:nuts"
  },
  "wireit": {
    "lint": {
      "command": "eslint src test --color",
      "files": ["src/**/*.ts", "test/**/*.ts", "messages/**", "**/.eslint*", "**/tsconfig.json"],
      "output": []
    }
  }
}
```

### tsconfig

The `include` section has to live in the repository's tsconfig file until there is a way to specify a base. We plan to remove this section when https://github.com/Microsoft/TypeScript/issues/25430 is fixed

### Release

DevScripts has an action you can run which will run the devScripts action in lots of repos (they check for an update, and then bump the version, do an install, etc.)

This runs automatically after devScripts releases.

You need to maintain the list of repos here: https://github.com/@simplysf/dev-scripts/blob/main/.github/workflows/cross-repo-bump.yml
