import React, { useEffect, useState } from "react";
import Logo from "./parlour-dev-logo-web.webp";
import { Link } from "gatsby";
import "animate.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import { stack as Menu } from "react-burger-menu";

// icon import
import { HiOutlineMenu, HiX } from "react-icons/hi";

import BuyButton from "./buy.webp";

const Navbar = () => {
	const [scrollLevel, setScrollLevel] = useState<string>("index");

	// Add a listener to the Navbar component to change its opacity on scroll down
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 200) {
				setScrollLevel("opacity-80 ");
			} else {
				setScrollLevel("");
			}
		});
	}, []);

	// useMediaQuery to determine whether someone is browing on mobile or desktop
	const isDesktop = useMediaQuery("(min-width: 1400px)");

	return (
		<div
			className={`fixed z-50 rounded-b-2xl top-0 w-full h-24 bg-white flex items-center md:justify-between justify-left pl-4 md:pl-0 flex-row ${scrollLevel} hover:opacity-100 hover:shadow-xl hover:shadow-neutral-100 transition duration-300`}
		>
			<Link to="/">
				<img
					className="w-48 lg:w-48 sm:ml-20 sm:mr-6"
					src={Logo}
					alt="Parlour Development Logo"
				/>
			</Link>
			{isDesktop ? (
				<div className="text-sm sm:text-lg sm:mr-20 mt-6 sm:mt-0 font-sans flex justify-between">
					<Link className="w-0 lg:w-auto" to="/buy">
						<img
							className="h-0 lg:h-14 mx-4 hover:scale-105 transition duration-300"
							src={BuyButton}
							alt="Buy Now"
						/>
					</Link>
					<Link to="/projects">
						<div className="bg-transparent mx-1 sm:mx-4 sm:mr-6 font-sans font-semibold px-4 sm:px-8 py-2">
							<p className="text-2xl hover:scale-110 transition duration-300">
								Projects
							</p>
						</div>
					</Link>
					<Link to="/contact">
						<div className="bg-transparent mx-1 sm:mx-4 sm:mr-6 font-sans font-semibold px-4 sm:px-8 py-2 ">
							<p className="text-2xl hover:scale-110 transition duration-300">
								Contact
							</p>
						</div>
					</Link>
					<Link to="/blog">
						<div className="bg-transparent mx-1 sm:mx-4 sm:mr-6 font-sans font-semibold px-4 sm:px-8 py-2">
							<p className="text-2xl hover:scale-110 transition duration-300">
								Blog
							</p>
						</div>
					</Link>
				</div>
			) : (
				<div className="absolute ml-10 right-0 mr-4 w-10 h-10">
					<Menu
						noOverlay
						right
						customCrossIcon={<HiX />}
						className="w-full h-screen bg-white border-t-4 mt-6"
						customBurgerIcon={<HiOutlineMenu />}
						width={"100%"}
					>
						<Link to="/buy">
							<img
								className="w-48 pt-20 pb-4 mx-auto hover:scale-105 transition duration-300"
								src={BuyButton}
								alt="Buy Now"
							/>
						</Link>
						<Link to="/projects">
							<div className="bg-transparent mx-1 sm:mx-4 sm:mr-6 font-sans font-semibold px-4 sm:px-8 py-2">
								<p className="text-4xl py-4 hover:scale-110 transition duration-300">
									Projects
								</p>
							</div>
						</Link>
						<Link to="/contact">
							<div className="bg-transparent mx-1 sm:mx-4 sm:mr-6 font-sans font-semibold px-4 sm:px-8 py-2 ">
								<p className="text-4xl py-4 hover:scale-110 transition duration-300">
									Contact
								</p>
							</div>
						</Link>
						<Link to="/blog">
							<div className="bg-transparent mx-1 sm:mx-4 sm:mr-6 font-sans font-semibold px-4 sm:px-8 py-2">
								<p className="text-4xl py-4 hover:scale-110 transition duration-300">
									Blog
								</p>
							</div>
						</Link>
					</Menu>
				</div>
			)}
		</div>
	);
};

export default Navbar;
