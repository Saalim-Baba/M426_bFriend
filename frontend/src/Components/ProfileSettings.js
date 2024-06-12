import React, { useState } from 'react';

const ProfileSettings = () => {
    const [formData, setFormData] = useState({
        name: 'hihi',
        about: 'Im gay',
        images: ["/original-177e8d255f0b6e0b259b6d662be56bab3379d651768a940dc8ef300dec0b41cf.jpg", "/11c7a56403bb2371acfa14a797b14571.webp"],
        imagesChange: ["/addImg.png", "/deleteImg.png"],
        hobbies: ["gooning", "backshotting friends", "peanut butter + dog"]
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleAddImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({
                ...formData,
                images: [...formData.images, reader.result]
            });
        };
        reader.readAsDataURL(file);
    };

    const handleClickAddImage = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg m-10">
            <form>
                <h2 className="text-lg font-bold mb-2 text-left">Profile Pictures</h2>
                <div className="flex flex-wrap m-2">
                    {formData.images.map((image, index) => (
                        <div key={index} className="relative m-1" style={{ width: 'calc(33.3333% - 8px)', height: '200px' }}>
                            <img
                                src={image}
                                className="rounded-lg border w-full h-full object-cover"
                            />
                            <img
                                src={formData.imagesChange[1]}
                                className="rounded-full border absolute top-1 right-1 w-8 h-8 cursor-pointer"
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
                    rows="4"
                    value={formData.about}
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-left m-2"
                ></textarea>
                <h2 className="text-lg font-bold mb-2 text-left">{formData.name}'s Hobbies</h2>
                <div className="flex flex-wrap m-2">
                    {formData.hobbies.map((element, index) => (
                        <div key={index} className="px-4 py-2 bg-gray-100 border border-gray-300 rounded shadow cursor-pointer m-1 text-sm">
                            {element}
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default ProfileSettings;
