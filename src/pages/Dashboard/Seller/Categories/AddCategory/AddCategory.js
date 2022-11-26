import React from "react";
import { useForm } from "react-hook-form";
import { createNewCategory } from './../../../../../api/category';
import { toast } from 'react-hot-toast';

const AddCategory = () => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const handleAddCategory = (formValues) => {
        console.log(formValues);
        createNewCategory(formValues).then((data) => {
            if (data.data.acknowledged) {
                toast.success(
                    `${formValues.categoryName} Category is Created!`
                );
                reset();
            }
        }).catch(error=>{
            console.log(error);
        });
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
                    {errors.categoryName && (
                        <p className="text-red-600">
                            {errors.categoryName?.message}
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
