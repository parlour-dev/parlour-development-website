import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import SEO from "../components/SEO/seo";
import Logo from "../components/SEO/parlour-seo.png";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import { marked } from "marked";

export interface Article {
	strapiId: number;
	id: number;
	Title: string;
	Text: string;
	Description: string;
	Time: number;
	Cover: { url: string };
}

interface Data {
	strapiArticles: Article;
}

const SinglePostPage = ({ data }: PageProps) => {
	const article = (data as Data).strapiArticles;

	const articleParsedText = marked
		.parse(article.Text, { headerIds: false })
		.replaceAll("<p>", "<p class='text-lg mb-4'>")
		.replaceAll("<h1>", "<p class='font-bold text-4xl'>")
		.replaceAll("</h1>", "</p>")
		.replaceAll("<h2>", "<p class='font-bold text-3xl'>")
		.replaceAll("</h2>", "</p>")
		.replaceAll("<h3>", "<p class='font-bold text-2xl'>")
		.replaceAll("</h3>", "</p>")
		.replaceAll("<h4>", "<p class='font-bold text-xl'>")
		.replaceAll("</h4>", "</p>")
		.replaceAll("<a", "<a class='text-blue-500'");

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
			<div className="rounded-3xl w-11/12 md:w-8/12 my-10 bg-white shadow-lg mx-auto text-left">
				<img
					src={"https://strapi.i.parlour.dev:1337" + article.Cover.url}
					alt="cover"
					className="w-full h-full max-h-[50vh] object-cover rounded-t-3xl"
				/>
				<div className="p-14 md:p-20">
					<h1 className="text-6xl font-bold mb-8">{article.Title}</h1>
					<p
						className="text-xl"
						dangerouslySetInnerHTML={{ __html: articleParsedText }}
					/>
				</div>
			</div>
		</div>
	);
};

export default SinglePostPage;

export const query = graphql`
	query GetSingleArticle($id: Int) {
		strapiArticles(strapiId: { eq: $id }) {
			id
			strapiId
			Title
			Text
			Description
			Time
			Cover {
				url
			}
		}
	}
`;
