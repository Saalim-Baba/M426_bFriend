import React from "react";
import Navbar from "../Components/Navbar";
import SignIn from "../Components/SignIn";

function SignInPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <SignIn />
        </div>
    );
}

export default SignInPage;