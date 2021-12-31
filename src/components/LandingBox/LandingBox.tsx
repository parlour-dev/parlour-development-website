import React from 'react';
import Blur from './img/blur.png';
import Leaf from './img/leaf.png';
import Leaf2 from './img/leaf2.png';
import Chat from './img/chat.png';
import someComponent from './img/someComponent.png';
import Cursor from './img/cursor.png';
import 'animate.css';

const LandingBox = () => {
    return (
        <div className="w-auto min-h-[70vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm flex items-center justify-center flex-col align-middle">
            <img className="z-0 select-none w-10/12 h-72 sm:h-[80vh] my-2 mx-auto blur-3xl scale-y-75 opacity-40" src={Blur} alt="Decoration image" />
            <img className="opacity-30 md:opacity-100 z-10 absolute w-16 sm:w-40 left-4 top-2 rotate-90" src={Leaf2} alt="Another Leaf" />
            <img className="opacity-30 md:opacity-100 z-10 absolute w-16 sm:w-40 left-6 bottom-2" src={Leaf} alt="Leaf" />
            <img className="opacity-30 md:opacity-100 z-10 absolute w-16 sm:w-40 right-[5%] bottom-10 -rotate-12" src={Chat} alt="Chat icon" />
            <img className="opacity-30 md:opacity-100 z-10 absolute w-16 sm:w-64 right-[15%] top-10 rotate-12" src={someComponent} alt="Component icon" />
            <img className="opacity-30 md:opacity-100 z-10 absolute w-16 sm:w-32 right-[30%] top-[60%]" src={Cursor} alt="Cursor icon" />
            <span className='z-50 absolute text-3xl sm:text-5xl md:text-7xl font-black mx-auto font-sans animate__animated animate__zoomIn'>Zbudujemy Twoją wymarzoną aplikację</span>
            <span className='z-50 absolute text-md sm:text-xl mt-40 font-black mx-auto font-sans animate__animated animate__zoomIn animate__bounce animate__delay-1s'>I zrobimy to dobrze.</span>
        </div>
    )
}

export default LandingBox
