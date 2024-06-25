export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {},

    extend: {
      fontFamily: {
        hanken: [ 'Hanken Grotesk', 'sans-serif' ]
      },
    colors: {
      'primary-light-red': 'hsl(0, 100%, 67%)',
      'primary-orangey-yellow': 'hsl(39, 100%, 56%)',
      'primary-green-teal': 'hsl(166, 100%, 37%)',
      'primary-cobalt-blue': 'hsl(234, 85%, 45%)',

      'primary-bg-light-red': 'hsla(0, 100%, 67%, 10%)',
      'primary-bg-orangey-yellow': 'hsla(39, 100%, 56%, 10%)',
      'primary-bg-green-teal': 'hsla(166, 100%, 37%, 10%)',
      'primary-bg-cobalt-blue': 'hsla(234, 85%, 45%, 10%)',

      'bg-gradient-1': 'hsl(252, 100%, 67%)',
      'bg-gradient-2': 'hsl(241, 81%, 54%)',
      
      'circle-gradient-1': 'hsla(256, 72%, 46%, 1)',
      'circle-gradient-2': 'hsla(241, 72%, 46%, 0)',

      'white': 'hsl(0, 0%, 100%)',
      'pale-blue': 'hsl(221, 100%, 96%)',
      'light-lavender': 'hsl(241, 100%, 89%)',
      'dark-gray-blue': 'hsl(224, 30%, 27%)'
    }
    },
  },
  plugins: [],
}