module.exports = {
	siteMetadata: {
		title: `Parlour Development`,
		author: `Parlour Development`,
		siteUrl: `https://parlour.dev/`,
		keywords: `asdasd`,
	},

	plugins: [
		"gatsby-plugin-postcss",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/favicon.png",
			},
		},
		{
			resolve: "gatsby-source-strapi",
			options: {
				apiURL: process.env.API_URL || "https://strapi.i.parlour.dev:1337",
				collectionTypes: ["articles", "portfolios"],
				queryLimit: 1000,
			},
		},
		"gatsby-plugin-react-helmet",
		// ...
	],
};
