module.exports = {
  // purge: [],
  purge: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3F51B5",
        secondary: "#F50057",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
