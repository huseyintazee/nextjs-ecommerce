import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    daisyui: {
        themes: [
            {
                lightTheme: {

                    "primary": "#aa00ff",

                    "secondary": "#00d0ff",

                    "accent": "#00c400",

                    "neutral": "#08040a",

                    "base-100": "#fffdff",

                    "info": "#0078bb",

                    "success": "#00d498",

                    "warning": "#ff9934",

                    "error": "#ff5a64",
                    body: {
                        "background-color": "#e3e6e6"
                    }
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
export default config;
