module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '500' : '500px',
        '400' : '400px',
        '350' : '350px',
        '200' : '200px',
      }
    },
    fontFamily: {
      'main': ['Fredoka One'],
    }
  },
  plugins: [],
}
