import React from "react";
import RefFlip from "./refFlip.png";
import ImgLeft from "./kolorLogo.webp";
import ImgRight from "./kolorLanding.webp";
import ImgBottom from "./kolorDapp.webp";
import CaseStudy from "./CaseStudy.png";
import { Link } from "gatsby";
import { useEffect, useState } from "react";
import Popup from "./Popup";
// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

type PopupPhotoType = "main" | "left" | "right";

const KolorStudy = (props: any) => {
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
		<div className="w-full h-auto bg-[#f5f5f5] rounded-b-3xl shadow-2xl shadow-neutral-200">
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
					<div className="lg:ml-20 mt-0 lg:mt-0 leading-tight text-4xl lg:text-4xl xl:text-5xl font-semibold text-center lg:text-left">
						A social media dapp
					</div>
					<div className="lg:ml-20 mt-6 leading-tight lg:text-lg xl:text-xl text-center lg:text-left">
						Wasdag with Parlour Development has Wasdag with Parlour Development
						has be Wasdag with Parlour Development has be Wasdag with Parlour
						Development has be Wasdag with Parlour Development has be v Wasdag
						with Parlour Development has be Wasdag with Parlour Development has
						Wasdag with Parlour Development has be Wasdag with Parlour
						Development has be Wasdag with Parlour Development has be Wasdag
						with Parlour Development has be v Wasdag with Parlour Development
					</div>
				</div>
				<div className="mt-12 lg:mt-0 flex justify-center align-center overflow-hidden  relative lg:mr-20 ">
					<img
						className=""
						src={RefFlip}
						alt="Phone image with code writted on its screen"
					/>

					<div className="absolute flex flex-col justify-center w-[90%] h-[90%]">
						<div className="h-[15%]"></div>
						<div className=" flex justify-between flex-col lg:flex-row items-center mt-[12%] lg:mt-[0%] ">
							<div
								className=" w-[40%] aspect-square rounded-3xl "
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
									className="object-cover w-[100%] h-[100%] rounded-3xl"
								/>
							</div>
							<div
								className=" w-[40%] aspect-square mt-[5%] lg:mt-[0%] "
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
									className="object-cover w-[100%] h-[100%] rounded-3xl"
								/>
							</div>
						</div>
						<div className="h-[10%] hidden lg:flex"></div>
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
									className="object-cover w-[100%] h-[100%] rounded-3xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="text-8xl mt-12">Sound interesting?</div>
			<Link to="/projects">
				<div className=" w-[100%] justify-center flex mt-8 scale-75 ">
					<img src={CaseStudy} alt="Bottom picture showing the project " />
				</div>
			</Link>
		</div>
	);
};

export default KolorStudy;
