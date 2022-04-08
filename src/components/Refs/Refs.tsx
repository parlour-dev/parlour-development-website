import React from "react";
import Ref from "./refNotFlip.png";
import RefFlip from "./refFlip.png";
import MI from "./mi.webp";

const Refs = () => {
	return (
		<div className="w-full h-auto bg-[#f5f5f5] rounded-b-3xl shadow-2xl shadow-neutral-200">
			<div className="3xl:mx-auto max-w-screen-3xl flex flex-col overflow-hidden lg:flex-row  w-full mt-36 justify-between items-center ">
				<div className="lg:w-6/12  flex flex-col">
					<div className="lg:ml-20 mt-0 lg:mt-0 leading-tight text-4xl lg:text-5xl xl:text-5xl font-semibold text-center lg:text-left">
						Working with Parlour Development has been a great pleasure
					</div>
					<div className="lg:ml-20 mt-6 leading-tight text-xl lg:text-xl xl:text-2xl text-center lg:text-left">
						Wasdag with Parlour Development has Wasdag with Parlour Development
						has be Wasdag with Parlour Development has be Wasdag with Parlour
						Development has be Wasdag with Parlour Development has be v Wasdag
						with Parlour Development has be
					</div>
				</div>
				<div className="mt-12 lg:mt-0 flex justify-center align-center overflow-hidden  relative lg:mr-20 ">
					<img
						draggable="true"
						className=""
						src={Ref}
						alt="Phone image with code writted on its screen"
					/>

					<div className="w-[50%] absolute mt-12">
						<img
							draggable="false"
							className="rounded-3xl inset-0 absolute  "
							src={MI}
							alt="Phone image with code writted on its screen"
						/>
					</div>
					<div className=" w-[50%] mt-[90%] mr-[25%]  absolute text-white">
						<p className="text-left text-2xl sm:text-5xl lg:text-4xl  xl:text-5xl font-semibold">
							Maria Iwaszko
						</p>
						<p className="text-left text-xl">Founder at Mindset</p>
					</div>
				</div>
			</div>

			<div className="3xl:mx-auto max-w-screen-3xl flex flex-col overflow-hidden lg:flex-row  w-full mt-36 justify-between items-center lg:flex-row-reverse ">
				<div className="lg:w-6/12  flex flex-col">
					<p className="lg:mr-20 mt-0 lg:mt-0 leading-tight text-4xl lg:text-5xl xl:text-5xl font-semibold text-center lg:text-left">
						Working with Parlour Development has been a great pleasure
					</p>
					<p className="lg:mr-20 mt-6 leading-tight text-xl lg:text-xl xl:text-2xl text-center lg:text-left">
						Wasdag with Parlour Development has Wasdag with Parlour Development
						has be Wasdag with Parlour Development has be Wasdag with Parlour
						Development has be Wasdag with Parlour Development has be v Wasdag
						with Parlour Development has be
					</p>
				</div>
				<div className="mt-12 lg:mt-0 flex justify-center align-center overflow-hidden  relative lg:ml-20 ">
					<img
						draggable="true"
						className=""
						src={RefFlip}
						alt="Phone image with code writted on its screen"
					/>

					<div className="w-[50%] absolute mt-12">
						<img
							draggable="false"
							className="rounded-3xl inset-0 absolute  "
							src={MI}
							alt="Phone image with code writted on its screen"
						/>
					</div>
					<div className=" w-[50%] mt-[90%] ml-[25%]  absolute text-white">
						<p className="text-left text-2xl sm:text-5xl lg:text-4xl  xl:text-5xl font-semibold">
							Maria Iwaszko
						</p>
						<p className="text-left text-xl">Founder at Mindset</p>
					</div>
				</div>
			</div>

			<div className="3xl:mx-auto max-w-screen-3xl flex flex-col overflow-hidden lg:flex-row  w-full mt-36 justify-between items-center ">
				<div className="lg:w-6/12  flex flex-col">
					<p className="lg:ml-20 mt-0 lg:mt-0 leading-tight text-4xl lg:text-5xl xl:text-5xl font-semibold text-center lg:text-left">
						Working with Parlour Development has been a great pleasure
					</p>
					<p className="lg:ml-20 mt-6 leading-tight text-xl lg:text-xl xl:text-2xl text-center lg:text-left">
						Wasdag with Parlour Development has Wasdag with Parlour Development
						has be Wasdag with Parlour Development has be Wasdag with Parlour
						Development has be Wasdag with Parlour Development has be v Wasdag
						with Parlour Development has be
					</p>
				</div>
				<div className="mt-12 lg:mt-0 flex justify-center align-center overflow-hidden  relative lg:mr-20 ">
					<img
						draggable="true"
						className=""
						src={Ref}
						alt="Phone image with code writted on its screen"
					/>

					<div className="w-[50%] absolute mt-12">
						<img
							draggable="false"
							className="rounded-3xl inset-0 absolute  "
							src={MI}
							alt="Phone image with code writted on its screen"
						/>
					</div>
					<div className=" w-[50%] mt-[90%] mr-[25%]  absolute text-white">
						<p className="text-left text-2xl sm:text-5xl lg:text-4xl  xl:text-5xl font-semibold">
							Maria Iwaszko
						</p>
						<p className="text-left text-xl">Founder at Mindset</p>
					</div>
				</div>
			</div>
			<div className="h-32 bg-[#f5f5f5]"></div>
		</div>
	);
};

export default Refs;
