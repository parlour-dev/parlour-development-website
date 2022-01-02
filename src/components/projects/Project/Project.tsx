import React, { useState } from "react";
// import Popup from './Popup';

const Project = (props: any) => {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    {/* {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
      // mainImageDirectory={props.mainImageDirectory}
    />} */}
    <div className="font-sans  w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
      <p className="font-bold pt-10 text-4xl">{props.title}</p>
      <div className="flex flex-col sm:flex-row mx-[10%] mt-10">
        <div className="mb-10">
          <div
            onClick={togglePopup}
            className="transition hover:scale-105 hover:drop-shadow-2xl duration-500 sm:w-[37rem] h-60 bg-green-500 m-1 sm:m-2 rounded-3xl"
          ></div>
          <div className="flex flex-row">
            <div className="transition hover:scale-105 hover:drop-shadow-2xl duration-500 w-[50%] sm:w-72 h-60 bg-green-500 m-1 sm:m-2 rounded-3xl"></div>
            <div className="transition hover:scale-105 hover:drop-shadow-2xl duration-500 w-[50%] sm:w-72 h-60 bg-green-500 m-1 sm:m-2 rounded-3xl"></div>
          </div>
        </div>
        <div className="px-4 text-left flex flex-col items-baseline">
          <p className="font-bold text-2xl">Opis</p>
          <p>{props.description}</p>
          <br />
          <p className="font-bold text-2xl">Co wykonaliśmy?</p>
          <p>{props.whatDidWeBuild}</p>

          <br />
          <p className="font-bold text-2xl">Technologie (Tech Stack)</p>
          <p>{props.techStack}</p>
          <br />
          <a href={props.codeLink}>
            <p className="font-bold text-2xl text-white bg-green-400 px-6 py-2 rounded-xl hover:scale-105 hover:drop-shadow-lg duration-300">
              Zobacz kod
            </p>
          </a>
          <br />
          <p className="font-bold text-2xl">Case study</p>
          <p>{props.caseStudy}</p>
          
          <br />
          <br />
        </div>
      </div>
    </div>gi
    </div>
  );
};

export default Project;