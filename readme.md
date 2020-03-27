# tailwind-react-next.js-typescript-eslint-jest-starter

Starter template for building a project using React, Typescript, Next.js, Jest, TailwindCSS and ESLint.

## Setup Instructions

1. Clone or download the project.
2. `cd` in the project directory.
3. If you cloned the project, make sure you remove the remote reference to this project by running `git remote rm origin`.
4. Copy `.env.example` to `.env` as that file is used to load up all your environment variables.
4. Run `yarn install` or `npm install` to install all dependencies.

## Commands

- `yarn dev`: To start a local development server.
- `yarn test`: To run the entire unit test suite using `jest`.
- `yarn lint`: To run the ESLint based linter to find out the issues in the project.
- `yarn format`: To autoformat all the issues.
- `yarn export`: Run this after running `yarn analyze` to export a build copy.

- `yarn upgrade --latest`: To upgrade all packages to their latest versions (could include breaking changes).

## Code Structure

1. All Next.js entrypoints are housed in the `pages/` directory as a default.
2. Everything else is in the `src/` directory.
3. `src/components` are all stateless reusable components.
4. `src/containers` are more of stateful components for more main level components, like a whole page or screen for example.
5. `src/css` folder is there just to house the Tailwind initialization.
6. All env variables are available in `.env` files (`.env` file isn't committed). Whenever you update `.env`, please update `.env.example` and `.env.test` and `next.config.js` to proxy all environment variables properly.
    You can access these variables in the app source code anywhere using `process.env.<VAR_NAME>`.

My personal preference is to have the bare minimum code in `pages/` and house everything in the `src/` directory. Helps keep everything in one place, neat and tidy. You can change this in any way you prefer.

If you feel like changing the directory structure, please change the appropriate settings in the following files:

- `.babelrc`
- `jest.config.js`
- `postcss.config.js`
- `tsconfig.json`
- The `lint` and the `format` scripts in `package.json`

## Note

1. This project removes the `x-powered-by` response header via `next.config.js` by marking the `poweredByHeader` property as `false`.

2. This project also adds support for trailing slash on URL's. So if you have a route for `/dashboard`, a request for `/dashboard/` 404's. This is definitely true for file-based URL's as documented here: https://github.com/zeit/next.js/issues/5214#issuecomment-564724632.

    Picked the fix from that GitHub Issue. After applying that fix, `/dashboard/` will also redirect to `/dashboard` instead of 404ing.

3. If you wish to use Enzyme instead of React Testing Library, please refer to [this commit](https://github.com/abhishekbhardwaj/tailwind-react-next.js-typescript-eslint-jest-starter/commit/58bde782bef1050cc91a20fccecb7c6e4a6216aa). Enzyme was removed with that commit.
