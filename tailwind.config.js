/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9E7FFF',
        secondary: '#38bdf8',
        accent: '#f472b6',
        background: '#171717',
        surface: '#262626',
        text: '#FFFFFF',
        textSecondary: '#A3A3A3',
        border: '#2F2F2F',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      borderRadius: {
        'xl': '16px', // Custom large radius based on 16px instruction
      },
      spacing: {
        '128': '32rem', // Example for large spacing
      }
    },
  },
  plugins: [],
}
