import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createNewCategory } from "./../../../../../api/category";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AddCategory = () => {
    const [loading, setLoading] = useState(false);
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const handleAddCategory = (formValues) => {
        const categoryImage = formValues.categoryImg[0];
        const formData = new FormData();
        formData.append("image", categoryImage);

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgdb_key}`;
        setLoading(true);
        axios.post(url, formData).then((imgData) => {
            const categoryImgUrl = imgData.data.data.url;
            const category = {
                image: categoryImgUrl,
                categoryName: formValues.categoryName,
            };
            createNewCategory(category)
                .then((data) => {
                    if (data.data.acknowledged) {
                        toast.success(
                            `${formValues.categoryName} Category is Created!`
                        );
                        reset();
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    setLoading(false);
                    console.log(error);
                });
        });
    };
    return (
        <>
            <Helmet>
                <title>Add Category</title>
            </Helmet>
            <div className="container py-10">
                <div className="bg-secondary p-6 rounded-lg w-3/4">
                    <h2 className="text-center font-semibold text-primary text-2xl">
                        Add New Category
                    </h2>
                    <form
                        onSubmit={handleSubmit(handleAddCategory)}
                        className="mt-5"
                    >
                        <label
                            htmlFor="categoryName"
                            className="block mb-2 text-sm font-medium text-primary"
                        >
                            Category Name
                        </label>
                        <input
                            {...register("categoryName", {
                                required: "Category Name Is Required!",
                            })}
                            type="text"
                            placeholder="Enter Your Category Name"
                            className="input input-bordered input-success w-full text-primary"
                        />
                        <input
                            {...register("categoryImg", {
                                required: "Category Img Is Required!",
                            })}
                            type="file"
                            className="file-input mt-4 file-input-bordered file-input-success w-full max-w-xs"
                        />
                        {errors.categoryImg && (
                            <p className="text-red-600">
                                {errors.categoryImg?.message}
                            </p>
                        )}

                        <button
                            disabled={loading}
                            type="submit"
                            className="btn block hover:bg-transparent hover:text-primary text-white btn-primary disabled:opacity-75 disabled:border-2 disabled:border-primary disabled:text-primary mt-2"
                        >
                            {loading ? "Loading" : "Add Category"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddCategory;
