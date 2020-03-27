/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
]

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    'cssnano',
  ],
}
