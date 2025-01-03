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
        "featured-bgImg": "url('/src/assets/home/featured.jpg')",
        "menu-banner1": "url('/src/assets/menu/banner3.jpg')",
        "authentication": "url('/src/assets/others/authentication.png')",
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

