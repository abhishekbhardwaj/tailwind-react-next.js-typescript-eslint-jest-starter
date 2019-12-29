# tailwind-react-next.js-typescript-eslint-jest-starter

Starter template for building a project using React, Typescript, Next.js, Jest, TailwindCSS and ESLint.

## Setup Instructions

1. Clone or download the project.
2. `cd` in the project directory.
3. If you cloned the project, make sure you remove the remote reference to this project by running `git remote rm origin`.
4. Run `yarn install` or `npm install` to install all dependencies.

## Commands

- `yarn dev`: To start a local development server.
- `yarn test`: To run the entire unit test suite using `jest`.
- `yarn lint`: To run the ESLint based linter to find out the issues in the project.
- `yarn format`: To autoformat all the issues.
- `yarn export`: Run this after running `yarn analyze` to export a build copy.

## Code Structure

1. All Next.js entrypoints are housed in the `pages/` directory as a default.
2. Everything else is in the `src/` directory.
3. `src/components` are all stateless reusable components.
4. `src/containers` are more of stateful components for more main level components, like a whole page or screen for example.
5. `src/css` folder is there just to house the Tailwind initialization.

My personal preference is to have the bare minimum code in `pages/` and house everything in the `src/` directory. Helps keep everything in one place, neat and tidy. You can change this in any way you prefer.

If you feel like changing the directory structure, please change the appropriate settings in the following files:

- `.babelrc`
- `jest.config.js`
- `postcss.config.js`
- `tsconfig.json`
- The `lint` and the `format` scripts in `package.json`
