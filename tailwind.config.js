module.exports = {
  purge: ['.src/pages/**/*.{js,ts,jsx,tsx}', '.src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'mark_button':"url('/img/button_mask_1.png')",
      },
      textColor:{
        'yellow':"#F68D38",
        'primary': '#49C0B0',
        'blue': '#261A69'
      },
      backgroundColor:{
        'item_box_color': 'rgba(255, 255, 255, 0.2)',
        'inactive_button': 'rgb(15 103 150 / 80%);'
      },
      outline: {
        white: '2px solid #ffffff',
      },
      height: {
        content: 'calc(100% - 14rem)',
       }
    },
  },
  variants: {
    extend: {
      animation: ['motion-reduce'],
    },
  },
  plugins: [],
}
