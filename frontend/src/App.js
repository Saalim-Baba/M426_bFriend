import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Chat from './Pages/Chat';
import SignInPage from "./Pages/SignIn";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/message" element={<Chat />} />
                <Route path="/signin" element={<SignInPage />} />
            </Routes>
        </div>
    );
}