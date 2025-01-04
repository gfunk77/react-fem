/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false,
  },
};
