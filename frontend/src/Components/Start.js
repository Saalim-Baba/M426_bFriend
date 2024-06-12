import React from 'react';
import { Link } from 'react-router-dom';

function Start(){
    return(
        <div className="bg-emerald-600 min-h-screen flex flex-col items-center justify-center text-center p-6">
            <div className="flex flex-wrap justify-center items-center md:space-x-6">
                {/* Left Image */}
                <img src="/11c7a56403bb2371acfa14a797b14571.webp" alt="Community" className="hidden xl:block h-96 w-72 object-cover m-3 rounded-2xl" />

                {/* Text Section */}
                <div className="max-w-md px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Explore the world of friendship, connect and share the fun!
                    </h1>
                    <p className="text-lg text-white mb-4">
                        Join a community of over 50,000 members who share your interests and hobbies!
                    </p>
                    <p className="text-lg text-white mb-4">
                        Dive into discussions and activities with more than 16 million shared experiences!
                    </p>
                    <p className="text-lg text-white mb-4">
                        If you want friends, it comes with a cost - just pure social fun (donations are welcome to keep us running! 🙏)
                    </p>
                    <Link to="/signin">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Join Now
                        </button>
                    </Link>
                </div>

                {/* Right Image - Hidden on small screens */}
                <img src="/11c7a56403bb2371acfa14a797b14571.webp" alt="Activities" className="w-72 h-96 object-cover m-3 rounded-2xl" />
            </div>
        </div>
    );
}

export default Start;