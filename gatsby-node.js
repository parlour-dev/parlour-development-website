exports.createPages = async function ({ actions, graphql }) {
	const { data } = await graphql(`
		query {
			allStrapiArticles {
				edges {
					node {
						id
						Title
						Text
					}
				}
			}

			allStrapiPortfolios {
				edges {
					node {
						caseStudy
						codeUrl
						description
						longProjectName
						shortProjectName
						strapiId
						pictures {
							url
						}
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

	actions.createPage({
		path: "/projects",
		component: require.resolve(`./src/templates/projects.tsx`),
		context: {
			portfolios: data.allStrapiPortfolios.edges,
		}
	})
};
