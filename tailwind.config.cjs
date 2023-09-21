/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.sass", "./assets/**/*.scss",  "./app/*.{js,json}"],
  theme: {
    extend: {
      colors: {
        primary: '#4A99E9', // azul - claro
        primary_hover: 'rgba(74, 153, 233, 0.51)', // azul - oscuro
        red_icons: '#EB5757',
        black: '#000000',     
        dark_gray: '#212327', // hover
        mid_gray: '#B8B8B8', 
        light_gray: '#EAEAEA',
        icons_gray: '#606060',
        white: '#FFFFFF',
      },
      fontSize: {
        base: "1rem"
      },
    },
  },
  plugins: [],
};
