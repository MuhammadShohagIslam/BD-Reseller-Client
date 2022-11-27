import React, { useState, useEffect } from "react";
import BookingForm from "../../components/shared/BookingForm/BookingForm";
import Product from "../../components/shared/Product/Product";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../api/product";
import { useParams } from "react-router-dom";
import Loader from "./../../components/shared/Loader/Loader";
import {
    createNewWishListProduct,
    getAllWishListProducts,
} from "./../../api/wishList";
import { toast } from "react-hot-toast";

const ProductsByCategory = () => {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [isAddedWishList, setIsAddedWishList] = useState(false);

    const params = useParams();
    const { categoryName } = params;

    const { isLoading, error, refetch, data } = useQuery({
        queryKey: ["productsByCategories", page, size, categoryName],
        queryFn: async () => {
            const data = await getAllProducts(page, size, categoryName);
            setCount(data.data.totalProduct);
            return data.data.products;
        },
    });

    const {
        isLoading: loadingWishList,
        refetch: wishListRefetch,
        data: wishLists = [],
    } = useQuery({
        queryKey: ["wishLists"],
        queryFn: async () => {
            const data = await getAllWishListProducts();
            return data.data;
        },
    });

    console.log(wishLists);
    const addToWishList = (product, isProductIdFromWishList) => {
        if (!isProductIdFromWishList) {
            const wishListData = {
                ...product,
                productId: product._id,
                userName: "abc",
                userEmail: "abc@gmail.com",
            };
            delete wishListData._id;

            createNewWishListProduct(wishListData)
                .then((data) => {
                    setIsAddedWishList(false);
                    if (data.data.acknowledged) {
                        toast.success(
                            `${product.productName} Product Added To Wish-List!`
                        );
                        wishListRefetch();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const addToBookNow = (productId) => {
        console.log(productId);
    };

    const pages = Math.ceil(count / size);
    return (
        <section className="container mt-12">
            <SectionTitle
                title={`All Products Of  '''${categoryName}''' Category`}
            />
            {isLoading && loadingWishList ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 mt-6">
                    {data?.length > 0 ? (
                        <>
                            {data?.map((product) => (
                                <Product
                                    key={product._id}
                                    product={product}
                                    addToBookNow={addToBookNow}
                                    addToWishList={addToWishList}
                                    isAddedWishList={isAddedWishList}
                                    wishLists={wishLists}
                                />
                            ))}
                        </>
                    ) : (
                        <h3 className="text-center text-xl text-primary">
                            There is no product
                        </h3>
                    )}
                </div>
            )}

            <div className="text-center mt-5">
                {[...Array(pages).keys()].map((number) => (
                    <button
                        key={number}
                        className={`btn btn-sm text-primary hover:text-white ${
                            page === number ? "btn-active text-white" : ""
                        }`}
                        onClick={() => setPage(number)}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
            <BookingForm />
        </section>
    );
};

export default ProductsByCategory;
