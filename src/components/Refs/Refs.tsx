import React from "react";
import Ref from "./refNotFlip.png";
import RefFlip from "./refFlip.png";
import MI from "./mi.webp";
import GC from "./gc.webp";

const Refs = () => {
	return (
		<div className="w-full h-auto bg-transparent rounded-b-3xl shadow-neutral-600">
			{/* <div className="3xl:mx-auto max-w-screen-3xl flex flex-col overflow-hidden lg:flex-row  w-full mt-36 justify-between items-center ">
				<div className="lg:w-6/12  flex flex-col">
					<p className="lg:ml-20 mt-0 lg:mt-0 leading-tight text-4xl lg:text-5xl xl:text-5xl font-semibold mx-10 lg:mx-auto text-left">
						Working with Parlour Development has been a great pleasure.
					</p>
					<p className="lg:ml-20 mt-6 leading-tight text-xl lg:text-xl xl:text-2xl mx-10 lg:mx-auto text-left">
						I love how transparent they were about how they work. From day one,
						I could look into each step of the development process and contact
						them at any time if needed. They are a team of very insightful
						people.
					</p>
				</div>
				<div className="mt-12 w-10/12 md:w-auto lg:mt-0 flex justify-center align-center overflow-hidden  relative lg:mr-20 ">
					<img
						draggable="true"
						className=""
						src={Ref}
						alt="Phone image with code writted on its screen"
					/>

					<div className="w-[55%] absolute mt-12">
						<img
							draggable="false"
							className="mt-[-2rem] md:mt-0 rounded-[2.5rem] md:shadow-2xl shadow-neutral-600 inset-0 absolute  "
							src={MI}
							alt="Phone image with code writted on its screen"
						/>
					</div>
					<div className=" w-[50%] mt-[88%] md:mt-[95%] mr-[25%] absolute text-white">
						<p className="text-left text-2xl sm:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
							Maria Iwaszko
						</p>
						<p className="text-left font-medium text-[0px] md:text-xl">
							Founder at Mindset
						</p>
					</div>
				</div>
			</div> */}

			<div className="3xl:mx-auto max-w-screen-3xl flex flex-col-reverse overflow-hidden lg:flex-row  w-full mt-36 justify-between items-center ">
				<div className="mt-12 w-10/12 md:w-auto lg:mt-0 flex justify-center align-center overflow-hidden  relative lg:ml-20 ">
					<img
						draggable="true"
						className=""
						src={RefFlip}
						alt="Phone image with code writted on its screen"
					/>

					<div className="w-[55%] object-scale-down absolute mt-8">
						<img
							draggable="false"
							className="mt-[-2.5rem] md:mt-0 rounded-[2.5rem] scale-95 md:shadow-2xl shadow-neutral-600 inset-0 absolute  "
							src={GC}
							alt="A photo of Grzegorz Ciupek"
						/>
					</div>
					<div className=" w-[50%] mt-[88%] md:mt-[95%] ml-[25%] absolute text-white">
						<p className="text-left text-2xl sm:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
							Grzegorz Ciupek
						</p>
						<p className="text-left font-medium text-[0px] md:text-xl">
							CEO {"&"} Founder at ECAT eCommerce
						</p>
					</div>
				</div>
				<div className="lg:w-6/12  flex flex-col">
					<p className="lg:mr-20 mt-0 lg:mt-0 leading-tight text-4xl lg:text-5xl xl:text-5xl font-semibold mx-10 lg:mx-auto text-left">
						My company's project couldn't have been done better!
					</p>
					<p className="lg:mr-20 mt-6 leading-tight text-xl lg:text-xl xl:text-2xl mx-10 lg:mx-auto text-left">
						Parlour not only developed our product, but also helped us
						understand different approaches to launching an NFT app. They know
						everything about crypto, both the technicalities and the culture
						surrounding it. <br /> I am looking forward to working with them
						again!
					</p>
				</div>
			</div>

			{/* <div className="3xl:mx-auto max-w-screen-3xl flex flex-col overflow-hidden lg:flex-row  w-full mt-36 justify-between items-center ">
				<div className="lg:w-6/12  flex flex-col">
					<p className="lg:ml-20 mt-0 lg:mt-0 leading-tight text-4xl lg:text-5xl xl:text-5xl font-semibold mx-10 lg:mx-auto text-left">
						Working with Parlour Development has been a great pleasure
					</p>
					<p className="lg:ml-20 mt-6 leading-tight text-xl lg:text-xl xl:text-2xl mx-10 lg:mx-auto text-left">
						Wasdag with Parlour Development has Wasdag with Parlour Development
						has be Wasdag with Parlour Development has be Wasdag with Parlour
						Development has be Wasdag with Parlour Development has be v Wasdag
						with Parlour Development has be
					</p>
				</div>
				<div className="mt-12 w-10/12 md:w-auto lg:mt-0 flex justify-center align-center overflow-hidden  relative lg:mr-20 ">
					<img
						draggable="true"
						className=""
						src={Ref}
						alt="Phone image with code writted on its screen"
					/>

					<div className="w-[55%] absolute mt-12">
						<img
							draggable="false"
							className="mt-[-2rem] md:mt-0 rounded-[2.5rem] md:shadow-2xl shadow-neutral-600 inset-0 absolute  "
							src={MI}
							alt="Phone image with code writted on its screen"
						/>
					</div>
					<div className=" w-[50%] mt-[88%] md:mt-[95%] mr-[25%] absolute text-white">
						<p className="text-left text-2xl sm:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
							Maria Iwaszko
						</p>
						<p className="text-left font-medium text-[0px] md:text-xl">
							Founder at Mindset
						</p>
					</div>
				</div>
			</div> */}
			<div className="h-10 bg-[#f5f5f5]"></div>
		</div>
	);
};

export default Refs;
