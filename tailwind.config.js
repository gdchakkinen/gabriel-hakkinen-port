/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',    // Para arquivos na pasta app
    './src/components/**/*.{js,ts,jsx,tsx}', // Para arquivos na pasta components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
