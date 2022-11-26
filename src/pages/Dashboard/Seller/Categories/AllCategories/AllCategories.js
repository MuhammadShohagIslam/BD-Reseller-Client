import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import SectionTitle from "../../../../../components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import {
    deleteCategoryByCategoryId,
    getAllCategories,
} from "../../../../../api/category";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../../../../components/shared/ConfirmationModal/ConfirmationModal";

const AllCategories = () => {
    const [deleteCategory, setDeleteCategory] = useState(null);

    const { isLoading, error, refetch, data } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const data = await getAllCategories();
            console.log(data.data);
            return data.data;
        },
    });

    const closeModal = () => {
        setDeleteCategory(null);
    };

    const handleDeleteCategory = (modalData) => {
        const { _id } = modalData;
        deleteCategoryByCategoryId(_id).then((data) => {
            toast.success("Product Delete Successfully");
            refetch();
            setDeleteCategory(null);
        });
    };
    
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
                        {data?.map((category) => (
                            <tr
                                key={category._id}
                                className="bg-white border-b dark:bg-primary dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <th
                                    scope="row"
                                    className="py-4 px-6 text-lg text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {category.categoryName}
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
                                    <label
                                        onClick={() =>
                                            setDeleteCategory(category)
                                        }
                                        htmlFor="my-modal-4"
                                        className="py-3 flex w-10 h-10 justify-center items-center rounded-lg border-2 border-success hover:bg-primary hover:border-primary hover:text-white  text-white bg-success transition ease-in-out delay-15 cursor-pointer"
                                    >
                                        <AiFillDelete className="h-5 w-5" />
                                    </label>
                                </td>
                            </tr>
                        ))}
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
                {deleteCategory && (
                    <ConfirmationModal
                        title={`Are You Sure You Want To Delete ${deleteCategory?.categoryName} Category`}
                        successAction={handleDeleteCategory}
                        successButtonName="Yes, I Want"
                        closeModal={closeModal}
                        modalData={deleteCategory}
                    />
                )}
            </div>
        </section>
    );
};

export default AllCategories;
