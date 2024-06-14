import React from 'react';

function Cards(){
    return(
        <div className="flex items-center justify-center flex-1" >
            <div className="flex flex-col w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative z-0">
                    <img
                        alt="Nature photo"
                        src="/F6IUTJM.png"
                        className="w-full h-auto"
                    />
                </div>
                <div className="flex flex-col justify-end">
                    <div className="flex m-3">
                        <div className="mx-3">
                            <img
                                alt="User avatar"
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
