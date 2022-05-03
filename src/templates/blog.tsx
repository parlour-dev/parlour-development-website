import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import SEO from "../components/SEO/seo";
import Logo from "../components/SEO/parlour-seo.png";
import { Link, PageProps } from "gatsby";
import { Article } from "./article";

import ReactGA from "react-ga4";

import Blog from "../images/blog.webp";
import PLACEHOLDER from "../images/PLACEHOLDER.jpg";

import { useRef } from "react";

import { IoMdWatch } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

import readNow from "../images/readNow.png";

interface PageContext {
	articles: { node: Article }[];
}

const BlogPage = ({ pageContext }: PageProps) => {
	const { articles } = pageContext as PageContext;

	// Smooth scrolling
	const ref = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
		ReactGA.event({
			category: "Blog Click",
			action: "DiveIn",
		});
	};

	function ReadNowClick() {
		ReactGA.event({
			category: "Blog Click",
			action: "ReadNow",
		});
	}

	return (
		<div>
			<Helmet>
				<SEO image={Logo} title="Parlour Development" />
				<meta charSet="utf-8" />
				<meta name="description" content="Parlour Development - Blog" />
				<title>Blog - Parlour Development</title>
			</Helmet>
			<Navbar />
			<div className="w-full h-auto bg-white rounded-b-3xl shadow-2xl shadow-neutral-200">
				<div className="3xl:mx-auto max-w-screen-3xl flex flex-col overflow-hidden items-center lg:flex-row min-h-screen w-full bg-white rounded-b-3xl">
					<div className="lg:w-6/12  flex flex-col items-center lg:items-start justify-center">
						<h1 className="lg:ml-20 mt-48 lg:mt-0 leading-tight text-5xl lg:text-6xl xl:text-8xl font-bold text-center lg:text-left">
							Blog
						</h1>
						<h2 className="px-6 lg:px-0 lg:ml-20 mt-8 leading-tight text-4xl lg:text-3xl xl:text-4xl text-center lg:text-left">
							Learn how blockchain can benefit your business!
						</h2>
						<button
							onClick={handleClick}
							className="hover:scale-105 transition duration-300 lg:ml-20 shadow-lg shadow-neutral-200 lg:w-auto mt-20 bg-gradient-to-r from-parlourBlue to-parlourGreen text-white py-6 px-16 font-bold text-3xl rounded-tl-[2rem] rounded-br-[2rem]"
						>
							Dive In
						</button>
					</div>
					<div className="lg:w-6/12 flex justify-end overflow-hidden">
						<img
							draggable="false"
							className="w-[25rem] md:w-[50rem] ml-32 mt-20 mb-10"
							src={Blog}
							alt="Phone image with code writted on its screen"
						/>
					</div>
				</div>
			</div>
			<div className="my-10" ref={ref} id="blog">
				{articles.map(({ node }, index) => (
					<div
						key={index}
						className="w-11/12 lg:w-6/12 h-[50rem]  mx-auto my-10 rounded-3xl shadow-xl bg-white"
					>
						{/* border-4 border-x-parlourGreen  border- border-y-parlourBlue */}
						<Link
							className="w-full h-full flex flex-col overflow-hidden"
							to={`/articles/${node.id}`}
						>
							<img
								className="opacity-80 rounded-3xl overflow-hidden object-cover"
								src={"https://strapi.i.parlour.dev:1337" + node.Cover.url}
								alt="article cover"
							/>
							<div className="p-10 text-left shadow-lg/10 w-11/12 lg:w-6/12 absolute mt-[30rem] rounded-3xl min-h-[20rem] bg-white">
								<h1 className="font-bold text-5xl">{node.Title}</h1>
								<div className="flex flex-col lg:flex-row items-center">
									<h2 className="mt-4 font-medium lg:w-6/12">
										{node.Description}
									</h2>
									<img
										className="duration-300 transition hover:scale-105 w-11/12 my-12 md:my-0 md:w-4/12 mx-auto"
										src={readNow}
										alt="Button saying read now"
										onClick={ReadNowClick}
									/>
								</div>
								<div className="mt-4 text-xl flex flex-row items-center">
									<IoMdWatch />
									<p className="ml-2">{node.Time} minutes</p>
								</div>
							</div>
						</Link>
					</div>
				))}
				<div className="h-10"></div>
			</div>
		</div>
	);
};

export default BlogPage;
