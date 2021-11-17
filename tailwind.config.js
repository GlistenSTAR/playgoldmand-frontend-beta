module.exports = {
  purge: ['.src/pages/**/*.{js,ts,jsx,tsx}', '.src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'mark_button': "url('/img/button_mask_1.png')",
        'buy_card_wrapper': "url('/img/wrapper/buy_btn_wrapper.png')",
      },
      backgroundSize: {
        'content': '100% 100%'
      },
      textColor: {
        'yellow': "#F68D38",
        'primary': '#49C0B0',
        'blue': '#261A69'
      },
      backgroundColor: {
        'item_box_color': 'rgba(255, 255, 255, 0.2)',
        'inactive_button': 'rgb(15 103 150 / 80%);',
        'buy_card_color': '#f68e35',
        'in_use_color': '#47b594',
      },
      outline: {
        white: '2px solid #ffffff',
      },
      height: {
        content: 'calc(100% - 12rem)',
        '1/10': '10%',
      },
      borderRadius: {
        'buy_card_radius': '25px',
        'in_use_radius': '10px',
      },
      borderWidth: {
        '3': '3px',
        '1': '1px',
      },
      inset: {
        'center': 'calc(50% - 7.5rem)',
        'in_use_center': '25%',
        'in_use_bottom': '-4%',
      },
      fontSize: {
        '7/10': '70%',
        '9/10': '90%',
        '0': '0px',
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
