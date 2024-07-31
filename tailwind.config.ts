import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#1A1A1A",
            },
            backgroundImage: {
                "farm": "url('/img/SSD Farms IMG 0638.jpg')",
                "storage": "url('/img/ssd-farms-pic.jpg')",
            },
        },
    },
    plugins: [],
};
export default config;
