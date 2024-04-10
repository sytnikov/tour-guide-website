import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        sans: ["Tenor Sans", "Helvetica", "Arial", "sans-serif"]
      },
    },
    colors: {
      blue: {
        light: "#C4D8E1",
        main: "#89B1C4",
        dark: "#6E8E9D",
      },
      coral: {
        light: "#F5C2B8",
        main: "#EC8572",
        dark: "#BD6A5B",
      },
      peach: {
        extralight: "#FEF9F5",
        light: "#FCDFCB",
        main: "#F9C097",
        dark: "#C79A79",
      },
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      },
    },
  },
  plugins: [],
};
export default config;
