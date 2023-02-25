/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        background: '#262222',
        brown: {
          200: '#3A2B2B'
        }
      }
    }
  },
  plugins: []
}
