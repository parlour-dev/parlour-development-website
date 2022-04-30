import React from "react";
import Logo from "../Navbar/parlour-dev-logo-web.webp";
import { HiMail, HiOfficeBuilding } from "react-icons/hi";

const Footer = () => {
	return (
		<div className="w-full rounded-t-3xl bg-white drop-shadow-xl min-h-96">
			<div className="pt-10 flex flex-col md:flex-row justify-center gap-t-10 gap-x-[10rem]">
				<div className="mx-auto md:mx-0">
					<img className="w-64" src={Logo} alt="Parlour Development Logo" />
					<div className="mt-2 flex flex-row">
						<HiMail size={24} color="#0eda4f" />
						<p className="ml-2 text-md">contact@parlour.dev</p>
					</div>
					<div className="mt-2 flex flex-row">
						<HiOfficeBuilding size={24} color="#0eda4f" />
						<p className="ml-2 text-md">Parlour Development sp. z o. o.</p>
					</div>
					<p className="ml-8 text-md text-left">
						ul. Warszawska 40/2A, <br /> 40-008 Katowice
					</p>
				</div>
				<div>
					<p className="font-bold">SERVICES</p>
					<p>Blockchain development</p>
					<p>Web app development</p>
					<p>Website audit</p>
					<p>Token launches</p>
					<p>NFT Mints</p>
					<p>Software development</p>
				</div>
				<div>
					<p className="font-bold">HAPPY CLIENT STORIES</p>
					<p>Coming soon... :)</p>
				</div>
			</div>
			{/* create a paragraph at the bottom of the page that's centered */}

			<p className="mt-32 text-center">
				<hr className="w-[95%] mx-auto mb-4" />
				Made with 💚 by Parlour <br /> ⓒ 2022
			</p>
		</div>
	);
};

export default Footer;
