module.exports = {
  purge: {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  /**
   * Only have the one below till TailwindCSS V2.0 releases:
   * https://tailwindcss.com/docs/upcoming-changes#remove-deprecated-gap-utilities.
   */
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
