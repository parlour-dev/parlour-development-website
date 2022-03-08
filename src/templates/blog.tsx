import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import SEO from "../components/SEO/seo";
import Logo from "../components/SEO/parlour-seo.png";
import { PageProps } from "gatsby";
import { Article } from "./article";

interface PageContext {
	articles: { node: Article }[];
}

const BlogPage = ({ pageContext }: PageProps) => {
	const { articles } = pageContext as PageContext;

	return (
		<div>
			<Helmet>
				<SEO image={Logo} title="Parlour Development" />
				<meta charSet="utf-8" />
				<meta name="description" content="Parlour Development - Blog" />
				<title>Blog - Parlour Development</title>
			</Helmet>
			<Navbar />
			{articles.map(({ node }) => (
				<a
					key={node.id}
					href={`/articles/${node.id}`}
					style={{ textDecoration: "underline" }}
				>
					{node.Title}
				</a>
			))}
		</div>
	);
};

export default BlogPage;
