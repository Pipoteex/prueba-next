import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
            },
            colors: {
                gray_header: "#F2F2F2",
                blue_balanz: "#0D2055",
                sky_blue_balanz: "#00A3E4",
                gray_footer: "#DADADA",
                gray_letter_footer: "#73757A",
            },
        },
    },
    plugins: [],
};
export default config;
