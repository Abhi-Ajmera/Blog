import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				bgColor: "#FFFFFF",
				softBg: "#F0F0F0",
				textColor: "black",
				softText: "#626262",
				bgColorDark: "#0f172a",
				softBgDark: "#1f273a",
				textColorDark: "#ddd",
				softTextDark: "#a6a6a6",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
export default config;
