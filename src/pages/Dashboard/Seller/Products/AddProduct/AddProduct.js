import React from "react";
import { useForm } from "react-hook-form";
import { createNewProduct } from "./../../../../../api/product";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../../../context/AuthProvider/AuthProvider";

const AddProduct = () => {
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgdb_key}`;
    const { user } = useAuth();
    console.log(user);
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm();

    const handleAddProduct = (formValues) => {
        const productImage = formValues.productImg[0];
        const formData = new FormData();
        formData.append("image", productImage);
        axios
            .post(url, formData)
            .then((imgData) => {
                const productImgUrl = imgData.data.data.url;

                const product = {
                    ...formValues,
                    sellerName: user?.displayName,
                    sellerEmail: user?.email,
                    productImg: productImgUrl,
                };
                createNewProduct(product).then((data) => {
                    if (data.data.acknowledged) {
                        toast.success(
                            `${formValues.productName} Product is Created!`
                        );
                        reset();
                    }
                }).catch(error=>{
                    console.log(error);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container py-10">
            <div className="bg-secondary p-6 rounded-lg">
                <h2 className="text-center font-semibold text-primary text-2xl">
                    Add New Product
                </h2>
                <form
                    onSubmit={handleSubmit(handleAddProduct)}
                    className="mt-5"
                >
                    <div className="grid grid-cols-2">
                        <div className="my-5">
                            <input
                                type="file"
                                {...register("productImg", {
                                    required: "product Img Is Required!",
                                })}
                                className="file-input file-input-bordered file-input-success w-full max-w-xs"
                            />
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6 grid-cols-2">
                        <div>
                            <label
                                htmlFor="productName"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Product Name
                            </label>
                            <input
                                {...register("productName", {
                                    required: "Product Title Is Required!",
                                })}
                                type="text"
                                placeholder="Enter Your Product Name"
                                className="input input-bordered input-success w-full text-primary"
                            />
                            {errors.productName && (
                                <p className="text-red-600">
                                    {errors.productName?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Price
                            </label>
                            <input
                                {...register("price", {
                                    required: "Product price Is Required!",
                                })}
                                type="text"
                                placeholder="Enter Your Product Price"
                                className="input input-bordered input-success w-full text-primary"
                            />
                            {errors.price && (
                                <p className="text-red-600">
                                    {errors.price?.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="originalPrice"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Original Price
                            </label>
                            <input
                                {...register("originalPrice", {
                                    required:
                                        "Product Original Price Is Required!",
                                })}
                                type="text"
                                placeholder="Enter Your Product Original Price"
                                className="input input-bordered input-success w-full text-primary"
                            />
                            {errors.originalPrice && (
                                <p className="text-red-600">
                                    {errors.originalPrice?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Phone
                            </label>
                            <input
                                {...register("phone", {
                                    required: "Phone Number Is Required!",
                                })}
                                type="tel"
                                placeholder="123-45-678"
                                className="input input-bordered input-success w-full text-primary"
                            />
                            {errors.phone && (
                                <p className="text-red-600">
                                    {errors.phone?.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="location"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Location
                            </label>
                            <input
                                {...register("location", {
                                    required: "Location Is Required!",
                                })}
                                type="text"
                                placeholder="Enter Your Location"
                                className="input input-bordered input-success w-full text-primary"
                            />
                            {errors.location && (
                                <p className="text-red-600">
                                    {errors.location?.message}
                                </p>
                            )}
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="date"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Year Of Purchase
                            </label>
                            <input
                                {...register("date", {
                                    required: "Purchase of Year Is Required!",
                                })}
                                type="date"
                                className="input input-bordered input-success w-full text-primary"
                            />
                            {errors.date && (
                                <p className="text-red-600">
                                    {errors.date?.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="productCategory"
                            className="block mb-2 text-sm font-medium text-primary"
                        >
                            Condition
                        </label>
                        <select
                            className="select select-success w-full max-w-xs text-primary text-base"
                            {...register("productCondition", {
                                required: "Product Condition Is Required!",
                            })}
                        >
                            <option
                                disabled
                                selected
                                className="text-primary text-base"
                            >
                                Pick Your Product Condition
                            </option>
                            <option
                                className="text-primary text-base"
                                value="excellent"
                            >
                                Excellent
                            </option>
                            <option
                                value="good"
                                className="text-primary text-base"
                            >
                                Good
                            </option>
                            <option
                                value="fair"
                                className="text-primary text-base"
                            >
                                Fair
                            </option>
                        </select>
                        {errors.productCondition && (
                            <p className="text-red-600">
                                {errors.productCondition?.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="productCategory"
                            className="block mb-2 text-sm font-medium text-primary"
                        >
                            Category
                        </label>
                        <select
                            className="select select-success w-full max-w-xs text-primary text-base"
                            {...register("productCategory", {
                                required: "Product Category Is Required!",
                            })}
                        >
                            <option disabled className="text-sm">
                                Pick Your Product Category
                            </option>
                            <option className="text-sm" value="laptop">
                                Laptop
                            </option>
                            <option value="desktop" className="text-sm">
                                Desktop
                            </option>
                        </select>
                        {errors.productCategory && (
                            <p className="text-red-600">
                                {errors.productCategory?.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-primary"
                        >
                            Product Description
                        </label>
                        <textarea
                            {...register("description", {
                                required: "Product Description Is Required!",
                            })}
                            className="textarea textarea-success w-full text-primary"
                            placeholder="Leave to product description"
                        ></textarea>
                        {errors.description && (
                            <p className="text-red-600">
                                {errors.description?.message}
                            </p>
                        )}
                    </div>

                    <input
                        type="submit"
                        value="Add Product"
                        className="btn hover:bg-transparent hover:text-primary text-white btn-primary  mt-2"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
