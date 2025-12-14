/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Black background
        'bg-dark': '#0a0a0a', 
        // Slightly lighter for cards
        'bg-card': '#121212', 
        // Terminal Green
        'neon-green': '#00ff41', 
        // Dimmed Green for borders/accents
        'dim-green': 'rgba(0, 255, 65, 0.1)',
      },
      fontFamily: {
        // Force Monospace for the hacker feel
        mono: ['"Fira Code"', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}