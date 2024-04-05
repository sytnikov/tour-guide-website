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
      backgroundImage: {
        instagram: "url('/public/icon-bg-instagram.png')",
        mail: "@/public/icon-bg-mail.png",
        facebook: "@/public/icon-bg-facebook.png",
        gmail: "@/public/icon-bg-gmail.png",
      }
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
    },
  },
  plugins: [],
};
export default config;
