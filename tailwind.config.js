/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#2e2e2e',
        text: '#ffffff',
        primary: '#3b82f6',
        secondary: '#4b5563',
        border: '#6b7280', // Add this line to define a border color
      },
    },
  },
  plugins: [],
}

