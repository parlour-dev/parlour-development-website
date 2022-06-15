import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";
import { useTranslation } from "../i18n";

const contact = () => {
	const form = useRef<HTMLFormElement>(null);

	const [showLabel, setShowLabel] = useState<boolean>(false);
	const [labelText, setLabelText] = useState<string>("Email sent!");

	// Checking whether inputs are empty
	const [email, setEmail] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const sendEmail = (e: any) => {
		e.preventDefault();
		console.log("asdasd");

		emailjs
			.sendForm(
				"contact_service",
				"contact_form",
				form.current || "",
				"user_fBblKCcaSH1ou9ThY55o3"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		if (name === "") {
			setShowLabel(true);
			setLabelText("Please type in your name");
		}

		if (email === "") {
			setShowLabel(true);
			setLabelText("Please type in your email");
		}

		if (message === "") {
			setShowLabel(true);
			setLabelText("Please type in your message");
		}

		if (name && email && message !== "") {
			setShowLabel(true);
			setLabelText("Email sent!")
			
			window.location.reload
		}
	};

	const { t } = useTranslation();

	return (
		<div className="mt-28">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Contact | Parlour Development</title>
			</Helmet>
			<Navbar />
			<div className="w-auto 3xl:mx-auto max-w-screen-3xl min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
				<p className="text-3xl sm:text-5xl pt-20 px-2 font-sans font-bold">
					{t("contactHeader")}
				</p>
				<div className="p-6 sm:p-[0px] text-left mt-10 mx-auto md:w-[40%]">
					<p className="sm:p-6 md:p-0 text-2xl md:text-4xl sm:text-5xl leading-tight font-semibold ">
					{t("contactCTA")}{" "}
						<span className="w-[80%] text-transparent bg-clip-text break-words bg-gradient-to-r bg-radial-at-tl from-sky-400 to-purple-400">
							contact@parlour.dev
						</span>{" "}
						{t("contactCTA2")}
					</p>
				</div>
				{/* <form ref={form} onSubmit={sendEmail}> */}
				<form
					ref={form}
					onSubmit={sendEmail}
					className="flex flex-col w-[90%] md:w-[40%] mx-auto bg-white mt-10 rounded-3xl shadow-3xl shadow-sky-500/50  "
				>
					<div className="flex flex-col m-6">
						<div className="flex flex-col md:flex-row justify-between mt-2">
							<div className="flex flex-col w-[100%] md:w-6/12 md:mr-[2%]">
								<label className="text-left font-semibold ml-6">{t("contactName")}</label>
								<input
									className="bg-[#f5f5f5] rounded-full h-10 border-2 px-6 border-sky-400"
									type="text"
									name="user_name"
									placeholder={t("contactNameContent")}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="flex flex-col w-[100%] md:w-6/12">
								<label className="text-left mt-4 md:mt-[0px] font-semibold ml-6">
								{t("contactEmail")}
								</label>
								<input
									className="bg-[#f5f5f5] rounded-full h-10 border-2 px-6 border-sky-400"
									type="email"
									name="user_email"
									placeholder={t("contactEmailContent")}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>
						<label className="text-left font-semibold mt-6 ml-6">{t("contactMessage")}</label>
						<textarea
							className="bg-[#f5f5f5] rounded-3xl h-64 p-6 border-2 border-sky-400"
							name="message"
							placeholder={t("contactMessageContent")}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<input
							className="text-white w-48 text-2xl font-bold mx-auto h-12 mt-8 rounded-3xl bg-gradient-to-r bg-radial-at-tl from-sky-400 to-purple-400 hover:scale-105 hover:drop-shadow-lg duration-300"
							type="submit"
							value="Send"
						/>
					</div>
				</form>
				{showLabel === true && (
					<div className="ml-8 mb-8 text-white font-bold w-[80%] md:w-64 mt-10 md:mt-0 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
						{labelText}
					</div>
				)}
				<br />
				<br />
			</div>
		</div>
	);
};

export default contact;
