import React, { useState } from "react";

function Chat() {
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Alice', profile_pic: "/Screenshot_20221220_090248.png" },
        { id: 2, name: 'Bob', profile_pic: "/11c7a56403bb2371acfa14a797b14571.webp" },
        { id: 3, name: 'Charlie', profile_pic: "F6IUTJM.png" },
    ]);

    const [selectedContact, setSelectedContact] = useState(contacts[0]);
    const [messages, setMessages] = useState({
        1: [
            { text: "say gex", timestamp: "2024-06-12T12:00:00.000Z", fromMe: false },
            { text: "gex", timestamp: "2024-06-12T12:13:00.000Z", fromMe: true },
            { text: "bogos binted?", timestamp: "2024-06-12T12:14:00.000Z", fromMe: false },
            { text: "What do you mean?", timestamp: "2024-06-12T12:15:00.000Z", fromMe: true },
            { text: "Nevermind.", timestamp: "2024-06-12T12:16:00.000Z", fromMe: false }
        ],
        2: [
            { text: "hi Gex", timestamp: "2024-06-12T12:10:00.000Z", fromMe: false },
            { text: "Hello Bob, how's it going?", timestamp: "2024-06-12T12:12:00.000Z", fromMe: true },
            { text: "Not bad, thanks for asking.", timestamp: "2024-06-12T12:14:00.000Z", fromMe: false },
            { text: "Do you want to catch up later?", timestamp: "2024-06-12T12:15:00.000Z", fromMe: true },
            { text: "Sure, sounds good!", timestamp: "2024-06-12T12:16:00.000Z", fromMe: false }
        ],
        3: [
            { text: "Hey Charlie, long time no see!", timestamp: "2024-06-12T12:10:00.000Z", fromMe: true },
            { text: "Yeah, it's been a while. How are you?", timestamp: "2024-06-12T12:12:00.000Z", fromMe: false },
            { text: "I'm good, just been busy with work.", timestamp: "2024-06-12T12:13:00.000Z", fromMe: true },
            { text: "I hear you. We should catch up soon.", timestamp: "2024-06-12T12:14:00.000Z", fromMe: false },
            { text: "Definitely, let's plan something.", timestamp: "2024-06-12T12:15:00.000Z", fromMe: true }
        ]
    });

    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            const newMessage = {
                text: input,
                timestamp: new Date().toISOString(),
                fromMe: true
            };
            setMessages({
                ...messages,
                [selectedContact.id]: [
                    ...messages[selectedContact.id],
                    newMessage,
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
        <div style={{height: '94vh'}} className="flex flex-col font-sans">
            <div className="flex flex-1 overflow-hidden">
                <div className="w-3/12 border-r border-black overflow-y-scroll bg-white p-2.5">
                    <h2 className="font-bold flex justify-center p-3">Contacts</h2>
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            className={`p-4 cursor-pointer flex items-center font-semibold ${
                                contact.id === selectedContact.id ? 'bg-gray-200' : 'hover:bg-gray-100'
                            }`}
                            onClick={() => setSelectedContact(contact)}
                        >
                            <img
                                alt="User profile picture"
                                src={contact.profile_pic}
                                className="rounded-full w-10 h-10 mr-2"
                            />
                            {contact.name}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col flex-1">
                    <div className="p-2.5 border-b border-black bg-white flex items-center">
                        <img
                            alt="User profile"
                            src={selectedContact.profile_pic}
                            className="rounded-full w-10 h-10 mr-2"
                        />
                        <span className="font-bold">{selectedContact.name}</span>
                    </div>
                    <div className="flex-1 overflow-y-scroll p-2.5 bg-gradient-to-r from-green-100 to-green-400"
                         style={{
                             backgroundImage: "url('/white-abstract-background-with-hexagon-pattern-style-seamless-concept_57082-2426.png')",
                             backgroundSize: "600px auto",  // Set the size of the image
                             backgroundRepeat: "repeat"      // Enable repeating the background image
                         }}>
                        {messages[selectedContact.id].map((message, index) => (
                            <div
                                key={index}
                                className={`p-2 my-1.5 flex ${message.fromMe ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className="p-4 border rounded shadow bg-white">
                                    <span>{message.text}</span>
                                    <span className="text-sm text-gray-600 ml-2.5">
                                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex p-2.5 border-t border-black bg-white sticky bottom-0">
                        <input
                            className="flex-1 p-2.5 border border-black rounded shadow mr-2.5"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message"
                        />
                        <button className="p-2.5 px-5 border border-black rounded shadow cursor-pointer"
                                onClick={handleSendMessage}
                        >Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
