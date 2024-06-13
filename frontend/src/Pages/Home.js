import React from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards"
import Start from "../Components/Start"

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Cards />
        </div>
    );
}

export default Home;