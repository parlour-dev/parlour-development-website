import { Link } from "gatsby";
import React from "react";

const PackageBox = () => {
	return (
		<div className="w-auto min-h-[80vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
			<p className="text-3xl sm:text-5xl pt-20 font-sans font-semibold">
				Popular packages
			</p>
			<div className="flex flex-col md:flex-row justify-center my-10">
				<div className="mx-auto md:mx-0 w-72 my-[2.5vh] h-[60vh] bg-gray-100 rounded-2xl md:rounded-none md:rounded-l-2xl drop-shadow">
					<p className="text-4xl text-justify p-6 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-green-500">
						Design <br /> Front-end
					</p>
					<p className="text-xl text-left p-6">
						{/* Zaprojektujemy twoją aplikację, po czym zbudujemy jej front-end.{" "} */}
						We will design your app and then build the front-end.
						<br /> <br />
						{/* Pakiet ten obejmuje projekt aplikacji, zamianę projektu na kod oraz
						integrację z API. */}
						The package consists of app UI design, coding its front-end and API
						integration.
					</p>
				</div>
				<div className="mx-auto md:mx-0 w-80 h-[65vh] bg-white rounded-3xl shadow-3xl  shadow-blue-500/30 z-50">
					<p className="text-5xl text-left p-6 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-sky-500">
						Design <br /> Front-end <br /> Back-end
					</p>
					<p className="text-2xl text-left p-6 font-semibold ">
						{/* Kopletne rozwiązanie dla Twojego projektu. <br /> */}
						A complete solution for your project.
						<br />
						<br />
						{/* Od zera przedstawisz nam, czego potrzebujesz, a my zrobimy */}
						{/* resztę :) */}
						You will show us your vision and we'll do the rest :)
					</p>
				</div>
				<div className="mx-auto md:mx-0 w-72 my-[2.5vh] h-[60vh] bg-gray-100 rounded-2xl md:rounded-none md:rounded-r-2xl drop-shadow ">
					<p className="text-4xl text-justify p-6 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-teal-500">Back-end</p>
					<p className="text-xl text-left p-6">
						{/* Stworzymy zaplecze twojego projektu. Użyjemy najlepszej technologii
						oraz sprawimy, aby back-end był odporny na ataki.  */}
						We'll build the back-end of your project. We'll use the best
						technology and make sure the back-end does not have any
						vulnerabilities.
						<br /> <br />
						{/* Jeszcze jedno - będzie bardzo szybki. */}
						One more thing - it will be lightning fast.
					</p>
				</div>
			</div>
			<Link to="/contact">
				<div className="font-semibold w-72 mx-auto text-2xl text-white bg-gradient-to-br from-green-400 to-teal-400 px-6 py-2 m-2 rounded-xl hover:scale-105 hover:drop-shadow-lg duration-300">
					{/* Skontaktuj się z nami */}
					Contact us
				</div>
			</Link>
			<br />
		</div>
	);
};

export default PackageBox;
