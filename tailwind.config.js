module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      title: "4.375rem",
    },
    colors: {
      background: "#22264A",
    },
    textColor: (theme) => theme("colors"),
    textColor: {
      intro: "#FFCC68",
      teaser: "#ADB2DC",
      accent: "#FFCC68",
      background: "#22264A",
      cardBorder: "#282E5E",
    },
    extend: {
      fontFamily: {
        muli: ["Muli"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
