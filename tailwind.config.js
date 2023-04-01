/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "hsl(var(--primary-red))",
        primaryBlue: "hsl(var(--primary-blue))",
        veryLightGrayishBlue: "hsl(var(--very-light-grayish-blue))",
        lightGrayishBlue1: "hsl(var(--light-grayish-blue-1))",
        lightGrayishBlue2: "hsl(var(--light-grayish-blue-2))",
        grayishBlue: "hsl(var(--grayish-blue))",
        darkGrayishBlue: "hsl(var(--dark-grayish-blue))",
        veryDarkBlue: "hsl(var(--very-dark-blue))",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

