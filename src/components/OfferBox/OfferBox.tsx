import React from "react";

const OfferBox = () => {
	return (
		<div className="w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
			<p className="text-3xl sm:text-5xl pt-20 font-sans font-bold">
				{/* Co możemy stworzyć?  */}
				What can we build?
			</p>
            <br />
			<div className='flex flex-col md:flex-row justify-center mx-auto md:mx-[20%]'>
				<div className="flex flex-col justify-center items-center w-[80%] xl:w-4/12 min-h-[70vh] mx-auto my-10 md:ml-0 md:m-8 mx-auto bg-gray-100 rounded-3xl drop-shadow-sm">
					<p className="text-xl sm:text-3xl pt-4 px-2 font-sans font-bold">
						{/* Używamy */}
						We're using
					</p>
					<div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center p-2 rounded-xl'>ReactJS</div>
                    <div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center p-2 rounded-xl'>React Native</div>
                    <div className='w-8/12 h-12 my-2 bg-white drop-shadow text-lg font-bold flex items-center justify-center p-2 rounded-xl'>JavaScript & TypeScript</div>
                    <div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center p-2 rounded-xl'>HTML & CSS</div>
                    <div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center p-2 rounded-xl'>NodeJS</div>
                    <div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center p-2 rounded-xl'>Python</div>
                    <div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center p-2 rounded-xl'>Golang</div>
                    <div className='w-8/12 h-12 mt-2 mb-10 bg-white drop-shadow text-xl font-bold flex items-center justify-center rounded-xl'>C++</div>

				</div>
				<div className="flex flex-col justify-center items-center w-[80%] xl:w-4/12 min-h-[70vh] mx-auto my-10 md:mr-0 md:m-8 mx-auto bg-green-400 rounded-3xl drop-shadow-sm">
					<p className="text-xl sm:text-3xl text-white pt-4 px-2 font-sans font-bold">
						{/* Stworzymy */}
						We'll build
					</p>
                    <div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center rounded-xl'>Landing page</div>
					<div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center rounded-xl'>Portfolio</div>
                    <div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center rounded-xl'>
						{/* Sklep internetowy */}
						E-commerce store
						</div>
                    <div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center rounded-xl'>
						{/* Aplikację mobilną */}
						Mobile app
						</div>
                    <div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center rounded-xl'>
						{/* Grę komputerową */}
						Video game
						</div>
                    <div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center rounded-xl'>
						{/* Kryptowalutę */}
						Cryptocurrency
						</div>
                    <div className='w-8/12 h-12 my-2 bg-white drop-shadow text-xl font-bold flex items-center justify-center rounded-xl'>
						{/* Bazę danych */}
						Database
						</div>
                    <div className='w-8/12 h-12 mt-2 mb-10 bg-white drop-shadow text-xl font-bold flex items-center justify-center rounded-xl'>
						{/* I wiele więcej */}
						And even more!
						</div>
				</div>
			</div>
		</div>
	);
};

export default OfferBox;
