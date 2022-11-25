import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import SectionTitle from "../../../../../components/shared/SectionTitle/SectionTitle";

const AllCategories = () => {
    return (
        <section className="container my-6">
            <SectionTitle title="All Categories" />
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-3/4 mt-7">
                <table className="w-full text-sm text-left text-white">
                    <thead className="text-xs text-primary uppercase bg-green-300 dark:bg-green-300 dark:text-primary">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Category name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Edit
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-primary dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="py-4 px-6 text-lg text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="py-4 px-6">
                                <label
                                    htmlFor="my-modal-3"
                                    className="flex w-10 h-10 justify-center items-center rounded-lg border-2 border-success hover:bg-primary hover:border-primary hover:text-white  text-white bg-success transition ease-in-out delay-15 cursor-pointer"
                                >
                                    <AiFillEdit className="h-5 w-5" />
                                </label>
                            </td>
                            <td className="py-4 px-6">
                                <label htmlFor="my-modal-4" className="py-3 flex w-10 h-10 justify-center items-center rounded-lg border-2 border-success hover:bg-primary hover:border-primary hover:text-white  text-white bg-success transition ease-in-out delay-15 cursor-pointer">
                                    <AiFillDelete className="h-5 w-5" />
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box relative">
                        <label
                            htmlFor="my-modal-3"
                            className="btn btn-sm btn-success hover:btn-primary text-white btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <h3 className="text-lg font-bold text-success text-center">
                            Update The Category
                        </h3>
                        <form>
                            <label
                                htmlFor="updateCategory"
                                className="text-primary"
                            >
                                Category Name
                            </label>
                            <input
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
                <input
                    type="checkbox"
                    id="my-modal-4"
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box relative">
                        <label
                            htmlFor="my-modal-4"
                            className="btn btn-sm btn-success hover:btn-primary text-white btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <div className="p-6 text-center">
                            <svg
                                aria-hidden="true"
                                className="mx-auto mb-4 w-14 h-14 text-red-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure you want to delete this product?
                            </h3>
                            <button
                                data-modal-toggle="popup-modal"
                                type="button"
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            >
                                Yes, I'm sure
                            </button>
                            <button
                                data-modal-toggle="popup-modal"
                                type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllCategories;
