module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        darkgray: '#333333',
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
