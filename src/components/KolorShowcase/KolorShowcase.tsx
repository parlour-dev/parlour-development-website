import React from "react";
import Mockup from "./kolorMockup.webp";
import Kolor from "./Kolor.webp";

const KolorShowcase = () => {
	return (
		<div className="w-full h-auto bg-white rounded-t-3xl">
			<div className="3xl:mx-auto max-w-screen-3xl">
				<div className="h-32"></div>
				<div className="text-8xl text-bold h-auto flex justify-center items-center">
					Software we built
				</div>

				<div className="flex h-auto items-center justify-center flex-col lg:flex-row mt-24 ">
					<div>
						<img
							draggable="true"
							className="mt-12 lg:mt-0"
							src={Kolor}
							alt="Phone image with code writted on its screen"
						/>
					</div>
					<div>
						<img
							draggable="true"
							className=" mt-24 lg:mt-0"
							src={Mockup}
							alt="Phone image with code writted on its screen"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KolorShowcase;
