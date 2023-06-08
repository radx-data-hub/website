const { colors } = require(`tailwindcss/defaultTheme`)

module.exports = {
  mode: "jit", // see https://tailwindcss.com/docs/just-in-time-mode
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        green: {
          light: "",
          DEFAULT: "#14614E",
          dark: "",
        },
        orange: {
          light: "",
          DEFAULT: "#CF6729",
          dark: "#bd5416",
        },
        radxBlue: {
          light: "",
          DEFAULT: "#243D7E",
          dark: "",
        },
        skyBlue: {
          light: "",
          DEFAULT: "#629DD1",
          dark: "",
        },
        aquaBlue: {
          light: "",
          DEFAULT: "#4a66ac",
          dark: "",
        },
        marinaBlue: {
          light: "",
          DEFAULT: "#297fd5",
          dark: "",
        },
        coralBlue: {
          light: "",
          DEFAULT: "#5AA2AC",
          dark: "#387982",
        },
        nihGrey: {
          DEFAULT: "#2e2925",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
