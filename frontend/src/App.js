import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Chat from './Pages/Chat';

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/message" element={<Chat />} />
            </Routes>
        </div>
    );
}