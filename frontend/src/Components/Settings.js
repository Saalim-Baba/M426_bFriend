import React from 'react';

function Settings(){
    return(
        <div className="mb-[-6rem]">
            <h1 className="mt-10 text-2xl">Settings</h1>
            <div className="flex flex-col h-screen w-60 ml-10 py-20 items-start">
                <div className="border w-64">
                    <h1 className="p-10">Privacy Settings</h1>
                </div>
                <div className="border w-64">
                    <h1 className="p-10">Notification Settings</h1>
                </div>
                <div className="border w-64">
                    <h1 className="p-10">User Settings</h1>
                </div>
                <div className="border w-64">
                    <h1 className="p-10">Theme</h1>
                </div>
            </div>

        </div>
    )}
export default Settings;