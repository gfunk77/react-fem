/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'custom-sm': '600px',
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'serif'],
      },
      scale: {
        110: '1.1',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: '#fff',
          secondary: '#fff',
          accent: '#fff',
          neutral: '#fff',
          'base-100': 'hsl(0, 0%, 98%)',
          'base-content': 'hsl(200, 15%, 8%)',
        },
        darkTheme: {
          primary: '#2B3844',
          secondary: '#ffffff',
          accent: '#ffffff',
          neutral: '#ffffff',
          'base-100': '#202C36',
          'base-content': '#fff',
        },
      },
    ],
  },
};
