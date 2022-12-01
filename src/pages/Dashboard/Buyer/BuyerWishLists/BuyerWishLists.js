import React from "react";
import SectionTitle from "../../../../components/shared/SectionTitle/SectionTitle";
import WishList from "../../../../components/shared/WishList/WishList";
import { useQuery } from "@tanstack/react-query";
import {
    getAllWishListProducts,
    removeWishListProductByProductId,
} from "../../../../api/wishList";
import Loader from "./../../../../components/shared/Loader/Loader";
import { toast } from "react-hot-toast";
import DisplayError from "./../../../DisplayError/DisplayError";
import { useAuth } from "./../../../../context/AuthProvider/AuthProvider";
import { useLocation, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BuyerWishLists = () => {
    const { user, logOut } = useAuth();
    const location = useLocation();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                return (
                    <Navigate
                        to="/login"
                        state={{ from: location }}
                        replace={true}
                    />
                );
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    const {
        isLoading,
        refetch,
        error,
        data: wishLists = [],
    } = useQuery({
        queryKey: ["wishListsForBuyer"],
        queryFn: async () => {
            try {
                const data = await getAllWishListProducts(
                    user?.displayName,
                    user?.email
                );
                return data?.data;
            } catch (error) {
                if (error.response.status === 403) {
                    handleLogOut();
                }
            }
        },
    });

    const addToWishList = (wishList, isProductIdFromWishList, productId) => {
        console.log(wishList._id);
        if (isProductIdFromWishList) {
            removeWishListProductByProductId(productId)
                .then((data) => {
                    console.log(data);
                    if (data.data.acknowledged) {
                        toast.success(
                            `${wishList.productName} Product Removed To Wish-List!`
                        );
                        refetch();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    if (error) {
        return <DisplayError />;
    }
    return (
        <>
            <Helmet>
                <title>Buyer WishList</title>
            </Helmet>
            <section className="container py-10">
                <SectionTitle title="Your Desire Product" />
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-8 gap-5">
                        {wishLists?.length > 0 ? (
                            <>
                                {wishLists?.map((wishList) => (
                                    <WishList
                                        wishList={wishList}
                                        key={wishList._id}
                                        addToWishList={addToWishList}
                                        wishLists={wishLists}
                                    />
                                ))}
                            </>
                        ) : (
                            <h3 className="text-center text-xl text-primary">
                                There is no wish-list
                            </h3>
                        )}
                    </div>
                )}
            </section>
        </>
    );
};

export default BuyerWishLists;
