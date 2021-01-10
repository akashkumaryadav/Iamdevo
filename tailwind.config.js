module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        info: "var(--color-cyan)",
        warning: "var(--color-yellow-red)",
        success: " var(--color-green-spring)",
        danger: "var(--color-pink-blush)",
        primarySoft: "var(--color-primarySoft)",
        primaryBold: "var(--color-primaryBold)",
        primaryBg: "var(--color-primaryBg)",
        primaryBgSoft: "var(--color-primaryBgSoft)",
        primaryBgSofter: "var(--color-primaryBgSofter)",
        onPrimaryBg: "var(--color-onPrimaryBg)",
        onPrimaryBgSoft: "var(--color-onPrimaryBgSoft)",
        onPrimaryBgSofter: "var(--color-onPrimaryBgSofter)",
        secondaryPink: "var(--color-secondaryPink)",
        neutralBg: "var(--color-neutralBg)",
        neutralBgSoft: "var(--color-neutralBgSoft)",
        neutralBgSofter: "var(--color-neutralBgSofter)",
        neutral: "var(--color-neutral)",
        neutralBold: "var(--color-neutralBold)",
        neutralSoft: "var(--color-neutralSoft)",
        onNeutralBg: "var(--color-onNeutralBg)",
        onNeutralBgSoft: "var(--color-onNeutralBgSoft)",
        onNeutralBgSofter: "var(--color-onNeutralBgSofter)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
