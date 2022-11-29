import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import SectionTitle from "../../../../../components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import {
    deleteCategoryByCategoryId,
    getAllCategories,
} from "../../../../../api/category";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../../../../components/shared/Modal/ConfirmationModal/ConfirmationModal";
import EditModal from "../../../../../components/shared/Modal/ConfirmationModal/EditModal/EditModal";
import { updateCategoryByCategoryId } from "./../../../../../api/category";
import Loader from './../../../../../components/shared/Loader/Loader';
import DisplayError from './../../../../DisplayError/DisplayError';

const AllCategories = () => {
    const [deleteCategory, setDeleteCategory] = useState(null);
    const [updateCategoryModalData, setUpdateCategoryModalData] =
        useState(null);

    const { isLoading, error, refetch, data } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const data = await getAllCategories();
            return data.data;
        },
    });

    const closeModal = () => {
        setDeleteCategory(null);
    };
    const closeEditModal = () => {
        setUpdateCategoryModalData(null);
    };

    const handleCategoryUpdateSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const categoryName = form.updateCategory.value;
        updateCategoryByCategoryId(updateCategoryModalData._id, {
            categoryName,
        })
            .then((data) => {
                if (data.data.modifiedCount > 0) {
                    toast.success("Product Updated Successfully");
                    setUpdateCategoryModalData(null);
                    refetch();
                } else {
                    toast.success("Product Not Modified!");
                }
            })
            .catch((error) => {
                console.log(error.message);
                toast.error(error.message);
            });
    };

    const handleDeleteCategory = (modalData) => {
        const { _id } = modalData;
        deleteCategoryByCategoryId(_id).then((data) => {
            toast.success("Product Delete Successfully");
            refetch();
            setDeleteCategory(null);
        });
    };

    if (error) {
        return <DisplayError />;
    }

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
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <>
                                {data?.map((category) => (
                                    <tr
                                        key={category._id}
                                        className="bg-secondary border-b text-primary"
                                    >
                                        <th
                                            scope="row"
                                            className="py-4 px-6 text-lg text-primary whitespace-nowrap "
                                        >
                                            {category.categoryName}
                                        </th>
                                        <td className="py-4 px-6">
                                            <label
                                                onClick={() =>
                                                    setUpdateCategoryModalData(
                                                        category
                                                    )
                                                }
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
                            </>
                        )}
                    </tbody>
                </table>
                {updateCategoryModalData && (
                    <EditModal
                        handleUpdateSubmit={handleCategoryUpdateSubmit}
                        title="Category"
                        nameField="Category Name"
                        modalData={updateCategoryModalData.categoryName}
                        closeModal={closeEditModal}
                    />
                )}
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
