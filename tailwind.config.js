module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
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
        black: {
          light: "#424242",
          dark: "#000000",
        },
      },
      feedback: {
        success: "#14AD48",
        warning: "#F48A1E",
        error: "#E01447",
      },
      lequColors: {
        grey: "#EAEAEA",
        "dark-blue": "#173260",
        "lequ-red": "#E00F21",
        "dark-red": "#C70E1E",
        "dark-grey": "#6A6A6A",
        "light-grey": "#F6F6F6",
        "grey-border": "#E5E7EB",
        green: "#7F9A84",
        "green-dark": "#667d6a",
        "grey-white": "#E6E6E6",
        "near-white": "#F1F1F1",
        "cover-gray": "#959595",
        "gray-5": "#E0E0E0",
        "black-light": "#2A2A2A",
        "light-blue": "#668CB7",
        "light-blue-dark": "#516f92",
        yellow: "#C5A730",
        "yellow-light": "#FFED76",
        purple: "#B7A9C8",
        pink: "#E06D92",
        "pink-dark": "#b15572",
        black: {
          light: "#2A2A2A",
          dark: "#000000",
        },
        primary: {
          red: "#E00F21",
          "dark-red": "#C70E1E",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      margin: {
        "1/3": "33%",
      },
      zIndex: {
        "-1": "-1",
      },
      minWidth: {
        32: "8rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
