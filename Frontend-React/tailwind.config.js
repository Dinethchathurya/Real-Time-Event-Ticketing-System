/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#D93337",
          "secondary": "#20214D",
          "accent": "#37cdbe",
          "neutral": "#3d4451",

        },
      },
      "light"],
  },
  plugins: [
    require('daisyui'),
  ],
}
