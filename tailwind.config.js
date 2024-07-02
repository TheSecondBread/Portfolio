/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto'],
      },
    },
  },
  layers: {
    'reset-tw': {
      // Add any styles you want to disable here
      '.reset-tw': {
        all: 'unset',
      },
    },
  },
  plugins: [],
}


