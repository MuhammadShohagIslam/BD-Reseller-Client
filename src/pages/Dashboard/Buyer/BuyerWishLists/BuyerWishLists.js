import React, { useState } from "react";
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

const BuyerWishLists = () => {
    const {
        isLoading,
        refetch,
        error,
        data: wishLists = [],
    } = useQuery({
        queryKey: ["wishListsFromDashboard"],
        queryFn: async () => {
            const data = await getAllWishListProducts("abc", "abc@gmail.com");
            return data.data;
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
        <section className="container py-10">
            <SectionTitle title="Your Desire Product" />
            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-3 mt-8 gap-5">
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
    );
};

export default BuyerWishLists;
