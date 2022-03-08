import React from "react";

import Dapp from "./dapp.webp";
import Gas from "./gas.png";
import DeFi from "./defi.webp";
import NFT from "./nft.png";
import Token from "./token.png";
import Liquidity from "./liquidity.webp";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

const Offer = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className="w-auto 3xl:mx-auto max-w-screen-3xl min-h-[84vh] mx-4 my-8 ">
			<p className="text-white text-6xl px-4 font-bold mt-32">
				Launch anything.
			</p>
			{/* 
		<div className="inline-grid grid-cols-3 grid-rows-2 gap-8 w-9/10 mt-5 ">	</div>	 */}

			<div className="flex flex-col lg:flex-row gap-8 mt-16 justify-center items-center relative z-50">
				<div className="flex flex-col gap-8 w-96 ">
					<div
						data-aos="zoom-in-right"
						data-aos-duration="800"
						className="flex flex-col items-center justify-center bg-[#1D1D1D] text-center h-96 rounded-3xl relative lg:h-[25rem] border-[1px] border-x-blue-500 border-y-sky-500"
					>
						<img
							className="w-[60%] mx-auto mb-10"
							src={Dapp}
							alt="A logo of Ethereum"
						/>
						<div className="h-24 bottom-0 absolute w-full rounded-b-3xl">
							<div className="text-white text-3xl font-bold  mt-4 ml-4 text-left justify-center ">
								Dapp
							</div>
							<div className="text-white text-xl mt-1 ml-4 text-left justify-center ">
								Lorem Impsum Dolor
							</div>
						</div>
					</div>
					<div
						data-aos="zoom-in-up"
						data-aos-duration="800"
						data-aos-delay="1500"
						className="flex flex-col items-center justify-center row-start-2 bg-[#1D1D1D] text-center  h-[32rem] rounded-3xl relative border-[1px] border-stone-600"
					>
						<img
							className="w-[60%] mx-auto mb-10"
							src={Gas}
							alt="Gas station"
						/>
						<div className="h-24 bottom-0 absolute w-full rounded-b-3xl">
							<div className="text-white text-2xl font-bold  mt-4 ml-4 text-left justify-center ">
								Gas optimalization
							</div>
							<div className="text-white text-xl   mt-1 ml-4 text-left justify-center ">
								Lorem Impsum Dolor
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-8 w-96 ">
					<div
						data-aos="zoom-in-down"
						data-aos-duration="800"
						data-aos-delay="400"
						className="flex flex-col items-center justify-center  bg-[#1D1D1D]  text-center h-[32rem] rounded-3xl relative  border-[1px] border-stone-600"
					>
						<img className="w-[45%] mx-auto mb-10" src={NFT} alt="A cool NFT" />
						<div className="h-24 bottom-0 absolute w-full rounded-b-3xl">
							<div className="text-white text-3xl font-bold  mt-4 ml-4 text-left justify-center ">
								NFT
							</div>
							<div className="text-white text-xl   mt-1 ml-4 text-left justify-center ">
								Lorem Impsum Dolor
							</div>
						</div>
					</div>
					<div
						data-aos="zoom-in-up"
						data-aos-duration="800"
						data-aos-delay="950"
						className="flex flex-col items-center justify-center bg-[#1D1D1D] text-center lg:h-[25rem] h-96 rounded-3xl relative border-[1px] border-x-green-500 border-y-emerald-500"
					>
						<img
							className="w-[50%] mx-auto mb-10"
							src={DeFi}
							alt="Wallet with Bitcoin in it"
						/>
						<div className="h-24 bottom-0 absolute w-full rounded-b-3xl">
							<div className="text-white text-3xl font-bold  mt-4 ml-4 text-left justify-center ">
								DeFi
							</div>
							<div className="text-white text-xl   mt-1 ml-4 text-left justify-center ">
								Lorem Impsum Dolor
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-8 w-96 ">
					<div
						data-aos="zoom-in-left"
						data-aos-duration="800"
						data-aos-delay="800"
						className="flex flex-col items-center justify-center bg-[#1D1D1D]  text-center lg:h-[28rem] h-96 rounded-3xl relative border-[1px] border-stone-600"
					>
						<img
							className="w-[60%] mx-auto mb-10"
							src={Token}
							alt="Money and coins floating"
						/>
						<div className="h-24 bottom-0 absolute w-full rounded-b-3xl">
							<div className="text-white text-3xl font-bold  mt-4 ml-4 text-left justify-center ">
								Token
							</div>
							<div className="text-white text-xl   mt-1 ml-4 text-left justify-center ">
								Lorem Impsum Dolor
							</div>
						</div>
					</div>
					<div
						data-aos="zoom-in-left"
						data-aos-duration="800"
						data-aos-delay="650"
						className="flex flex-col items-center justify-center bg-[#1D1D1D] text-center h-96 lg:h-[29rem] rounded-3xl relative border-[1px] border-stone-600"
					>
						<img
							className="w-[90%] mx-auto mb-10"
							src={Liquidity}
							alt="Icons showing a 3D graph"
						/>
						<div className="h-24 bottom-0 absolute w-full rounded-b-3xl">
							<div className="text-white text-3xl font-bold  mt-4 ml-4 text-left justify-center ">
								Liquidity
							</div>
							<div className="text-white text-xl   mt-1 ml-4 text-left justify-center ">
								Lorem Impsum Dolor
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offer;
