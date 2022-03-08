import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import SEO from "../components/SEO/seo";
import Logo from "../components/SEO/parlour-seo.png";
import { graphql, PageProps, useStaticQuery } from "gatsby";

export interface Article {
	id: number;
	Title: string;
	Text: string;
}

interface Data {
	strapiArticles: Article;
}

const SinglePostPage = ({ data }: PageProps) => {
	const article = (data as Data).strapiArticles;

	return (
		<div>
			<Helmet>
				<SEO image={Logo} title="Parlour Development" />
				<meta charSet="utf-8" />
				<meta name="description" content="Parlour Development - Blog" />
				<title>Blog - Parlour Development</title>
			</Helmet>
			<Navbar />
			<b>{article.Title}</b>
			<p>{article.Text}</p>
		</div>
	);
};

export default SinglePostPage;

export const query = graphql`
	query GetSingleArticle($id: String) {
		strapiArticles(id: { eq: $id }) {
			id
			Text
			Title
		}
	}
`;
