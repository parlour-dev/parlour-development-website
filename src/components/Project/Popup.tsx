import React from "react";

const Popup = (props: any) => {
	return (
		<div 
			className="left-0 top-0 right-0 bottom-0 fixed z-50 xl:flex xl:justify-center xl:flex-row"
			onClick={props.handleClose}
		>
			<div className="w-full h-full bg-gray-900 opacity-90"></div>
			
			<img
				className="w-8/12 top-0 bottom-10  mt-[10rem] mx-[16.6%] absolute rounded-md xl:h-[90vh] xl:w-auto xl:mt-[2.5rem] xl:mx-0"
				src={props.image}
				alt=" "
			/>
		</div>
	);
};

export default Popup;
