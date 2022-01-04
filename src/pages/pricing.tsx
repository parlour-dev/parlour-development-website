import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";

const pricing = () => {
	return (
		<>
			<Navbar />
			<Helmet>
				<meta charSet="utf-8" />
				<title>
					Parlour Development - Wyceń swój projekt!
				</title>
			</Helmet>
			<div className="w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
				<p className="text-3xl sm:text-5xl pt-20 px-2 font-sans font-bold">
					Ile kosztuje nasz kod?
				</p>
				<div className="flex flex-col mx-[10%] md:mx-[30%]">
					<p className="text-lg mt-10 text-justify">
						Tworzymy programy i aplikacje w wielu językach programowania,
						technologiach oraz rozmiarach. Ciężko jest jednoznacznie
						określić cenę projektu - do każdego klienta podchodzimy w pełni
						indywidualnie, tak, aby idealnie dobrać technologię do jego potrzeb.
						<br /><br />Cena wykonania projektu zależy od kilku czynników:
                        <ol className='list-disc ml-10'>
                            <li>Wielkości</li>
                            <li>Technologii</li>
                            <li>Zakresu zlecenia (projekt - front-end - back-end)</li>
                            <li>Terminu wykonania</li>
                        </ol>
                        Gwarantujemy satysfakcję z wykonanego przez nas projektu. <br />
                        Zapraszamy do kontaktu!
					</p>
                    <Link to='/contact'>
					<div className="font-bold text-2xl text-white bg-green-400 px-6 py-2 m-2 rounded-xl hover:scale-105 hover:drop-shadow-lg duration-300">
						Skontaktuj się z nami
					</div>
                    </Link>
				</div>
			</div>
		</>
	);
};

export default pricing;
