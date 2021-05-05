module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        "1/3": "33%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
