/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-red': {
          default: 'hsl(0, 100%, 67%)',
          light: 'hsla(0, 100%, 67%, .2)'
        },
        'orangey-yellow': {
          default: 'hsl(39, 100%, 56%)',
          light: 'hsla(39, 100%, 56%, .2)'
        },
        'green-teal': {
          default: 'hsl(166, 100%, 37%)',
          light: 'hsla(166, 100%, 37%, .2)'
        },
        'cobalt-blue': {
          default: 'hsl(234, 85%, 45%)',
          light: 'hsla(234, 85%, 45%, 0.2)'
        },
        
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',

        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',

        'white': 'hsl(0, 0%, 100%)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
      },
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans-serif'],
      },
      fontSize: {
        paragraph: '18px',
      },
    },
  },
  plugins: [],
}

