module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /./,
    },
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['cupcake'],
  },
  theme: {
    container: {
      center: true,
      screens: {
        sm: '716px',
        md: '740px',
        lg: '960px',
        xl: '1024px',
      },
    },
    screens: {
      sm: '576px',
      md: '890px',
      lg: '992px',
      xl: '1200px',
    },
    textTransform: 'normal-case',
  },
};
