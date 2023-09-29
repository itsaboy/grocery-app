/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./out/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Work Sans",
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'], 
  },
  plugins: [],
}
