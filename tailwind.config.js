/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary : "#FF1949",
        secondary: "#252525"
      },
      backgroundImage: {
        'registration-bg': "url('/src/assets/RegistrationBg/Registration.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]

}

