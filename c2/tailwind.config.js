module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Nato: ["Noto Sans", "sans-serif"],
      },
      colors: {
        custom_white: "#ebedf5",
        custom_grey: {
          20: "#aaaac7",
          30: "#8281a9",
          50: "#474f5f",
          100: "#2d354c",
          150: "#1a1e2a",
        },
        custom_pink: "#e3a6f6",
        custom_blue: "#506cae",
        custom_cyan: "#Ace9f3"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
