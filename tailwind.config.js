module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        navy: "#0A192D",
        "slime-light": "#00DCB9",
        "slime-dark": "#00B699",
      },
      secondary: {
        "light-blue": "#D7EBEB",
        mist: "#EDF2F2",
      },
      base: {
        grey: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        white: "#FFFFFF",
      },
      feedback: {
        success: "#14AD48",
        warning: "#F48A1E",
        error: "#E01447",
      },
    },
    extend: {
      margin: {
        "1/3": "33%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
