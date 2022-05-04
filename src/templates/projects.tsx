import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";
import Project from "../components/Project/Project";

import { PageProps } from "gatsby";
import { marked } from "marked";

export interface Portfolio {
	strapiId: number;
	caseStudy: string;
	codeUrl: string;
	description: string;
	longProjectName: string;
	shortProjectName: string;
	pictures: { url: string }[];
}

interface PageContext {
	portfolios: { node: Portfolio }[];
}

const Projects = ({ pageContext }: PageProps) => {
	const { portfolios } = pageContext as PageContext;

	return (
		<div className="mt-28">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Parlour Development - Our projects</title>
			</Helmet>
			<Navbar />

			{portfolios.map(({ node }) => {
				const portfolio = parsePortfolio(node);

				return (
					<Project
						key={portfolio.strapiId}
						title={portfolio.longProjectName}
						description={portfolio.description}
						codeLink={portfolio.codeUrl}
						mainImage={portfolio.pictures[0].url}
						leftImage={portfolio.pictures[1].url}
						rightImage={portfolio.pictures[2].url}
						caseStudy={portfolio.caseStudy}
					/>
				);
			})}
		</div>
	);
};

const parsePortfolio = (portfolio: Portfolio): Portfolio => {
	// Pictures fetched from Strapi have a relative path, so we need to add the base url
	const pictures = portfolio.pictures.map(({ url }) => ({
		url: "https://strapi.i.parlour.dev:1337" + url,
	}));

	// The description and case study are in markdown, so we need to parse it
	// Note: we have to manually add or replace some html elements to make it visually consistent

	// This is fine as long as the replacements and parsing are done on the server side *preemptively*
	const description = marked
		.parse(portfolio.description, { headerIds: false })
		.replaceAll("<p>", "<p class='text-lg'>")
		.replaceAll("<h2>", "<p class='font-bold text-2xl1'>")
		.replaceAll("</h2>", "</p>")
		.replaceAll("<a", "<a class='text-blue-500'");

	const caseStudy = marked
		.parse(portfolio.caseStudy, { headerIds: false })
		.replaceAll("<p>", "<p class='text-lg mx-[10%] text-justify mb-4'>")
		.replaceAll("<h2>", "<p class='font-bold text-2xl1'>")
		.replaceAll("</h2>", "</p>")
		.replaceAll("<a", "<a class='text-blue-500'");

	return { ...portfolio, pictures, description, caseStudy };
};

export default Projects;
