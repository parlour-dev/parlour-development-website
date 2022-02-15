import React, { useRef } from "react";
import { Rerousel } from "rerousel";
import styled from "styled-components";
import Ex from "./img/ex.jpg";

const Carousel = () => {
	const ref = useRef(null);

	return (
		// hover:overflow-x-scroll
		<div className="mx-4 overflow-clip">
			<Rerousel itemRef={ref} interval={5000}>
				<div
					className="flex flex-col w-[100%] sm:w-3/12 h-64 mx-2 bg-white  my-1 drop-shadow-sm rounded-2xl"
					ref={ref}
				>
					<div className="bg-white w-[100%] z-50 rounded-b-2xl absolute bottom-0 text-left">
						<p className="mx-8 text-2xl sm:text-3xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r bg-radial-at-tl from-sky-400 via-green-400 to-teal-400">
							How to center a div?
						</p>
						<p className="mx-8 font-normal mb-2">15/02/2022</p>
					</div>
					<img
						src={Ex}
						alt="Example"
						className="w-[100%] rounded-t-2xl rounded-b-3xl z-10  overflow-hidden"
					/>
				</div>
				<div className="flex flex-col w-[100%] sm:w-3/12 h-64 mx-2 bg-white  my-1 drop-shadow-sm rounded-2xl">
					<div className="bg-white w-[100%] z-50 rounded-b-2xl absolute bottom-0 text-left">
						<p className="mx-8 text-2xl sm:text-3xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r bg-radial-at-tl from-sky-400 via-green-400 to-teal-400">
							How to center a div?
						</p>
						<p className="mx-8 font-normal mb-2">15/02/2022</p>
					</div>
					<img
						src={Ex}
						alt="Example"
						className="w-[100%] rounded-t-2xl rounded-b-3xl z-10  overflow-hidden"
					/>
				</div>
				<div className="flex flex-col w-[100%] sm:w-3/12 h-64 mx-2 bg-white  my-1 drop-shadow-sm rounded-2xl">
					<div className="bg-white w-[100%] z-50 rounded-b-2xl absolute bottom-0 text-left">
						<p className="mx-8 text-2xl sm:text-3xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r bg-radial-at-tl from-sky-400 via-green-400 to-teal-400">
							How to center a div?
						</p>
						<p className="mx-8 font-normal mb-2">15/02/2022</p>
					</div>
					<img
						src={Ex}
						alt="Example"
						className="w-[100%] rounded-t-2xl rounded-b-3xl z-10  overflow-hidden"
					/>
				</div>
				<div className="flex flex-col w-[100%] sm:w-3/12 h-64 mx-2 bg-white  my-1 drop-shadow-sm rounded-2xl">
					<div className="bg-white w-[100%] z-50 rounded-b-2xl absolute bottom-0 text-left">
						<p className="mx-8 text-2xl sm:text-3xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r bg-radial-at-tl from-sky-400 via-green-400 to-teal-400">
							How to center a div?
						</p>
						<p className="mx-8 font-normal mb-2">15/02/2022</p>
					</div>
					<img
						src={Ex}
						alt="Example"
						className="w-[100%] rounded-t-2xl rounded-b-3xl z-10  overflow-hidden"
					/>
				</div>
				<div className="flex flex-col w-[100%] sm:w-3/12 h-64 mx-2 bg-white  my-1 drop-shadow-sm rounded-2xl">
					<div className="bg-white w-[100%] z-50 rounded-b-2xl absolute bottom-0 text-left">
						<p className="mx-8 text-2xl sm:text-3xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r bg-radial-at-tl from-sky-400 via-green-400 to-teal-400">
							How to center a div?
						</p>
						<p className="mx-8 font-normal mb-2">15/02/2022</p>
					</div>
					<img
						src={Ex}
						alt="Example"
						className="w-[100%] rounded-t-2xl rounded-b-3xl z-10  overflow-hidden"
					/>
				</div>
			</Rerousel>
		</div>
	);
};

export default Carousel;
