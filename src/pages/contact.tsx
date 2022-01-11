import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";

const contact = () => {
	return (
		<>
		<Helmet>
				<meta charSet="utf-8" />
				<title>
					Parlour Development - Contact us!
				</title>
			</Helmet>
			<Navbar />
			<div className="w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
				<p className="text-3xl sm:text-5xl pt-20 font-sans font-bold">
					{/* Kontakt */}
					Contact us
				</p>
				<br />
				<div className="flex flex-col items-center justify-center w-[90%] md:w-4/12 h-48 bg-green-400 mx-auto rounded-3xl">
					<p className="text-2xl sm:text-4xl font-bold text-white">
						{/* Zlecenia i oferty */}
						E-mail our team at
					</p>
					<br />
					<p className="text-2xl sm:text-4xl text-white font-bold">
						{/* kontakt@parlour.dev */}
						karol@parlour.dev
						<br />
						{/* +48 511 610 544 */}
					</p>
				</div>
				<br />
				<br />
				{/* <p className="text-2xl sm:text-4xl font-bold text-green-400">
					Praca z nami
					Work with
				</p>
				<p className="text-2xl font-bold">praca@parlour.dev</p> */}
			</div>
		</>
	);
};

export default contact;