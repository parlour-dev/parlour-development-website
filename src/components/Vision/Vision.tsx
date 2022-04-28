import React from "react";

// Image imports
import Dapp from "./dapp.webp";
import NFT from "./nft.png";
import Token from "./token.png";
import DeFi from "./defi.png";
import Gas from "./gas.webp";

import useMediaQuery from "../../hooks/useMediaQuery";

// Icon import
import { BsArrowRight } from "react-icons/bs";
import { Link } from "gatsby";

// Animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Vision = () => {
	const isDesktop = useMediaQuery("(min-width: 1020px)");

	return (
		<div className="w-auto 3xl:mx-auto max-w-screen-3xl min-h-[100vh] mx-4 my-8 ">
			<p className=" text-6xl px-4 z-50 font-bold mt-32">Launch anything.</p>
			{/* 
		<div className="inline-grid grid-cols-3 grid-rows-2 gap-8 w-9/10 mt-5 ">	</div>	 */}
			{isDesktop ? (
				<div className="flex flex-col lg:flex-row gap-8 mt-16 justify-center relative z-30">
					<div className="flex flex-col gap-8 w-96 ">
						<ScrollAnimation animateOnce animateIn="animate__fadeInLeft">
							<div className="flex flex-col items-center justify-between bg-white text-center min-h-96 rounded-3xl lg:min-h-[35rem] border-2 border-x-blue-500 border-y-sky-500 shadow-lg shadow-blue-500/20">
								<img
									className="w-[60%] mx-auto mt-10 mb-10"
									src={Dapp}
									alt="A logo of Ethereum"
								/>
								<div className="h-24 w-full px-8 rounded-b-3xl">
									<div className=" text-3xl font-bold text-left justify-center ">
										Dapp
									</div>
									<div className=" text-xl text-left justify-center ">
										Create a Web3 experience and make you users fall in love
										with it.
									</div>
								</div>
								<button className="hover:scale-105 duration-300 transition flex flex-row justify-center mb-10 items-center w-[80%] h-16 border-[1px] border-neutral-400 rounded-2xl text-neutral-400 text-2xl mt-10">
									Learn more <BsArrowRight className="ml-2" />
								</button>
							</div>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce
							offset={1000}
							delay={800}
							animateIn="animate__fadeInLeft"
						>
							<div className="flex flex-col items-center justify-between row-start-2 text-neutral-400 bg-white text-center  h-[32rem] rounded-3xl relative border-[1px] border-stone-600">
								<p className="text-4xl md:text-6xl leading-tight py-10">
									Not your project?
								</p>
								<Link to="/contact">
									<button className="hover:scale-105 duration-300 flex flex-col justify-center mb-10 items-center w-full px-6 text-neutral-400 text-4xl mt-10">
										Tell us about your vision <BsArrowRight className="ml-2" />
									</button>
								</Link>
							</div>
						</ScrollAnimation>
					</div>
					<div className="flex flex-col gap-8 w-96 ">
						<ScrollAnimation
							animateOnce
							delay={300}
							animateIn="animate__fadeInDown"
						>
							<div className="flex flex-col items-center justify-between bg-white text-center h-[38rem] rounded-3xl border-2 border-y-orange-400 border-x-orange-500 shadow-lg shadow-orange-500/20">
								<img
									className="w-[75%] mt-10 mx-auto"
									src={NFT}
									alt="A cool NFT"
								/>
								<div className="w-full px-8 mb-6 rounded-b-3xl">
									<div className=" text-3xl font-bold text-left justify-center ">
										NFT
									</div>
									<div className="text-xl text-left justify-center ">
										Launch a stunning NFT collection and give it endless
										utility.
									</div>
								</div>
								<button className="hover:scale-105 duration-300 flex flex-row justify-center mb-10 items-center w-[80%] h-16 border-[1px] border-neutral-400  rounded-2xl text-neutral-400 text-2xl">
									Learn more <BsArrowRight className="ml-2" />
								</button>
							</div>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce
							offset={1000}
							delay={300}
							animateIn="animate__fadeInUp"
						>
							<div className="flex flex-col items-center justify-between bg-white text-center lg:h-[29rem] h-96 rounded-3xl relative border-2 border-x-purple-500   border-y-violet-500 shadow-lg shadow-violet-500/20">
								<img
									className="w-[45%] mt-10 mx-auto mb-10"
									src={Gas}
									alt="Gas"
								/>
								<div className="w-full px-8 mb-6 rounded-b-3xl">
									<div className=" text-3xl font-bold text-left justify-center ">
										Gas optimalization
									</div>
									<div className="text-xl text-left justify-center ">
										Achieve lower blockchain fees.
									</div>
								</div>
								<button className="hover:scale-105 duration-300 flex flex-row justify-center mb-10 items-center w-[80%] h-16 border-[1px] border-neutral-400  rounded-2xl text-neutral-400 text-2xl">
									Learn more <BsArrowRight className="ml-2" />
								</button>
							</div>
						</ScrollAnimation>
					</div>
					<div className="flex flex-col gap-8 w-96 ">
						<ScrollAnimation
							animateOnce
							delay={600}
							animateIn="animate__fadeInRight"
						>
							<div className="flex flex-col items-center justify-between bg-white  text-center lg:h-[33rem] h-96 rounded-3xl relative border-2 border-x-lime-400 border-y-green-400 shadow-lg shadow-lime-500/20">
								<img
									className="w-[55%] mt-10 mx-auto mb-10"
									src={Token}
									alt="Money and coins floating"
								/>
								<div className="w-full px-8 mb-6 rounded-b-3xl">
									<div className=" text-3xl font-bold text-left justify-center ">
										Crypto Token
									</div>
									<div className="text-xl text-left justify-center ">
										Create your own cryprocurrency and take your company to the
										next level.
									</div>
								</div>
								<button className="hover:scale-105 duration-300 flex flex-row justify-center mb-10 items-center w-[80%] h-16 border-[1px] border-neutral-400  rounded-2xl text-neutral-400 text-2xl">
									Learn more <BsArrowRight className="ml-2" />
								</button>
							</div>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce
							delay={650}
							offset={1000}
							animateIn="animate__fadeInRight"
						>
							<div className="flex flex-col items-center justify-between bg-white text-center h-96 lg:h-[34rem] rounded-3xl relative border-2 border-x-pink-500 border-y-red-500 shadow-lg shadow-pink-500/20">
								<img
									className="w-[60%] mt-10 mx-auto mb-10"
									src={DeFi}
									alt="Wallet with Bitcoin in it"
								/>
								<div className="w-full px-8 mb-6 rounded-b-3xl">
									<div className=" text-3xl font-bold text-left justify-center ">
										DeFi
									</div>
									<div className="text-xl text-left justify-center ">
										Embark on the journey of creating the decentralized finance
										ecosystem.
									</div>
								</div>
								<button className="hover:scale-105 duration-300 flex flex-row justify-center mb-10 items-center w-[80%] h-16 border-[1px] border-neutral-400  rounded-2xl text-neutral-400 text-2xl">
									Learn more <BsArrowRight className="ml-2" />
								</button>
							</div>
						</ScrollAnimation>
					</div>
				</div>
			) : (
				<div className="flex flex-col mt-16 mx-auto w-[85%] xs:w-[95%] gap-8 justify-center items-center">
					<div className="flex flex-col gap-8 w-[95%] max-w-[25rem] md:max-w-[100%] md:w-96 ">
						<ScrollAnimation animateOnce offset={200} animateIn="animate__fadeInLeft">
							<div className="flex flex-col items-center justify-between bg-white text-center h-[28rem] rounded-3xl border-2 border-x-blue-500 border-y-sky-500 shadow-lg shadow-blue-500/20">
								<img
									className="w-[60%] mt-10 mx-auto mb-4"
									src={Dapp}
									alt="A logo of Ethereum"
								/>
								<div className="w-full px-8 rounded-b-3xl">
									<div className=" text-4xl font-bold text-center justify-center ">
										Dapp
									</div>
								</div>
								<button className="hover:scale-105 duration-300 transition flex flex-row justify-center mb-10 items-center w-[80%] h-16 border-[1px] border-neutral-400 rounded-2xl text-neutral-400 text-2xl mt-4">
									Learn more <BsArrowRight className="ml-2" />
								</button>
							</div>
						</ScrollAnimation>
						<ScrollAnimation animateOnce offset={200} animateIn="animate__fadeInRight">
							<div className="flex flex-col items-center justify-between bg-white text-center h-[30rem] rounded-3xl border-2 border-x-purple-500   border-y-violet-500 shadow-lg shadow-violet-500/20">
								<img
									className="w-[50%] mt-10 mx-auto mb-4"
									src={Gas}
									alt="Gas"
								/>
								<div className="w-full px-8 rounded-b-3xl">
									<div className=" text-2xl xs:text-4xl font-bold text-center justify-center ">
										Gas optimalization
									</div>
								</div>
								<button className="hover:scale-105 duration-300 transition flex flex-row justify-center mb-10 items-center w-[80%] h-16 border-[1px] border-neutral-400 rounded-2xl text-neutral-400 text-2xl mt-4">
									Learn more <BsArrowRight className="ml-2" />
								</button>
							</div>
						</ScrollAnimation>
					</div>

					<div className="flex flex-col gap-8 w-[95%] max-w-[25rem] md:max-w-[100%] md:w-96 ">
					<ScrollAnimation animateOnce offset={200} animateIn="animate__fadeInLeft">
						<div className="flex flex-col items-center justify-between bg-white text-center h-[28rem] rounded-3xl border-2 border-y-orange-400 border-x-orange-500 shadow-lg shadow-orange-500/20">
							<img
								className="w-[60%] mt-10 mx-auto mb-4"
								src={NFT}
								alt="NFT icon"
							/>
							<div className="w-full px-8 rounded-b-3xl">
								<div className=" text-4xl font-bold text-center justify-center ">
									NFT
								</div>
							</div>
							<button className="hover:scale-105 duration-300 transition flex flex-row justify-center mb-10 items-center w-[80%] h-16 border-[1px] border-neutral-400 rounded-2xl text-neutral-400 text-2xl mt-4">
								Learn more <BsArrowRight className="ml-2" />
							</button>
						</div>
						</ScrollAnimation>
						<ScrollAnimation animateOnce offset={200} animateIn="animate__fadeInRight">
						<div className="flex flex-col items-center justify-between bg-white text-center h-[28rem] rounded-3xl border-2 border-x-pink-500 border-y-red-500 shadow-lg shadow-pink-500/20">
							<img
								className="w-[60%] mt-10 mx-auto mb-4"
								src={DeFi}
								alt="A picture associated with DeFi"
							/>
							<div className="w-full px-8 rounded-b-3xl">
								<div className=" text-4xl font-bold text-center justify-center ">
									DeFi
								</div>
							</div>
							<button className="hover:scale-105 duration-300 transition flex flex-row justify-center mb-10 items-center w-[80%] h-16 border-[1px] border-neutral-400 rounded-2xl text-neutral-400 text-2xl mt-4">
								Learn more <BsArrowRight className="ml-2" />
							</button>
						</div>
						</ScrollAnimation>
					</div>
					<div className="flex flex-col gap-8 w-[95%] max-w-[25rem] md:max-w-[100%] md:w-96 ">
					<ScrollAnimation animateOnce offset={200} animateIn="animate__fadeInLeft">
						<div className="flex flex-col items-center justify-between bg-white text-center h-[28rem] rounded-3xl border-2 border-x-lime-400 border-y-green-400 shadow-lg shadow-lime-500/20">
							<img
								className="w-[60%] mt-10 mx-auto mb-4"
								src={Token}
								alt="A logo of Ethereum"
							/>
							<div className="w-full px-8 rounded-b-3xl">
								<div className=" text-4xl font-bold text-center justify-center ">
									Crypto Token
								</div>
							</div>
							<button className="hover:scale-105 duration-300 transition flex flex-row justify-center mb-10 items-center w-[80%] h-16 border-[1px] border-neutral-400 rounded-2xl text-neutral-400 text-2xl mt-4">
								Learn more <BsArrowRight className="ml-2" />
							</button>
						</div>
						</ScrollAnimation>
						<ScrollAnimation animateOnce offset={200} animateIn="animate__fadeInRight">
						<div className="flex flex-col items-center justify-between row-start-2 text-neutral-400 bg-white text-center  min-h-[25rem] rounded-3xl relative border-[1px] border-stone-600">
							<p className="text-4xl leading-tight py-10">Not your project?</p>
							<Link to="/contact">
								<button className="hover:scale-105 duration-300 flex flex-col justify-center mb-10 items-center w-full px-6 text-neutral-400 text-4xl mt-10">
									Tell us about your vision <BsArrowRight className="ml-2" />
								</button>
							</Link>
						</div>
						</ScrollAnimation>
					</div>
				</div>
			)}
		</div>
	);
};

export default Vision;
