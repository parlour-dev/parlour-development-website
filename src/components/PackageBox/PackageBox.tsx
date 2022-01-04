import { Link } from "gatsby";
import React from "react";

const PackageBox = () => {
	return (
		<div className="w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
			<p className="text-3xl sm:text-5xl pt-20 font-sans font-bold">
				Popularne pakiety
			</p>
			<div className="flex flex-col md:flex-row justify-center my-10">
				<div className="mx-auto md:mx-0 w-72 my-[2.5vh] h-[70vh] bg-gray-100 rounded-2xl md:rounded-none md:rounded-l-2xl drop-shadow">
					<p className="text-4xl text-justify p-4 font-semibold">
						Design + <br /> Front-end
					</p>
					<p className="text-xl text-left p-4">
						Zaprojektujemy twoją aplikację, po czym zbudujemy jej front-end.{" "}
						<br /> <br />
						Pakiet ten obejmuje projekt aplikacji, zamianę projektu na kod oraz
						integrację z API.
					</p>
				</div>
				<div className="mx-auto md:mx-0 w-80 h-[75vh] bg-green-400 rounded-3xl drop-shadow-md">
					<p className="text-5xl text-justify p-4 font-bold text-white">
						Design + Front-end + Back-end
					</p>
					<p className="text-2xl text-left p-4 text-white font-semibold">
						Kopletne rozwiązanie dla Twojego projektu. <br />
						<br /> Od zera przedstawisz nam, czego potrzebujesz, a my zrobimy
						resztę :)
					</p>
				</div>
				<div className="mx-auto md:mx-0 w-72 my-[2.5vh] h-[70vh] bg-gray-100 rounded-2xl md:rounded-none md:rounded-r-2xl drop-shadow">
					<p className="text-4xl text-justify p-4 font-semibold">Back-end</p>
					<p className="text-xl text-left p-4">Stworzymy back-end [...]</p>
				</div>
			</div>
			<Link to="/contact">
				<div className="font-bold w-72 mx-auto text-2xl text-white bg-green-400 px-6 py-2 m-2 rounded-xl hover:scale-105 hover:drop-shadow-lg duration-300">
					Skontaktuj się z nami
				</div>
			</Link>
			<br />
		</div>
	);
};

export default PackageBox;
