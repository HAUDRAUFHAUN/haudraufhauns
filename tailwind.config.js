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
    extend: {
      typography: {
        DEFAULT: {
          css: {
            mark: {
              backgroundColor: "transparent",
              backgroundImage:
                "linear-gradient(to right, #FDE047, #FBBF24, #FDE047, #FBBF24, #FDE047);",
              borderRadius: "0.375rem",
              padding: "0.25rem",
            },
          },
        },
      },
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
  },
};
