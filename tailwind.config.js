module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'landscape':"url('./../assets/img/landscape.png')",
        'logo_1':"url('./../assets/img/logo_1.png')"
      },
      textColor:{
        'yellow':"#F68D38"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
