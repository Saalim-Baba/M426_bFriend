import React from 'react';
import { Link } from 'react-router-dom';

function Cards(){
    return(
        <div className="flex items-center justify-center h-screen" >
            <div className="flex flex-col w-full max-w-md mx-auto bg-white rounded-lg shadow-lg relative" style={{ height: '75%' }}>
                <div className="absolute z-0">
                    <img
                        alt="retard photo"
                        src="/F6IUTJM.png"
                        className="h-auto rounded-lg"
                    />
                </div>
                <div className="flex flex-col justify-end h-full z-10">

                    <div className="flex m-3">
                        <div className="mx-3">
                            <img
                                alt="retard user"
                                src="/11c7a56403bb2371acfa14a797b14571.webp"
                                className="rounded-full w-20"
                            />
                        </div>
                        <div className="text-left text-sm">
                            I like to bombastic the rizz out of people #brainrot #fortnitehater #boobies
                        </div>
                    </div>

                    <div className="flex justify-between m-3">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-l">
                            Reject
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r">
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;