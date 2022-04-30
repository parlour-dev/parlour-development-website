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
	Description: string;
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
			<div className="h-24"></div>
			<div className="rounded-3xl w-11/12 md:w-8/12 my-10 bg-white shadow-lg mx-auto text-left p-14 md:p-20">
			<h1 className="text-6xl font-bold mb-8">{article.Title}</h1>
			<p className="text-xl">{article.Text}</p>
			</div>
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
			Description
		}
	}
`;
