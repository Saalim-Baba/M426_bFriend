import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import StartPage from "./Pages/Start"
import Chat from './Pages/Chat';
import SignInPage from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";

export default function App() {
    // -------------TEST DATEN----------------
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLoginStatus = () => {
        setIsLoggedIn(!isLoggedIn);
    };
    // --------------TEST DATEN----------------
    return (
        <div className="App">
            {/*--------------TEST DATEN----------------*/}
            <button onClick={toggleLoginStatus}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
            {/*--------------TEST DATEN----------------*/}
            <Routes>
                <Route
                    path="/"
                    element={isLoggedIn ? <Home /> : <StartPage />}
                />
                <Route path="/message" element={<Chat />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />}/>
            </Routes>
        </div>
    );
}