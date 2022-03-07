module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"3xl": "0 0px 30px 0px rgba(0, 0, 0, 0.8)",
			},
			screens: {
				"3xl": "1920px",
			},
			
		},
		fontFamily: {
			sans: ["Sora", "Roboto", "Lato"],
			monospace: ["Roboto Mono"],
		},
	},
	plugins: [],
};
