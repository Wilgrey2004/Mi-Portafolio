import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-green": {
          "50": "#f3faf8",
          "100": "#d6f1e7",
          "200": "#ace3d0",
          "300": "#7bcdb4",
          "400": "#50b197",
          "500": "#36967d",
          "600": "#297865",
          "700": "#246153",
          "800": "#214e44",
          "900": "#1f423a",
          "950": "#12352f",
        },

        tamarillo: {
          "50": "#fff1f1",
          "100": "#ffdfdf",
          "200": "#ffc5c5",
          "300": "#ff9c9c",
          "400": "#ff6464",
          "500": "#ff3333",
          "600": "#ee1414",
          "700": "#c90c0c",
          "800": "#a00e0e",
          "900": "#891313",
          "950": "#4b0404",
        },
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, #297865 0%,  #12352f 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
