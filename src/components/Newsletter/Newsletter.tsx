import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
	const form = useRef<HTMLFormElement>(null);

	const [showLabel, setShowLabel] = useState<boolean>(false);
	const [labelText, setLabelText] = useState<string>("Email sent!");

	// Checking whether inputs are empty
	const [email, setEmail] = useState<string>("");

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

		if (email === "") {
			setShowLabel(true);
			setLabelText("Please type in your email");
		}
	};

	return (
		<div className="3xl:mx-auto max-w-screen-3xl flex flex-col sm:flex-row items-center justify-between w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
			<div className="w-[100%]  mt-16 sm:mt-[0px]">
				<p className="font-bold text-4xl md:text-6xl px-6">
					Want to know what's up in tech?
				</p>
				<p className="w-[100%] text-xl md:text-3xl mt-4 px-6 ">
					Sign up to our free newsletter! Once a week we'll brief you on
					everything you need to know.
				</p>
				<form ref={form} onSubmit={sendEmail}>
					<div className="flex flex-col lg:flex-row justify-center content-center mt-12 ">
						<div className="border-2 border-y-sky-400 border-x-blue-400 py-2 rounded-full w-[45%] ml-[27.5%] lg:ml-0 flex justify-center items-center lg:justify-left h-24 lg:h-16">
							<input
								className="lg:ml-8 w-[90%] border-none resize-none overflow-none outline-0 h-6 mx-auto"
								type="email"
								name="user_email"
								placeholder="Enter your email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<input
							className="mt-8 lg:mt-0 border-2 border-y-sky-400 border-x-blue-400 py-2 rounded-full sel  w-[45%] flex justify-center items-center lg:w-[15%] ml-[27.5%] lg:ml-8 h-24 lg:h-16 bg-gradient-to-r bg-radial-at-tl from-sky-400 to-purple-400"
							type="submit"
							value="Notify me"
						/>
					</div>
				</form>
			</div>

			{showLabel === true && (
				<div className="ml-8 mb-8 text-white font-bold w-[80%] md:w-64 mt-10 md:mt-0 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
					{labelText}
				</div>
			)}
		</div>
	);
};

export default Newsletter;
