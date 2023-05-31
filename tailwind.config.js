/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/*.liquid',
    './snippets/*.liquid'
  ],
  theme: {
    extend: {},
  },
  plugins: [
   require('@tailwindcss/forms'),
   require('@tailwindcss/aspect-ratio'),
   require('@tailwindcss/typography')
  ],
}

