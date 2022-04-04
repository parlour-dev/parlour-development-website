import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";

const pricing = () => {
	return (
		<div className="mt-28">
			<Navbar />
			<Helmet>
				<meta charSet="utf-8" />
				<title>Parlour Development - Pricing</title>
			</Helmet>
			<div className="w-auto 3xl:mx-auto max-w-screen-3xl min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
				<p className="text-3xl sm:text-5xl pt-20 px-2 font-sans font-bold">
					Pricing
				</p>
				<div className="p-6 sm:p-[0px] text-left mt-10 mx-auto md:w-[64rem]">
					<p className="text-4xl sm:text-6xl leading-tight font-semibold ">
						Your project is{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r bg-radial-at-tl from-sky-400 to-purple-400">
							unique
						</span>
						. <br /> It's hard to estimate the price.
					</p>
					<br />
					<p className="text-4xl sm:text-6xl leading-tight font-semibold ">
						However, here are the price ranges for common types of projects we
						do.
					</p>
				</div>
				<div className="flex flex-col md:flex-row justify-center my-10">
					<div className="mx-auto md:mx-0 w-80 my-[2.5vh] min-h-[60vh] bg-gray-100 rounded-2xl md:rounded-none md:rounded-l-2xl drop-shadow">
						<p className="text-4xl text-justify p-6 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-green-500">
							Mobile app
						</p>
						<p className="text-xl text-left px-6">✔ For iOS and Android</p>
						<br />
						<p className="text-xl text-left px-6">✔ Responsive</p>
						<br />
						<p className="text-xl text-left px-6">✔ Designed for great UX</p>
						<br />
						<p className="text-xl text-left px-6">✔ Intuitive</p>
						<p className="text-2xl text-left px-6 pt-72 pb-6 font-semibold">
							From $3999
						</p>
					</div>
					<div className="mx-auto md:mx-0 w-80 sm:w-96 min-h-[65vh] bg-white rounded-3xl shadow-3xl  shadow-blue-500/30 z-50">
						<p className="text-5xl text-left p-6 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-sky-500">
							Fullstack web app
						</p>
						<p className="text-2xl text-left px-6 pt-6 font-semibold ">
							✔ Lightning-fast
						</p>
						<br />
						<p className="text-2xl text-left px-6 font-semibold ">
							✔ Working on mobile and desktop
						</p>
						<br />
						<p className="text-2xl text-left px-6 font-semibold ">✔ Engaging</p>
						<br />
						<p className="text-2xl text-left px-6 font-semibold ">
							✔ User friendly
						</p>
						<p className="text-2xl text-left px-6 pt-48 pb-6 font-semibold">
							From $5999
						</p>
					</div>
					<div className="mx-auto md:mx-0 w-80 my-[2.5vh] min-h-[60vh] bg-gray-100 rounded-2xl md:rounded-none md:rounded-r-2xl drop-shadow ">
						<p className="text-4xl text-justify p-6 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-teal-500">
							Portfolio website
						</p>
						<p className="text-xl text-left px-6">
							✔ Tailor-made for your needs
						</p>
						<br />
						<p className="text-xl text-left px-6">✔ Designed to suit you</p>
						<br />
						<p className="text-xl text-left px-6">✔ Fully responsive</p>
						<br />
						<p className="text-xl text-left px-6">✔ Great looking</p>
						<p className="text-2xl text-left px-6 pt-56 pb-6 font-semibold">
							From $1999
						</p>
					</div>
				</div>
				<Link to="/contact">
					<div className="font-semibold w-72 mx-auto text-2xl text-white bg-gradient-to-br from-green-400 to-teal-400 px-6 py-2 m-2 rounded-xl hover:scale-105 hover:drop-shadow-lg duration-300">
						{/* Skontaktuj się z nami */}
						Contact us
					</div>
				</Link>
				<br />
			</div>
		</div>
	);
};

export default pricing;
