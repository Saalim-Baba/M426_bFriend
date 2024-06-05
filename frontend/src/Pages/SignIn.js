import React from "react";
import Navbar from "../Components/Navbar";
import SignIn from "../Components/SignIn";

function SignInPage() {
    return (
        <div className="home-section">
            <Navbar />
            <SignIn />
        </div>
    );
}

export default SignInPage;