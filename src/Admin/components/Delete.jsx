import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai'; // Importing a close icon from react-icons

function Delete() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <>
            <div className="flex justify-center items-center">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={openModal}
                >
                    Delete
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

                    <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
                    <p className="mb-6 text-gray-600">
                        Are you sure you want to delete this item? This action cannot be undone.
                    </p>

                    <div className="flex justify-end gap-4">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Close
                        </button>

                        {/* Delete button */}
                        <button
                            onClick={() => {
                                // Add your delete logic here
                                closeModal();
                            }}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </Modal>
            </div>
        </>
    );
}

export default Delete;
