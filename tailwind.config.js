/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f0f0f',
        secondary: '#1a1a1a',
        accent: '#fbbf24',
        'dark-gray': '#121212',
      },
      boxShadow: {
        soft: '0 8px 25px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

