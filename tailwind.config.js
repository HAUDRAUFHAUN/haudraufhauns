const production = !process.env.ROLLUP_WATCH;

module.exports = {
  darkMode: "class",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [require("nightwind"), require("@tailwindcss/typography")],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
  theme: {
    nightwind: {
      typography: {
        pre: {
          backgroundColor: "coolGray.900",
          color: "coolGray.50",
        },
        code: {
          textColor: "coolGray.50",
        },
      },
    },
  },
};
