module.exports = {
  '*.{js,jsx,ts,tsx}': 'npm run format',
  '*.{ts,tsx}': "bash -c 'npm run typecheck'", // running this via bash https://github.com/okonet/lint-staged/issues/825#issuecomment-727185296
}
