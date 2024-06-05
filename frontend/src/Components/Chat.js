import React, { useState } from "react";

function Chat() {
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
    ]);

    const [selectedContact, setSelectedContact] = useState(contacts[0]);
    const [messages, setMessages] = useState({
        1: [],
        2: [],
        3: [],
    });
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages({
                ...messages,
                [selectedContact.id]: [
                    ...messages[selectedContact.id],
                    { text: input, timestamp: new Date() },
                ],
            });
            setInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
            e.preventDefault();  // Prevent the default action to avoid any side effects like form submission
        }
    };

    return (
        <div className="flex flex-col h-screen font-sans">
            <div className="flex flex-1 overflow-hidden">
                <div className="w-64 border-r border-black overflow-y-auto p-2.5">
                    <h2>Contacts</h2>
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            className={`p-2.5 cursor-pointer ${
                                contact.id === selectedContact.id ? 'bg-gray-300' : ''
                            }`}
                            onClick={() => setSelectedContact(contact)}
                        >
                            {contact.name}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col flex-1">
                    <div className="p-2.5 border-b border-black bg-gray-200 flex items-center">
                        <img
                            alt="User profile"
                            src="/Screenshot_20221220_090248.png"
                            className="rounded-full w-10 h-10 mr-2"
                        />
                        <span className="font-semibold">{selectedContact.name}</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2.5 bg-white">
                        {messages[selectedContact.id].map((message, index) => (
                            <div key={index} className="bg-gray-300 p-2.5 my-1.5 flex justify-between right-0">
                                <span>{message.text}</span>
                                <span className="text-sm text-gray-600 ml-2.5">{message.timestamp.toLocaleTimeString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex p-2.5 border-t border-black bg-gray-200 sticky bottom-0">
                <input
                    className="flex-1 p-2.5 border border-black mr-2.5"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message"
                />
                <button className="p-2.5 px-5 border border-black bg-gray-300 cursor-pointer"
                        onClick={handleSendMessage}
                >Send</button>
            </div>

        </div>
    );
}

export default Chat;
