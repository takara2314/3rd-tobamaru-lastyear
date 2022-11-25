/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Figtree', 'Noto Sans JP', 'Meiryo', 'sans-serif'],
        'message': ['Sawarabi Gothic', 'Noto Sans JP', 'Meiryo', 'sans-serif']
      },
      colors: {
        'tobamaru': {
          '50': '#ffe5e8',
          '100': '#ffc7cc',
          '200': '#ff8f98',
          '300': '#ff5765',
          '400': '#ff1f31',
          '500': '#e60013',
          '600': '#b8000f',
          '700': '#8a000b',
          '800': '#5c0008',
          '900': '#2e0004'
        }
      }
    }
  }
};
