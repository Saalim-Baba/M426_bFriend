import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <Link to="/" className="flex items-center">
                    <img src="/11c7a56403bb2371acfa14a797b14571.webp" className="h-20 mr-3 sm:h-9 rounded-full" alt="user"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Welcome User</span>
                </Link>
                <div className="flex items-center lg:order-2">
                    <Link to="/message"
                          className="text-gray-600 hover:text-gray-100 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 lg:mr-3">Message</Link>
                    <Link to="/signin"
                          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Sign in</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;