import React from "react";
import { useForm } from "react-hook-form";

const AddCategory = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const handleAddCategory = (data) => {
        console.log(data);
    };
    return (
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
                        htmlFor="productName"
                        className="block mb-2 text-sm font-medium text-primary"
                    >
                        Category Name
                    </label>
                    <input
                        {...register("category", {
                            required: "Category Name Is Required!",
                        })}
                        type="text"
                        placeholder="Enter Your Category Name"
                        className="input input-bordered input-success w-full text-primary"
                    />
                    {errors.category && (
                        <p className="text-red-600">
                            {errors.category?.message}
                        </p>
                    )}

                    <input
                        type="submit"
                        value="Add Category"
                        className="btn hover:bg-transparent capitalize hover:text-primary text-white btn-success  mt-3"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddCategory;