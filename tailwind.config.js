module.exports = {
  mode: "jit",
  content: ["./src/**/*.{vue,js,ts,jsx,tsx,html}"],
  plugins: [require("@tailwindcss/forms")],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          DEFAULT: "#48BB78",
          50: "#EFF9F3",
          100: "#DDF2E6",
          200: "#B8E4CA",
          300: "#92D7AF",
          400: "#6DC993",
          500: "#48BB78",
          600: "#389860",
          700: "#2B7249",
          800: "#1D4D31",
          900: "#0F2819",
        },
        color: {
          50: "#f6f6f6",
          100: "#ececec",
          200: "#d0d0d0",
          300: "#b4b3b3",
          400: "#7b7b7b",
          500: "#434242",
          600: "#3c3b3b",
          700: "#323232",
          800: "#282828",
          900: "#212020",
        },
      },
    },
  },
}
