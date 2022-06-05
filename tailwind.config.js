module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /./,
    },
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        custom: {
          'primary': '#c084fc',
          'secondary': '#818cf8',
          'accent': '#bef264',
          'neutral': '#6b7280',
          'base-100': '#374151',
          'info': '#38bdf8',
          'success': '#5eead4',
          'warning': '#fbbf24',
          'error': '#fb7185',
        },
      },
    ],
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
