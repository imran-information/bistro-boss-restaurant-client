/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'silkscreen': ['"Silkscreen", serif',],
        'montserrat': ['"Montserrat", serif',],
      },
      backgroundImage: {
        "distro-boss": "url('/src/assets/home/chef-service.jpg')",
      },
      colors: {
        'subTitle-color': '#D99904'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

