const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    screens: {
      xs: '375px',
      mob: '450px',
      sm: '640px',
      md: '768px',
      tab: '860px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      hd: '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        stripes:
          "url('https://res.cloudinary.com/moxvallix/image/upload/v1670814607/Moxvallix/mox_stripes_ni45ib.svg')",
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
