import React from "react";
import { useForm } from "react-hook-form";
import { updateProductByProductId } from "./../../../../../api/product";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../../../../api/category";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const product = useLoaderData();
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const {
        _id,
        date,
        location,
        productName,
        productImg,
        description,
        productCondition,
        productCategory,
        originalPrice,
        price,
        phone,
    } = product;

    const { data: allCategory = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const data = await getAllCategories();
            return data.data;
        },
    });

    const handleUpdateProduct = (formValues) => {
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgdb_key}`;
        const productImage = formValues.productImg[0];
        const formData = new FormData();
        formData.append("image", productImage);
        const offerProductPercentage = Math.round(
            ((formValues.originalPrice - formValues.price) /
                formValues.originalPrice) *
                100
        );
        if (formValues.productImg.length > 0 && productImage) {
            axios
                .post(url, formData)
                .then((imgData) => {
                    const productImgUrl = imgData.data.data.url;
                    const product = {
                        ...formValues,
                        saveAmount:offerProductPercentage,
                        productImg: productImgUrl,
                    };
                    updateProductByProductId(_id, product)
                        .then((data) => {
                            if (data.data.modifiedCount > 0) {
                                toast.success(
                                    `${formValues.productName} Product is Updated!`
                                );
                                navigate("/dashboard/seller/allProducts");
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log(offerProductPercentage)
            const modifiedProduct = {
                ...formValues,
                saveAmount:offerProductPercentage,
                productImg,
            };
            console.log(modifiedProduct)
            updateProductByProductId(_id, modifiedProduct)
                .then((data) => {
                    if (data.data.modifiedCount > 0) {
                        toast.success(
                            `${formValues.productName} Product is Updated!`
                        );
                      
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div className="container py-10">
            <div className="bg-secondary p-6 rounded-lg">
                <h2 className="text-center font-semibold text-primary text-2xl">
                    Update Product
                </h2>
                <form
                    onSubmit={handleSubmit(handleUpdateProduct)}
                    className="mt-5"
                >
                    <div className="grid grid-cols-2">
                        <div className="my-5 flex items-center">
                            <input
                                type="file"
                                {...register("productImg", {
                                    required: false,
                                })}
                                className="file-input file-input-bordered file-input-success w-full max-w-xs"
                            />
                        </div>
                        <div className="my-5">
                            <img
                                className="w-40 h-32"
                                src={productImg}
                                alt={productName}
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
                                defaultValue={productName}
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
                                defaultValue={price}
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
                                defaultValue={originalPrice}
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
                                defaultValue={phone}
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
                                defaultValue={location}
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
                                defaultValue={date}
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
                            defaultValue={productCondition}
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
                            defaultValue={productCategory}
                        >
                            {productCategory && (
                                <option
                                    value={productCategory}
                                    className="text-sm"
                                >
                                    {productCategory}
                                </option>
                            )}

                            {allCategory
                                .filter(
                                    (category) =>
                                        category.categoryName !==
                                        productCategory
                                )
                                .map((category) => (
                                    <option
                                        key={category._id}
                                        value={category.categoryName}
                                        className="text-sm"
                                    >
                                        {category.categoryName}
                                    </option>
                                ))}
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
                            defaultValue={description}
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
                        value="Update Product"
                        className="btn hover:bg-transparent hover:text-primary text-white btn-primary  mt-2"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
