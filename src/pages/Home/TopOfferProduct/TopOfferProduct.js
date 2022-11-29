import React, { useState } from "react";
import BookingForm from "./../../../components/shared/BookingForm/BookingForm";
import Product from "./../../../components/shared/Product/Product";
import SectionTitle from "./../../../components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { getAllTopOfferProducts } from "./../../../api/product";

import {
    createNewWishListProduct,
    getAllWishListProducts,
    removeWishListProductByProductId,
} from "./../../../api/wishList";
import { toast } from "react-hot-toast";
import { useAuth } from "./../../../context/AuthProvider/AuthProvider";
import { getAllBookingProducts } from "./../../../api/bookingProduct";
import Loader from './../../../components/shared/Loader/Loader';

const TopOfferProduct = () => {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [bookingProduct, setBookingProduct] = useState(null);
    const { user } = useAuth();


    const { isLoading, error, refetch, data } = useQuery({
        queryKey: ["allTopOfferProducts", page, "3"],
        queryFn: async () => {
            const data = await getAllTopOfferProducts(page, "3");
            setCount(data.data.totalProduct);
            return data.data.products;
        },
    });

    const {
        isLoading: loadingWishList,
        refetch: wishListRefetch,
        data: wishLists = [],
    } = useQuery({
        queryKey: ["wishLists", user?.displayName, user?.email],
        queryFn: async () => {
            const data = await getAllWishListProducts(
                user?.displayName,
                user?.email
            );
            return data.data;
        },
    });

    const {
        isLoading: loadingBookingProduct,
        refetch: bookingProductRefetch,
        data: bookingProducts = [],
    } = useQuery({
        queryKey: ["bookingProducts", user?.displayName, user?.email],
        queryFn: async () => {
            const data = await getAllBookingProducts(
                user?.displayName,
                user?.email
            );
            return data.data;
        },
    });

    const closeModal = () => {
        setBookingProduct(null);
    };

    const addToWishList = (product, isProductIdFromWishList) => {
        if (!isProductIdFromWishList) {
            const wishListData = {
                ...product,
                productId: product._id,
                userName: user?.displayName,
                userEmail: user?.email,
            };
            delete wishListData._id;

            createNewWishListProduct(wishListData)
                .then((data) => {
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
        } else {
            removeWishListProductByProductId(product._id)
                .then((data) => {
                    if (data.data.acknowledged) {
                        toast.success(
                            `${product.productName} Product Removed To Wish-List!`
                        );
                        wishListRefetch();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const addToBookNow = (product, isProductIdFromBookingProduct) => {
        if (!isProductIdFromBookingProduct) {
            setBookingProduct(product);
        } else {
            toast.error("Products Is Already Booked!");
        }
    };

    const pages = Math.ceil(count / 3);
    return (
        <section className="container mt-12">
            <SectionTitle
                title={`Top Most Offer Product`}
            />
            {isLoading && loadingWishList && loadingBookingProduct ? (
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
                                    wishLists={wishLists}
                                    bookingProducts={bookingProducts}
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
                <button
                    disabled={pages === page + 1}
                    onClick={() => setPage((p) => p + 1)}
                    className="text-primary font-medium mr-3 cursor-pointer py-0 px-2 border-2 border-dashed border-success hover:bg-success  hover:text-white transition-all"
                >
                    Next
                </button>

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
                <button
                    disabled={page === 0}
                    onClick={() => setPage((p) => p - 1)}
                    className="text-primary ml-3 cursor-pointer py-0 font-medium px-2 border-2 border-dashed border-success  hover:bg-success  hover:text-white transition-all"
                >
                    Prev
                </button>
            </div>
            {bookingProduct && (
                <BookingForm
                    bookingProduct={bookingProduct}
                    user={user}
                    closeModal={closeModal}
                    bookingProductRefetch={bookingProductRefetch}
                />
            )}
        </section>
    );
};

export default TopOfferProduct;
