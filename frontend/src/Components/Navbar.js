import React from 'react';
import { Link } from 'react-router-dom';


function paid(){
    let paid = true
    if (paid){
        return(
          <div className="flex items-center justify-center">
        <Link to="/message" className="text-white justify-center items-center hover:text-gray-400 font-medium rounded-lg text-sm">
            Message
        </Link>
          </div>
        )
    } else{
        return(
            <div className="flex items-center justify-center">
                <Link to="/pay" className="text-white justify-center items-center hover:text-gray-400 font-medium rounded-lg text-sm px-4">
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
            <Link to="/" className="flex items-end">
                <img src="/11c7a56403bb2371acfa14a797b14571.webp" className="h-9 mr-3 sm:h-9 rounded-full" alt="user"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">User</span>
            </Link>
        )
    } else{
        return(
            <Link to="/signin" className="flex items-end text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                Sign in
            </Link>
        )
    }
}

function Navbar() {
    return (
        <nav className="bg-black border-gray-200 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <div className="flex flex-wrap justify-center items-center">
                    <label>
                        <button id="dropdownButton" data-dropdown-id="dropdown" className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center" type="button">
                            <input className="hidden peer" type="checkbox"/>
                            <div
                              className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
                            ></div>
                            <div
                              className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"
                            ></div>
                            <div
                              className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
                            ></div>
                        </button>
                    </label>
                    <Link to="/">
                        <h1 className="text-white hover:text-gray-400 hover:scale-95">
                            BFriends
                        </h1>
                    </Link>
                </div>
                {paid()}
                {login()}
            </div>
        </nav>
    );
}

export default Navbar;