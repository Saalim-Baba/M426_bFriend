import React, { useState } from 'react';

function SettingsPage() {
    const [activeSetting, setActiveSetting] = useState(null);

    const renderSettingsContent = (category) => {
        switch (category) {
            case 'notification':
                return (
                    <div className="p-6 mt-4 bg-white shadow-md rounded-lg border border-gray-200 items-start flex">
                        <div>
                            <h1 className="font-bold">Notifications</h1>
                            <div className="mt-10">
                                <form>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input className="sr-only peer" value="" type="checkbox" />
                                        <div
                                            className="peer rounded-full outline-none duration-100 after:duration-500 w-28 h-14 bg-green-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-500  after:content-['No'] after:absolute after:outline-none after:rounded-full after:h-12 after:w-12 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['Yes'] peer-checked:after:border-white">
                                        </div>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                );
            case 'user':
                return (
                    <div className="flex flex-col items-start p-6 mt-4 bg-white shadow-md rounded-lg border border-gray-200">
                        <button onClick={() => setActiveSetting("new_password")} className=" w-56 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150">
                            <div className="bg-white shadow hover:shadow-lg rounded-lg p-2 border border-gray-200">
                                <h1 className="text-m font-semibold text-gray-800">Change Password</h1>
                            </div>
                        </button>
                        <br />
                        <button onClick={() => setActiveSetting("theme")} className="w-56 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150">
                            <div className="bg-white shadow hover:shadow-lg rounded-lg p-2 border border-gray-200">
                                <h1 className="text-m font-semibold text-gray-800">Theme</h1>
                            </div>
                        </button>
                        <br />
                        <button onClick={() => setActiveSetting("personal_info")} className="w-56 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150">
                            <div className="bg-white shadow hover:shadow-lg rounded-lg p-2 border border-gray-200">
                                <h1 className="text-m font-semibold text-gray-800">Personal Information</h1>
                            </div>
                        </button>
                        <br />
                        <button onClick={() => setActiveSetting("subscription")} className="w-56 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150">
                            <div className="bg-white-500 shadow hover:shadow-lg rounded-lg p-2 border border-gray-200">
                                <h1 className="text-m font-semibold text-gray-800">Subscription</h1>
                            </div>
                        </button>
                        <button className="w-56 bg-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-red-600 transition ease-in-out duration-150">
                            Delete Account
                        </button>
                    </div>
                );
            case "new_password":
                return (
                    <div className="p-6 mt-4 bg-white shadow-md rounded-lg border border-gray-200">
                        <div className="flex flex-col items-center justify-center ">
                            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">New Password</h2>
                                <form className="flex flex-col">
                                    <input type="password"
                                        className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                        placeholder="Old Password" />
                                    <input type="password"
                                        className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                        placeholder="New Password" />
                                    <button type="submit"
                                        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Change Password
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                );
            case "theme":
                return (
                    <div className="p-6 mt-4 bg-white shadow-md rounded-lg border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Theme</h2>
                        <div className="flex flex-col">
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-2 hover:bg-blue-600 transition ease-in-out duration-150">
                                Light Theme
                            </button>
                            <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-md mt-2 hover:bg-gray-900 transition ease-in-out duration-150">
                                Dark Theme
                            </button>
                            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md mt-2 hover:bg-green-600 transition ease-in-out duration-150">
                                Green Theme
                            </button>
                            
                        </div>
                    </div>
                );
            case "personal_info":
                return (
                    <div className="p-6 mt-4 bg-white shadow-md rounded-lg border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h2>
                        <div className="flex flex-col">
                            <div className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4">
                                <strong>Name:</strong> John Doe
                            </div>
                            <div className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4">
                                <strong>Email:</strong> john.doe@example.com
                            </div>
                            <div className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4">
                                <strong>Phone:</strong> +1234567890
                            </div>
                        </div>
                    </div>
                );
                case "subscription":
                    return (
                        <div className="p-6 mt-4 bg-white shadow-md rounded-lg border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscription Information</h2>
                        <div className="flex flex-col mb-4">
                            <div className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4">
                                <strong>Plan:</strong> Active
                            </div>
                            <div className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4">
                                <strong>Renewal Date:</strong> 2024-07-01
                            </div>
                            <div className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4">
                                <strong>Status:</strong> Pending
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Currency</h3>
                        <select className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150">
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                        <br/>
                        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-red-600 transition ease-in-out duration-150">
                            Cancel Subscription
                        </button>
                    </div>
                    );
            default:
                return <div className="p-6 mt-4 bg-white shadow-md rounded-lg border border-gray-200">Select a category from above to view settings.</div>;
        }
        
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-12">Settings</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button onClick={() => setActiveSetting('user')} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150">
                        <div className="bg-white shadow hover:shadow-lg rounded-lg p-6 border border-gray-200">
                            <h1 className="text-xl font-semibold text-gray-800">User Settings</h1>
                        </div>
                    </button>
                    <button onClick={() => setActiveSetting('notification')} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150">
                        <div className="bg-white shadow hover:shadow-lg rounded-lg p-6 border border-gray-200">
                            <h1 className="text-xl font-semibold text-gray-800">Notification Settings</h1>
                        </div>
                    </button>
                </div>
                {renderSettingsContent(activeSetting)}
            </div>
        </div>
    );
}

export default SettingsPage;
