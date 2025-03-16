import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333',
        secondary: '#666',
        accent: '#4a90e2',
        background: '#fff',
      },
      fontFamily: {
        serif: ['"Source Serif Pro"', 'serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
      },
    },
  },
  plugins: [],
};

export default config; 