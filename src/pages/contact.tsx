import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";

const contact = () => {
	const form = useRef();

	// const sendEmail = (e: any) => {
	// 	e.preventDefault();

	// 	emailjs
	// 		.sendForm(
	// 			"YOUR_SERVICE_ID",
	// 			"YOUR_TEMPLATE_ID",
	// 			form.current,
	// 			"YOUR_USER_ID"
	// 		)
	// 		.then(
	// 			(result) => {
	// 				console.log(result.text);
	// 			},
	// 			(error) => {
	// 				console.log(error.text);
	// 			}
	// 		);
	// };

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Parlour Development - Contact us!</title>
			</Helmet>
			<Navbar />
			<div className="w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
				<p className="text-3xl sm:text-5xl pt-20 px-2 font-sans font-bold">
					Contact us
				</p>
				<div className="p-6 sm:p-[0px] text-left mt-10 mx-auto md:w-[40%]">
					<p className="text-2xl md:text-4xl sm:text-6xl leading-tight font-semibold ">
						To work with us email us at{" "}
						<span className="w-[80%] text-transparent bg-clip-text bg-gradient-to-r bg-radial-at-tl from-sky-400 to-purple-400">
							contact@parlour.dev
						</span>{" "}
						or use the form below
					</p>
				</div>
				{/* <form ref={form} onSubmit={sendEmail}> */}
				<form className="flex flex-col w-[90%] md:w-[40%] mx-auto bg-white mt-10 rounded-3xl p-6 shadow-3xl shadow-sky-500/50  ">
					<div className="flex flex-col md:flex-row justify-between mt-2">
						<div className="flex flex-col w-[100%] md:w-6/12 md:mr-6">
							<label className="text-left font-semibold ml-6">Name</label>
							<input
								className="bg-[#f5f5f5] rounded-full h-10 border-2 px-6 border-sky-400"
								type="text"
								name="user_name"
								placeholder="Your Name"
							/>
						</div>
						<div className="flex flex-col w-[100%] md:w-6/12">
							<label className="text-left mt-4 md:mt-[0px] font-semibold ml-6">Email</label>
							<input
								className="bg-[#f5f5f5] rounded-full h-10 border-2 px-6 border-sky-400"
								type="email"
								name="user_email"
								placeholder="Your Email"
							/>
						</div>
					</div>
					<label className="text-left font-semibold mt-6 ml-6">Message</label>
					<textarea
						className="bg-[#f5f5f5] rounded-3xl h-64 p-6 border-2 border-sky-400"
						name="message"
						placeholder="Hi, I need a web app for my startup and I think you'd do a great work..."
					/>
					<input
						className="text-white w-48 text-2xl font-bold mx-auto h-12 mt-8 rounded-3xl bg-gradient-to-r bg-radial-at-tl from-sky-400 to-purple-400"
						type="submit"
						value="Send"
					/>
				</form>
				<br />
				<br />
			</div>
		</>
	);
};

export default contact;
