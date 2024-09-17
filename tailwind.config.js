/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        customBg: 'rgb(255, 245, 205)',
        selectedsectionColor:'rgb(255, 205, 0)',
        navbarcolor:'rgb(0, 100, 0)'
      },
    },
  },
  plugins: [],
}

