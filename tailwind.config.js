/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightout: 'rgba(255,255,255,0.1)',
        lightin: 'rgba(255,235,0,1)'
      },
      fontSize: {
        '9xl': '7.5rem' 
      },
      boxShadow: {
        'bulbin': '0px 0px 1000px 77px #60a5fa',
        'bulbout': '0px 0px 0px 0px transparent'
      }
    },
  },
  plugins: [],
}

