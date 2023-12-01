/** @type {import('tailwindcss').Config} */

// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// };

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#134B8A",
				secondary: "#0F1E56",
			},
		},
		fontFamily: {
			kanit: ["Kanit", "sans-serif"],
		},
		screens: {
			xs: "320px",
			sm: "578px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
});
