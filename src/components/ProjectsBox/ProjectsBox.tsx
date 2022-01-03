import React from "react";

const ProjectsBox = (props: any) => {
	return (
		<div className="w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
			<p className="text-3xl sm:text-5xl pt-20 font-sans font-bold">
				Nasze projekty
			</p>
			<div className="w-auto mx-[20%] sm:mx-48 mt-20 flex flex-row justify-center flex-wrap-reverse">
				<div className="flex flex-wrap flex-col">
					<div className="transition hover:scale-105 hover:drop-shadow-2xl duration-500 w-64 sm:w-[37rem] h-60 m-2 rounded-3xl relative overflow-hidden drop-shadow">
						<img src={props.Image1} alt=" " className="absolute" />
					</div>
					<div className="flex flex-wrap flex-row">
						<div className="transition hover:scale-105 hover:drop-shadow-2xl duration-500 w-64 sm:w-72 h-60 bg-green-400 m-2 rounded-3xl"></div>
						<div className="transition hover:scale-105 hover:drop-shadow-2xl duration-500 w-64 sm:w-72 h-60 bg-green-400 m-2 rounded-3xl"></div>
					</div>
				</div>

				{/* <div className="flex flex-wrap flex-row"> */}
				<div className="flex flex-col sm:flex-row">
					<div className="flex flex-col">
						<div className="transition hover:scale-105 hover:drop-shadow-2xl duration-500 w-64 sm:w-72 h-60 bg-green-400 m-2 rounded-3xl"></div>
						<div className="transition hover:scale-105 hover:drop-shadow-2xl duration-500 w-64 sm:w-72 h-60 bg-green-400 m-2 rounded-3xl"></div>
					</div>
					<div className="transition hover:scale-105 hover:drop-shadow-2xl duration-500 w-64 sm:w-72 h-[31rem] bg-green-400 m-2 rounded-3xl"></div>
				</div>

				{/* </div> */}
			</div>
		</div>
	);
};

export default ProjectsBox;
