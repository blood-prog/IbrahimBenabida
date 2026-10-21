/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'soft-linen': '#e8e3d9',
        'black-cherry': '#5a1212',
        'terracotta': '#5a1212', // Aliased to black-cherry (#5a1212)
        'graphite': '#332d2b',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}
