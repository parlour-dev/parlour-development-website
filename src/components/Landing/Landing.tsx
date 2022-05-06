import { Link } from "gatsby";
import React from "react";
import Mockup from "./iphoneMockupTemp.webp";
import "./stroke.css";
import ReactGA from "react-ga4";
import { useTranslation } from "../../i18n";

const Landing = () => {
	function OrderNowClick() {
		ReactGA.event({
			category: "Landing Click",
			action: "OrderNow",
		});
	}
	const { t } = useTranslation();
	return (
		<div className="w-full h-auto bg-white rounded-b-3xl shadow-2xl shadow-neutral-200">
			<div className="3xl:mx-auto max-w-screen-3xl flex flex-col overflow-hidden items-center lg:flex-row min-h-screen w-full bg-white rounded-b-3xl">
				<div className="lg:w-6/12  flex flex-col items-center lg:items-start justify-center">
					<p className="lg:ml-20 mt-48 lg:mt-0 leading-tight text-5xl lg:text-6xl xl:text-8xl font-bold text-center lg:text-left">
						{t("landingTitle")}<span className="stroke">{t("landingOutline")}</span>
					</p>
					<Link to="/contact">
						<button
							className="hover:scale-105 transition duration-300 lg:ml-20 w-10/12 shadow-lg shadow-neutral-200 lg:w-auto mt-20 bg-gradient-to-r from-parlourBlue to-parlourGreen text-white py-6 px-10 font-bold text-3xl rounded-tl-[2rem] rounded-br-[2rem]"
							onClick={OrderNowClick}
						>
							{t("actionButton")}
						</button>
					</Link>
				</div>
				<div className="lg:w-6/12 flex justify-end overflow-hidden">
					<img
						draggable="false"
						className="w-[25rem] md:w-[50rem] ml-32 mt-20 mb-10 lg:mt-32 lg:ml-24"
						src={Mockup}
						alt="Phone image with code writted on its screen"
					/>
				</div>
			</div>
		</div>
	);
};

export default Landing;
