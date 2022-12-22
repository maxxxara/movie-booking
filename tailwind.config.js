/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': {'max':'320px'},
      'xs': {'max':'370px'},
      'sm': {'max':'576px'},
      'md': {'max':'768px'},
      'lg': {'max':'1024px'},
      'xl': {'max':'1280px'},
      '2xl': {'max':'1536px'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#1A2C50',
      'yellow': '#FFBE00',
      'red': '#FF6B6B',
      'lightBlue': '#118EEA',
      'pastel': '#F2C46F',
      'gray8': '#333D58',
      'gray7': '#414A63',
      'gray6': '#5A637A',
      'gray4': '#9DA8BE',
      'gray3': '#BDC5D5',
      'gray2': '#C4C4C4',
      'grayBorder': '#DADFE8',
      'black': '#333333',
      'white': '#ffffff',
      'active': '#383782',
      'blueBg': '#000E62',
      'inputBlue': '#1A3250'
    },
    fontFamily: {
      'poppins': 'poppins'
    }
},
  plugins: []
}