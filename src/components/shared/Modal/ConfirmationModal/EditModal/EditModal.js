import React from "react";

const EditModal = ({ modalData, title,nameField, handleUpdateSubmit,closeModal }) => {
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                       onClick={closeModal}
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-success hover:btn-primary text-white btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold text-success text-center">
                        Update The {title}
                    </h3>
                    <form onSubmit={handleUpdateSubmit}>
                        <label
                            htmlFor="updateCategory"
                            className="text-primary"
                        >
                            {nameField}
                        </label>
                        <input
                            defaultValue={modalData}
                            type="text"
                            name="updateCategory"
                            className="input input-bordered input-success w-full text-primary mt-1"
                        />
                        <input
                           
                            type="submit"
                            value="Update"
                            className="btn btn-sm capitalize hover:bg-transparent hover:text-primary text-white btn-primary mt-2"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditModal;
