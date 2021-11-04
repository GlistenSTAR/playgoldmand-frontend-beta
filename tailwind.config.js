module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundImage:{
      //   'landscape':"url('./../assets/img/landscape.svg')",
      //   'logo_1':"url('./../assets/img/logo_1.svg')",
      // },
      textColor:{
        'yellow':"#F68D38"
      },
      backgroundColor:{
        'item_box_color': 'rgba(255, 255, 255, 0.2)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
