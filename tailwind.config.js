/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'royal-purple': '#8A2BE2',
        'royal-blue': '#0056B3',
        'royal-teal': '#14B8A6',
        'royal-dark': '#0A0A0F',
        'royal-card': '#1A1A2E',
        'darkgray': '#333333',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(138, 43, 226, 0.3)',
        'glow-blue': '0 0 20px rgba(0, 86, 179, 0.3)',
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.3)',
      },
      keyframes: {
        rotateY360: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        rotateYOnce: 'rotateY360 2s ease-in-out',
      },
    },
  },
  plugins: [],
};
