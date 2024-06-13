import React from 'react';
import Navbar from "../Components/Navbar";
import Chat from "../Components/Chat";






function ChatPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Chat />
        </div>
    );
}

export default ChatPage;