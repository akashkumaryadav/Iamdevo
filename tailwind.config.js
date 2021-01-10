module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primaryBg)",
        info: "var(--color-info)",
        warning: "var(--color-warning)",
        success: " var(--color-success)",
        danger: "var(--color-danger)",
        primaryText: "var(--color-primary-text)",
      },
      backgroundImage: theme => ({
        "banner-image": "var(--background-hero-image)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
