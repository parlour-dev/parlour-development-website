import * as React from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Parlour Development - Nie znaleziono strony</title>
			</Helmet>
			<Navbar />
			<div className="w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
				<p className="font-bold pt-10 text-5xl">
					Hmm... <br />
					Nie możemy znaleźć tej strony...
				</p>
			</div>
		</>
	);
};

export default NotFoundPage;
