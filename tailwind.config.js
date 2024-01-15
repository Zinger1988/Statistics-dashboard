/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: '100dvh',
      },
      gridTemplateColumns: {
        layout: '300px 1fr',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
    // fontFamily: {
    //   pizza: 'Arial, sans-serif' // Overriding
    // },
  },
  plugins: [],
};

export default config;
