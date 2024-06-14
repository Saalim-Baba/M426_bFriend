import React, { useState } from 'react';

const ProfileSettings = () => {
    const [formData, setFormData] = useState({
        name: 'Terry Davis',
        about: 'im gay',
        images: [
            "/original-177e8d255f0b6e0b259b6d662be56bab3379d651768a940dc8ef300dec0b41cf.jpg",
            "/11c7a56403bb2371acfa14a797b14571.webp"
        ],
        imagesChange: ["/addImg.png", "/deleteImg.png"],
        hobbies: ["molesting", "peanut butter + dog", "leandro gay"]
    });
    const [currentHobby, setCurrentHobby] = useState("");
    const [hobbyIndex, setHobbyIndex] = useState(-1);
    const [isPopupEditOpen, setPopupEditOpen] = useState(false);
    const [isPopupAddOpen, setPopupAddOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({ ...formData, images: [...formData.images, reader.result] });
        };
        reader.readAsDataURL(file);
    };

    const handleClickAddImage = () => {
        document.getElementById('fileInput').click();
    };

    const toggleEditPopup = (hobby = "", index = -1) => {
        setCurrentHobby(hobby);
        setHobbyIndex(index);
        setPopupEditOpen(!isPopupEditOpen);
    };

    const toggleAddPopup = () => {
        setPopupAddOpen(!isPopupAddOpen);
        setCurrentHobby(""); // Reset current hobby on open/close add popup
    };

    const handleAddHobby = () => {
        if (currentHobby) {
            setFormData({
                ...formData,
                hobbies: [...formData.hobbies, currentHobby]
            });
            toggleAddPopup();
        }
    };

    const handleEditHobby = () => {
        if (currentHobby && hobbyIndex >= 0) {
            let updatedHobbies = [...formData.hobbies];
            updatedHobbies[hobbyIndex] = currentHobby;
            setFormData({ ...formData, hobbies: updatedHobbies });
            toggleEditPopup();
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg m-10 flex-1">
            <form>
                <h2 className="text-lg font-bold mb-2 text-left">Profile Pictures</h2>
                <div className="flex flex-wrap m-2">
                    {formData.images.map((image, index) => (
                        <div key={index} className="relative m-1"
                         style={{
                            width: index === 0 ? '100%' : 'calc(33.3333% - 8px)',
                            height: index === 0 ? '600px' : '200px'
                        }}>
                            <img
                                src={image}
                                className="rounded-lg border w-full h-full object-cover"
                            />
                            <img
                                src={formData.imagesChange[1]}
                                className="rounded-full border-2 border-gray-400 absolute top-1 right-1 w-8 h-8 cursor-pointer"
                                onClick={() => {
                                    const newImages = formData.images.filter((_, i) => i !== index);
                                    setFormData({ ...formData, images: newImages });
                                }}
                            />
                        </div>
                    ))}
                    <img
                        src={formData.imagesChange[0]}
                        style={{ height: '200px', width: 'calc(33.3333% - 8px)', cursor: 'pointer' }}
                        className="rounded-lg border m-1"
                        onClick={handleClickAddImage}
                    />
                </div>
                <input type='file' id='fileInput' style={{ display: 'none' }} onChange={handleAddImage} />
                <label htmlFor="about" className="block text-lg font-bold mb-2 text-left">About {formData.name}</label>
                <textarea
                    id="about"
                    name="about"
                    rows="2"
                    value={formData.about}
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-left m-2"
                ></textarea>
                <h2 className="text-lg font-bold mb-2 text-left">{formData.name}'s Hobbies</h2>
                <div className="flex flex-wrap m-2">
                    {formData.hobbies.map((element, index) => (
                        <div key={index}
                             className="px-4 py-2 bg-gray-100 border border-gray-300 rounded shadow cursor-pointer m-1 text-sm"
                             onClick={() => toggleEditPopup(element, index)}>
                            {element}
                        </div>
                    ))}
                    <div
                        className="px-4 py-2 bg-blue-400 text-white font-bold border border-gray-300 rounded shadow cursor-pointer m-1 text-sm hover:bg-blue-500"
                        onClick={toggleAddPopup}
                    >
                        &#10010;
                    </div>
                </div>
                {/* Popup edit Dialog */}
                {isPopupEditOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-5 rounded-lg shadow-lg w-96">
                            <h4 className="text-lg font-bold mb-2">Edit Hobby</h4>
                            <div className="flex items-center">
                                <input type="text"
                                       className="flex-1 py-2 px-3 border border-gray-400 rounded-l-lg focus:outline-none h-10"
                                       value={currentHobby}
                                       onChange={(e) => setCurrentHobby(e.target.value)}
                                       autoFocus />
                                <button onClick={handleEditHobby}
                                        className="bg-blue-400 hover:bg-blue-500 text-white rounded-r-lg py-2 px-3 font-bold h-10">
                                    Edit
                                </button>
                                <button onClick={() => toggleEditPopup()}
                                        className="ml-2 bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 px-3 font-bold h-10">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {isPopupAddOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-5 rounded-lg shadow-lg w-96">
                            <h4 className="text-lg font-bold mb-2">Add Hobby</h4>
                            <div className="flex items-center">
                                <input type="text"
                                       className="flex-1 py-2 px-3 border border-gray-400 rounded-l-lg focus:outline-none h-10"
                                       placeholder="Add hobby"
                                       value={currentHobby}
                                       onChange={(e) => setCurrentHobby(e.target.value)}
                                       autoFocus />
                                <button onClick={handleAddHobby}
                                        className="bg-blue-400 hover:bg-blue-500 text-white rounded-r-lg py-2 px-3 font-bold h-10">
                                    Add
                                </button>
                                <button onClick={toggleAddPopup}
                                        className="ml-2 bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 px-3 font-bold h-10">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ProfileSettings;
