module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"3xl": "0 0px 30px 0px rgba(0, 0, 0, 0.8)",
			},
		},
		fontFamily: {
			sans: ["Sora", "Roboto", "Lato"],
			monospace: ["Roboto Mono"],
		},
	},
	plugins: [],
};
