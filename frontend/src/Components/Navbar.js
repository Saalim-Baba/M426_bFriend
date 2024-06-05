import React from 'react';
import { Link } from 'react-router-dom';


function paid(){
    let paid = false
    if (paid){
        return(
          <div className="flex items-center">
        <Link to="/message" className="text-white hover:text-gray-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 lg:mr-3">
            Message
        </Link>
          </div>
        )
    } else{
        return(
            <div className="flex items-center">
                <Link to="/pay" className="text-white hover:text-gray-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 lg:mr-3">
                    Pay
                </Link>
            </div>
        )
        }
}

function login(){
    let loggedIn = true
    if (loggedIn){
        return(
            <Link to="/" className="flex items-center">
                <img src="/11c7a56403bb2371acfa14a797b14571.webp" className="h-9 mr-3 sm:h-9 rounded-full" alt="user"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Welcome User</span>
            </Link>
        )
    } else{
        return(
            <Link to="/signin" className="flex items-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                Sign in
            </Link>
        )
    }
}

function Navbar() {
    return (
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <Link to="/">
                    <h1 className="text-white">
                        BeFriends
                    </h1>
                </Link>
                {paid()}
                {login()}
            </div>
        </nav>
    );
}

export default Navbar;