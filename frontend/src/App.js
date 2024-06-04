import React from 'react';
import './App.css';

export default function App() {
    return (
        <div className="flex items-center justify-center h-screen" >
            <div className="flex flex-col w-full max-w-md mx-auto bg-white rounded-lg shadow-lg" style={{ height: '75%' }}>
                <div>
                    Bild
                </div>
                <div className="flex flex-col justify-end h-full">

                    <div className="flex m-3 border">
                        <div className="mx-3">
                            <img
                                alt="retard user"
                                src="/11c7a56403bb2371acfa14a797b14571.webp"
                                className="rounded-full w-12"
                            />
                        </div>
                        <div>
                            I like to bombastic the rizz out of people #brainrot #fortnitehater
                        </div>
                    </div>

                    <div className="flex justify-between m-3 border">
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
    )
}
