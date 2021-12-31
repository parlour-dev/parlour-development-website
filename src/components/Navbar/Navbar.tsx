import React from 'react';
import Logo from './parlour-dev-logo-web.png';

const Navbar = () => {
    return (
        <div className="w-auto h-32 sm:h-20 bg-white rounded-2xl mx-4 my-4 drop-shadow-sm flex items-center sm:justify-between justify-center flex-col sm:flex-row">
            <img className="h-10 sm:ml-6" src={Logo} alt="Parlour Development Logo" />
            <div className="text-sm sm:text-lg sm:mr-6 mt-6 sm:mt-0 font-sans flex justify-between">
                <span className="mx-1 sm:mx-4 sm:mr-6 font-sans font-bold px-4 sm:px-6 py-2 bg-green-400 rounded-xl text-white">Projekty</span>
                <span className="mx-1 sm:mx-4 sm:mr-6 font-sans font-bold px-4 sm:px-6 py-2 bg-gray-300 rounded-xl text-white">Cennik</span>
                <span className="mx-1 sm:mx-4 sm:mr-6 font-sans font-bold px-4 sm:px-6 py-2 bg-gray-300 rounded-xl text-white">Kontakt</span>
            </div>
        </div>
    )
}

export default Navbar
