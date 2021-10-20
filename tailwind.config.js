module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
      },
      fontSize: {
        'tiny': '10px',
      },
    },
  },
  variants: {
    extend: {},
  },
  important: true,
  plugins: [require("@tailwindcss/typography")],
}
