/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    // fontFamily: {
    //   // 'serif': ['ui-serif', 'Georgia', ...],
    //   // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
    //   // 'display': ['Oswald', ...],
    //   // 'body': ['"Open Sans"', ...],
    // },
    extend: {
      colors: {
        primary: "rgb(248 250 252)",
        secondary: "#aaaaaa",
        tertiary: "#aaaaaa",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/Circuit Primary.svg')",
      },
    },
  },
  plugins: [],
};
