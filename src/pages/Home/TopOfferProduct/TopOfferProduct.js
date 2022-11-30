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
import Loader from "./../../../components/shared/Loader/Loader";
import Pagination from "../../../components/shared/Pagination/Pagination";
import DisplayError from "./../../DisplayError/DisplayError";
import { useLocation, useNavigate } from "react-router-dom";
import useDimensions from './../../../hooks/useDimensions';

const TopOfferProduct = () => {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [bookingProduct, setBookingProduct] = useState(null);
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const {pageSize} = useDimensions();
    const pages = Math.ceil(count / pageSize);

    const { isLoading, error, data } = useQuery({
        queryKey: ["allTopOfferProducts", page, pageSize],
        queryFn: async () => {
            const data = await getAllTopOfferProducts(page, pageSize);
            setCount(data.data.totalProduct);
            return data.data.products;
        },
    });

    const {
        isLoading: loadingWishList,
        refetch: wishListRefetch,
        error: wishListError,
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

    const userName = user?.displayName;
    const userEmail = user?.email;
    const {
        isLoading: loadingBookingProduct,
        refetch: bookingProductRefetch,
        error: bookingError,
        data: bookingProducts = [],
    } = useQuery({
        queryKey: ["bookingProducts", userName, userEmail],
        queryFn: async () => {
            const data = await getAllBookingProducts(
                user?.displayName,
                user?.email
            );
            return data.data;
        },
        enabled: !!userName && !!userEmail
    });

    const closeModal = () => {
        setBookingProduct(null);
    };

    const addToWishList = (product, isProductIdFromWishList) => {
        if (user && user?.uid) {
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
        } else {
            return navigate("/login", {
                state: { from: location },
                replace: true,
            });
        }
    };

    const addToBookNow = (product, isProductIdFromBookingProduct) => {
        if (user && user?.uid) {
            if (!isProductIdFromBookingProduct) {
                setBookingProduct(product);
            } else {
                toast.error("Products Is Already Booked!");
            }
        } else {
            return navigate("/login", {
                state: { from: location },
                replace: true,
            });
        }
    };

    if (error && wishListError && bookingError) {
        return <DisplayError />;
    }

    return (
        <section className="container mt-12">
            <SectionTitle title={`Top Most Offer Product`} />
            {isLoading && loadingWishList && loadingBookingProduct ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-6">
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
                                    user={user}
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

            <Pagination pages={pages} page={page} setPage={setPage} />

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
