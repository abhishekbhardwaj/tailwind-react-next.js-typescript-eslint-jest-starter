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
- `yarn test:ci`: To run tests on CI.
- `yarn lint`: To run the ESLint based linter to find out the issues in the project.
- `yarn format`: To autoformat all the issues.
- `yarn export`: Run this after running `yarn analyze` to export a build copy.
- `yarn production`: To export a production build. Use `yarn start` to serve that.

- `yarn upgrade --latest`: To upgrade all packages to their latest versions (could include breaking changes).

## Code Structure

All source code is located in the `src/` directory.

1. All Next.js entrypoints are housed in the `src/pages` directory as a default.

    - Currently has `_app.tsx` which imports TailwindCSS.
    - There's also a sample `index.tsx`.

    **NOTE:** Feel free to move `pages` outside of `src/` if that's what you prefer. You'll just need to restart your local development server and everything should continue working as normal.

2. `src/components` are all stateless reusable components.
3. `src/css` folder is there just to house any CSS.

    - Currently contains the TailwindCSS initialization CSS file.

4. All env variables are available in `.env` files (`.env` file isn't committed). Whenever you update `.env`, please update `.env.example` and `.env.test` and `next.config.js` to proxy all environment variables properly.

    - You can access these variables in the app source code anywhere using `process.env.<VAR_NAME>`.

If you feel like changing the directory structure, please change the appropriate settings in the following files:

- `.swcrc`
- `jest.config.js`
- `postcss.config.js`
- `tsconfig.json`
- The `lint` and the `format` scripts in `package.json`

## Note

1. This project removes the `x-powered-by` response header via `next.config.js` by marking the `poweredByHeader` property as `false`.

2. If you wish to use `Enzyme` instead of `React Testing Library`, please refer to [this commit](https://github.com/abhishekbhardwaj/tailwind-react-next.js-typescript-eslint-jest-starter/commit/58bde782bef1050cc91a20fccecb7c6e4a6216aa). Enzyme was removed with that commit.

3. If you wish to use Babel instead of SWC (introduced with the Next.js v12 upgrade), please remove the `.swcrc` file and add a `.babelrc` file at the root with the following:

```
{
    "presets": [
        "next/babel"
    ],
    "plugins": [
        [
            "module-resolver",
            {
                "root": [
                    "./"
                ],
                "alias": {
                    "@src": "./src"
                },
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ]
    ]
}
```

Then, open `./jest.config.js` and find the `globals` config. Add `babelConfig: true,` to it, like so:

```diff
{
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.jest.json',
+           babelConfig: true,
            diagnostics: false,
        },
    },
}
```

Also, run `yarn add -D @babel/core babel-plugin-module-resolver eslint-import-resolver-babel-module` to install Babel's dependencies.
