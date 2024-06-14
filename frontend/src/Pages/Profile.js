import React from "react";
import Navbar from "../Components/Navbar";
import ProfileSettings from "../Components/ProfileSettings";

function Profile() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <ProfileSettings />
        </div>
    );
}

export default Profile;