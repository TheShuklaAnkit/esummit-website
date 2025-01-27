/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./base/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu-mono': ["'Ubuntu Mono'",'mono','sans-serif'],
        'raleway': ["'Raleway'",'sans-serif'],
      }
    },
  },
  plugins: [],
}
