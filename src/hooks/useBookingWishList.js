import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider/AuthProvider";
import {
    createNewWishListProduct,
    getAllWishListProducts,
    removeWishListProductByProductId,
} from "../api/wishList";
import { getAllBookingProducts } from "../api/bookingProduct";

const useBookingWishList = () => {
    const [bookingProduct, setBookingProduct] = useState(null);
    const { user, logOut } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const userName = user?.displayName;
    const userEmail = user?.email;
    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => {
                console.log(error.message);
            });
    };
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
        onError: (error) => {
            if (error.response.status === 403) {
                handleLogOut();
            }
        },
        enabled: !!userName && !!userEmail,
    });

    const closeModal = () => {
        setBookingProduct(null);
    };

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

    return {
        user,
        bookingProduct,
        closeModal,
        loadingBookingProduct,
        loadingWishList,
        bookingProductRefetch,
        bookingError,
        bookingProducts,
        wishListError,
        wishLists,
        addToWishList,
        addToBookNow,
    };
};

export default useBookingWishList;
