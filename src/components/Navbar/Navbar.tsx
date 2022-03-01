import React from "react";
import Logo from "./parlour-dev-logo-web.webp";
import { Link } from "gatsby";
import "animate.css";

const Navbar = () => {
	return (
		<div className="w-auto h-36 md:h-20 bg-white rounded-2xl mx-4 my-4 drop-shadow-sm flex items-center md:justify-between justify-center flex-col md:flex-row">
			<Link to="/">
				<img
					className="w-48 sm:ml-6 sm:mr-6"
					src={Logo}
					alt="Parlour Development Logo"
				/>
			</Link>
			<div className="text-sm sm:text-lg sm:mr-6 mt-6 sm:mt-0 font-sans flex justify-between">
				<Link to="/projects">
					<div className="mx-1 sm:mx-4 sm:mr-6 font-sans font-semibold px-4 sm:px-8 border-2 border-indigo-300/50 py-2 bg-gradient-to-r bg-radial-at-tl from-green-400 to-teal-400 rounded-full text-white hover:scale-105 hover:drop-shadow-lg duration-300">
						Portfolio
					</div>
				</Link>
				<Link to="/pricing">
					<div className="mx-1 sm:mx-4 sm:mr-6 font-sans font-semibold px-4 sm:px-8 py-2 border-2 border-y-sky-400 border-x-blue-400 rounded-full text-white hover:scale-105 hover:drop-shadow-lg duration-300">
						<p className="text-transparent bg-clip-text bg-gradient-to-r bg-radial-at-tl from-sky-400 to-blue-400">
						Pricing
						</p>
					</div>
				</Link>
				<Link to="/contact">
					<div className="sm:mx-4 sm:mr-6 font-sans font-semibold px-4 sm:px-8 py-2 border-2 border-y-sky-400 border-x-blue-400 rounded-full text-white hover:scale-105 hover:drop-shadow-lg duration-300">
					<p className="text-transparent bg-clip-text bg-gradient-to-r bg-radial-at-tl from-sky-400 to-blue-400">
						Contact
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
