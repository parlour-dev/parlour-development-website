exports.createPages = async function ({ actions, graphql }) {
	const { data } = await graphql(`
		query GetArticle {
			allStrapiArticles {
				edges {
					node {
						id
						Title
						Text
					}
				}
			}
		}
	`);
	data.allStrapiArticles.edges.forEach((edge, idx) => {
		actions.createPage({
			path: "/articles/" + edge.node.id,
			component: require.resolve(`./src/templates/article.tsx`),
			context: {
				id: edge.node.id,
			},
		});
	});

	actions.createPage({
		path: "/articles",
		component: require.resolve(`./src/templates/blog.tsx`),
		context: {
			articles: data.allStrapiArticles.edges,
		},
	});
};
