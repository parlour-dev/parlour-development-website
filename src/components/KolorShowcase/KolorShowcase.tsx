import React from "react";
import Mockup from "./kolorMockup.webp";
import Kolor from "./Kolor.webp";
import RefFlip from "./refFlip.png";
import ImgLeft from "./kolorLogo.webp";
import ImgRight from "./kolorLanding.webp";
import ImgBottom from "./kolorDapp.webp";
import CaseStudy from "./CaseStudy.png";
import { Link } from "gatsby";
import { useEffect, useState } from "react";
import Popup from "../Popup";
// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

type PopupPhotoType = "main" | "left" | "right";

const KolorShowcase = () => {

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
		<div className="w-full h-auto bg-white shadow-3xl shadow-neutral-200 my-10 rounded-3xl">
			<div className="3xl:mx-auto max-w-screen-3xl">
				<div className="h-32"></div>
				<div className="text-5xl md:text-8xl font-bold h-auto flex justify-center items-center">
					Software we built
				</div>

				<div className="flex h-auto items-center justify-center flex-col lg:flex-row mt-24 ">
					<div>
						<img
							draggable="false"
							className="mt-12 w-10/12 mx-auto lg:mt-0"
							src={Kolor}
							alt="Phone image with code writted on its screen"
						/>
					</div>
					<div>
						<img
							draggable="false"
							className="w-10/12 mx-auto mt-24 lg:mt-0"
							src={Mockup}
							alt="Phone image with code writted on its screen"
						/>
					</div>
				</div>
				{isOpen && popupPhoto === "main" && (
				<Popup handleClose={togglePopup} image={ImgBottom} />
			)}
			{isOpen && popupPhoto === "left" && (
				<Popup handleClose={togglePopup} image={ImgLeft} />
			)}
			{isOpen && popupPhoto === "right" && (
				<Popup handleClose={togglePopup} image={ImgRight} />
			)}
			<div className="3xl:mx-auto max-w-screen-3xl flex flex-col overflow-hidden lg:flex-row  w-full mt-36 justify-between items-top ">
				<div className="lg:w-[40%]  flex flex-col">
					<div className="lg:ml-20 mt-0 lg:mt-0 leading-tight text-4xl lg:text-4xl xl:text-5xl font-bold text-center lg:text-left">
						A social media dapp
					</div>
					<p className="lg:ml-20  md:mr-10 mt-6 lg:text-lg xl:text-xl mx-10 text-left">
						Wasdag with Parlour Development has Wasdag with Parlour Development
						has be Wasdag with Parlour Development has be Wasdag with Parlour
						Development has be Wasdag with Parlour Development has be v Wasdag
						with Parlour Development has be Wasdag with Parlour Development has
						Wasdag with Parlour Development has be Wasdag with Parlour
						Development has be Wasdag with Parlour Development has be Wasdag
						with Parlour Development has be v Wasdag with Parlour Development
					</p>
				</div>
				<div className="mt-12 lg:mt-0 flex justify-center align-center overflow-hidden  relative lg:mr-20 ">
					<img
						className="w-10/12 md:w-auto"
						src={RefFlip}
						alt="Phone image with code writted on its screen"
					/>

					<div className="absolute flex flex-col justify-center w-[90%] h-[90%]">
						<div className="h-[15%]"></div>
						<div className=" flex justify-between flex-col lg:flex-row items-center mt-[12%] lg:mt-[0%] ">
							<div
								className=" w-[45%] aspect-square rounded-3xl "
								data-aos="zoom-in"
								data-aos-duration="1500"
								onClick={() => {
									setPopupPhoto("left");
									togglePopup();
								}}
							>
								<img
									src={ImgLeft}
									alt="Left picture showing the project"
									className="object-cover w-[100%] h-[100%] rounded-[3rem] shadow-3xl shadow-neutral-300"
								/>
							</div>
							<div
								className=" w-[45%] aspect-square mt-[5%] lg:mt-[0%] "
								data-aos="zoom-in"
								data-aos-duration="1500"
								onClick={() => {
									setPopupPhoto("right");
									togglePopup();
								}}
							>
								<img
									src={ImgRight}
									alt="Right picture showing the project"
									className="object-cover w-[100%] h-[100%] rounded-[3rem] shadow-3xl shadow-neutral-300"
								/>
							</div>
						</div>
						<div className="h-[8%] hidden lg:flex"></div>
						<div
							className=" lg:flex  justify between h-[35%] hidden"
							data-aos="zoom-in"
							data-aos-duration="1500"
							onClick={() => {
								setPopupPhoto("main");
								togglePopup();
							}}
						>
							<div className=" w-[100%] ">
								<img
									src={ImgBottom}
									alt="Bottom picture showing the project"
									className="object-cover w-[100%] h-[100%] rounded-[3rem] shadow-3xl shadow-neutral-300"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="text-5xl md:text-7xl font-bold mt-12">Sounds interesting?</div>
			<Link to="/projects">
					<img className="justify-center w-[20rem] md:w-[32rem] mx-auto mt-8 hover:scale-105 transition duration-300" src={CaseStudy} alt="Button redirecting to case study of the project" />
			</Link>
			<div className="h-20"></div>
			</div>
		</div>
	);
};

export default KolorShowcase;
