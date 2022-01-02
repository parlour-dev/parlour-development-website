import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './parlour-dev-logo-web.png';

const Navbar = () => {
    return (
        <div className="w-auto h-32 sm:h-20 bg-white rounded-2xl mx-4 my-4 drop-shadow-sm flex items-center sm:justify-between justify-center flex-col sm:flex-row">
            <Link to="/"><img className="h-10 sm:ml-6" src={Logo} alt="Parlour Development Logo" /></Link>
            <div className="text-sm sm:text-lg sm:mr-6 mt-6 sm:mt-0 font-sans flex justify-between">
                <Link to="projects"><div className="mx-1 sm:mx-4 sm:mr-6 font-sans font-bold px-4 sm:px-6 py-2 bg-green-400 rounded-xl text-white hover:scale-105 hover:drop-shadow-lg duration-300">Projekty</div></Link>
                <div className="mx-1 sm:mx-4 sm:mr-6 font-sans font-bold px-4 sm:px-6 py-2 bg-gray-300 rounded-xl text-white hover:scale-105 hover:drop-shadow-lg duration-300">Cennik</div>
                <div className="mx-1 sm:mx-4 sm:mr-6 font-sans font-bold px-4 sm:px-6 py-2 bg-gray-300 rounded-xl text-white hover:scale-105 hover:drop-shadow-lg duration-300">Kontakt</div>
            </div>
        </div>
    )
}

export default Navbar