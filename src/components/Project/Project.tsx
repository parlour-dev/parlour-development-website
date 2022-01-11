import React, { useState } from "react";
import Popup from "./Popup";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

type PopupPhotoType = "main" | "left" | "right";

const Project = (props: any) => {
	const [isOpen, setIsOpen] = useState(false);

	const [popupPhoto, setPopupPhoto] = useState<PopupPhotoType>("main");

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div>
			{isOpen && popupPhoto === "main" && (
				<Popup handleClose={togglePopup} image={props.mainImage} />
			)}
			{isOpen && popupPhoto === "left" && (
				<Popup handleClose={togglePopup} image={props.leftImage} />
			)}
			{isOpen && popupPhoto === "right" && (
				<Popup handleClose={togglePopup} image={props.rightImage} />
			)}
			<div data-aos="zoom-in-down" data-aos-duration="1000">
			<div className="font-sans w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
				<p className="font-bold pt-10 text-4xl">{props.title}</p>
				<div className="flex flex-col lg:flex-row mx-[10%] mt-10">
					<div className="mb-10">
						<div className="transition hover:scale-105 hover:drop-shadow-2xl duration-500 sm:w-144 sm:m-2 h-60 m-1 rounded-3xl relative overflow-hidden drop-shadow">
							<img
								onClick={() => {
									setPopupPhoto("main");
									togglePopup();
								}}
								src={props.mainImage}
								alt="Main"
								className="absolute  object-cover w-[100%] h-[100%]"
							/>
						</div>
						<div className="flex flex-row">
							<div className="transition hover:scale-105 hover:drop-shadow-2xl duration-500 w-[50%] sm:w-72 h-60 m-1 sm:m-2 rounded-3xl relative overflow-hidden drop-shadow  md:w-[50%] lg:w-72 " >
								<img
									onClick={() => {
										setPopupPhoto("left");
										togglePopup();
									}}
									src={props.leftImage}
									alt="Left"
									className="absolute scale-125 object-cover w-[100%] h-[100%]"
								/>
							</div>
							<div className="transition hover:scale-105 hover:drop-shadow-2xl duration-500 w-[50%] sm:w-72 h-60 m-1 sm:m-2 rounded-3xl relative overflow-hidden drop-shadow  md:w-[50%] lg:w-72">
								<img
									onClick={() => {
										setPopupPhoto("right");
										togglePopup();
									}}
									src={props.rightImage}
									alt="Right"
									className="absolute scale-125 object-cover w-[100%] h-[100%]"
								/>
							</div>
						</div>
						<a href={props.codeLink} target='_blank' rel='noopener'>
							<p className="font-bold text-2xl text-white bg-green-400 px-6 py-2 m-2 rounded-xl hover:scale-105 hover:drop-shadow-lg duration-300">
								{/* Zobacz kod */}
								Browse code
							</p>
						</a>
					</div>
					<div className="px-4 text-left flex flex-col items-baseline">
						<p className="font-bold text-2xl">
							{/* Opis */}
							Descrition
							</p>
						<p className="text-lg">{props.description}</p>
						<br />
						<p className="font-bold text-2xl">
							{/* Co wykonaliśmy? */}
							What did we build??
							</p>
						<p className="text-lg">{props.whatDidWeBuild}</p>

						<br />
						<p className="font-bold text-2xl">
							{/* Technologie (Tech Stack) */}
							Tech stack
							</p>
						<p className="text-lg">{props.techStack}</p>
						<br />


					</div>
					
				</div>
				<p className="font-bold text-2xl">Case study</p>
						<p className="text-lg mx-[10%] text-justify">{props.caseStudyP1}</p>
						<br />
						<p className="text-lg mx-[10%] text-justify">{props.caseStudyP2}</p>
						<br />
						<br />
			</div>
			</div>
		</div>
	);
};

export default Project;