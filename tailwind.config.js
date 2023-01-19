const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
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
