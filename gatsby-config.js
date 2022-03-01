module.exports = {

	siteMetadata: {
		title: `Parlour Development`,
		author: `Parlour Development`,
		siteUrl: `https://parlour.dev/`,
		keywords:  `asdasd`,
	  },

	plugins: [
		"gatsby-plugin-postcss",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/favicon.png",
			},
		},
		"gatsby-plugin-react-helmet",
		// ...
		
	],
};
