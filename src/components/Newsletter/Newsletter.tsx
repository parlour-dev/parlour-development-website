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
				"newsletter",
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

		if (email !== "") {
			window.location.reload();}
	};

	return (
		<div className="3xl:mx-auto max-w-screen-3xl">
			<p className="font-bold text-left mt-10 text-4xl md:text-6xl px-6">
				Sign up and get a free website audit!
			</p>
			<div className="flex flex-col sm:flex-row items-center justify-center w-auto rounded-2xl mx-4 my-4">
				<div className="w-[100%] flex flex-col md:flex-row">
					<div className="min-h-[20%] bg-white rounded-2xl md:w-[40%] drop-shadow-sm">
						<p className="w-full text-xl text-left md:text-xl p-10 ">
							Sign up to our free newsletter. <br /> Once a week we'll brief you
							on everything tech, from the latest news to the best resources.
							We'll also send you a free website audit for making the effort to
							sign up.
						</p>
					</div>
					<form
						ref={form}
						className="mx-auto min-h-[30vh] w-full rounded-r-2xl mt-4 md:mt-0 md:ml-4 border-2 border-y-sky-400 border-x-blue-400 bg-white rounded-2xl"
						onSubmit={sendEmail}
					>
						<div className="flex flex-col items-center mt-6 justify-center">
							<p className="my-4 text-2xl font-bold">Newsletter</p>
							<div className="flex flex-col lg:flex-row gap-4">
								{showLabel === true && (
									<div className="border-2 border-red-500 py-2 rounded-full w-80 xl:w-96 flex justify-center items-center lg:justify-left h-16">
										<input
											className="lg:mx-8 w-[90%] border-none resize-none overflow-none outline-0 h-6 mx-auto"
											type="email"
											name="user_email"
											placeholder="Enter your email"
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								)}
								{showLabel === false && (
									<div className="border-2 border-y-sky-400 border-x-blue-400 py-2 rounded-full w-80 xl:w-96 flex justify-center items-center lg:justify-left h-16">
										<input
											className="lg:mx-8 w-[90%] border-none resize-none overflow-none outline-0 h-6 mx-auto"
											type="email"
											name="user_email"
											placeholder="Enter your email"
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								)}

								<div className="border-2 bg-white border-y-sky-400 border-x-blue-400 py-2 rounded-full w-80 xl:w-96 flex justify-center items-center lg:justify-left h-16">
									<input
										className="lg:mx-8 w-[90%] border-none resize-none overflow-none outline-0 h-6 mx-auto"
										type="url"
										name="audited_website"
										placeholder="Audited website (optional)"
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
							</div>
							<input
								className="hover:scale-105 mb-10 md:mb-0 hover:drop-shadow-lg duration-300 bg-gradient-to-r bg-radial-at-tl from-sky-400 to-purple-400 text-white font-bold rounded-full h-14 w-64 text-lg mt-4"
								type="submit"
								value="Sign up"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
