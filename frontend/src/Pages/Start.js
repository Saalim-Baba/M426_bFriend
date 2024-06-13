import React from "react";
import Navbar from "../Components/Navbar";
import Start from "../Components/Start"

function StartPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Start />
        </div>
    );
}

export default StartPage;