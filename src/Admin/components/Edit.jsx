import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

function Edit() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        console.log('Edited form data:', Object.fromEntries(data));
        closeModal();
    };

    return (
        <>
            <div className="flex justify-center items-center">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={openModal}
                >
                    Edit
                </button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="relative bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                >
                    {/* Close icon */}
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 p-2 focus:outline-none"
                    >
                        <AiOutlineClose className="h-6 w-6 text-gray-700" />
                    </button>

                    <h2 className="text-xl font-semibold mb-4">Edit Information</h2>

                    {/* Edit form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full border rounded-md p-2 mt-1"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full border rounded-md p-2 mt-1"
                                required
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        </>
    );
}

export default Edit;
