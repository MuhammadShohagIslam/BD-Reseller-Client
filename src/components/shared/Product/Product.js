import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { BsCalendarDate, BsHouseDoorFill } from "react-icons/bs";
import { BiUserPlus, BiCategoryAlt } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { getSellerUserBySellerId } from "./../../../api/user";

import {
    MdLocationOn,
    MdOutlineVerifiedUser,
    MdOutlineWifiProtectedSetup,
} from "react-icons/md";

const Product = ({
    product,
    addToWishList,
    addToBookNow,
    wishLists,
    bookingProducts,
    user,
}) => {
    const {
        _id,
        date,
        sellerName,
        location,
        productName,
        productImg,
        description,
        productCondition,
        productCategory,
        originalPrice,
        price,
        productCreated,
        sellerId,
    } = product;

    const { data: isSellerVerified } = useQuery({
        queryKey: ["sellerById"],
        queryFn: async () => {
            const data = await getSellerUserBySellerId(sellerId);
            return data.data.isVerified;
        },
    });

    const offerProductPercentage = Math.round(
        ((originalPrice - price) / originalPrice) * 100
    );
    const productIdFromWishLists = wishLists?.map(
        (wishList) => wishList.productId
    );
    const isProductIdFromWishList = productIdFromWishLists.includes(_id);

    const productIdFromBookingProduct = bookingProducts?.map(
        (bookingProduct) => bookingProduct.productId
    );
    const isProductIdFromBookingProduct =
        productIdFromBookingProduct.includes(_id);

    return (
        <div className="rounded-lg shadow-md group cursor-pointer">
            <div className="h-72 relative">
                <div className="absolute top-3 rounded-full left-3 w-14 h-14 bg-success flex justify-center items-center flex-col">
                    <span className="text-white -mb-2">Off</span>
                    <span className="flex justify-center items-center text-white">
                        {offerProductPercentage}%
                    </span>
                </div>
                <ul className="transition duration-300 ease-in-out invisible flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:visible">
                    <li
                        className={`py-3 flex items-center px-3 rounded-lg ml-2 border-2 border-success hover:bg-primary hover:border-primary hover:text-white  text-white ${
                            isProductIdFromWishList
                                ? "bg-primary"
                                : "bg-success"
                        } bg-success transition ease-in-out delay-15 cursor-pointer tooltip tooltip-primary`}
                        data-tip={
                            !user && !user?.uid
                                ? "Login To Add WishList"
                                : isProductIdFromWishList
                                ? "Already To WishList"
                                : "Add To WishList"
                        }
                        onClick={() =>
                            addToWishList(product, isProductIdFromWishList)
                        }
                    >
                        <FaHeart />
                    </li>

                    <label htmlFor="my-modal-3">
                        <li
                            className={`py-3 flex items-center px-3 rounded-lg ml-2 border-2 border-success hover:bg-primary hover:border-primary hover:text-white  text-white ${
                                isProductIdFromBookingProduct
                                    ? "bg-primary"
                                    : "bg-success"
                            } bg-success transition ease-in-out delay-15 cursor-pointer tooltip tooltip-primary`}
                            data-tip={
                                !user && !user?.uid
                                    ? "Login To Booking Now"
                                    : isProductIdFromBookingProduct
                                    ? "Already To Booked"
                                    : "Booking Now"
                            }
                            onClick={() =>
                                addToBookNow(
                                    product,
                                    isProductIdFromBookingProduct
                                )
                            }
                        >
                            <BsFillBookmarkFill />
                        </li>
                    </label>
                </ul>
                <img
                    className="h-full w-full"
                    src={productImg}
                    alt={productName}
                />
            </div>
            <div className="p-5">
                <div className="flex flex-wrap md:flex-col sm:flex-col">
                    <div className="flex items-center mr-3 text-primary">
                        <BsCalendarDate className="text-success" />
                        <span className="ml-1">
                            {new Date(productCreated)
                                .toDateString()
                                .substr(4, 11)}
                        </span>
                    </div>
                    <div className="flex items-center mr-3 sm:mr-2 text-primary">
                        <BiUserPlus className="text-success" />
                        <span className="ml-1">{sellerName}</span>
                        <MdOutlineVerifiedUser
                            className={`${
                                isSellerVerified
                                    ? "text-success"
                                    : "text-primary"
                            }`}
                        />
                    </div>
                    <div className="flex items-center mr-3 sm:ml-0 text-primary">
                        <MdLocationOn className="text-success" />
                        <span className="ml-1">{location}</span>
                    </div>
                    <div className="flex mt-1 mr-3 sm:ml-0 items-center text-primary">
                        <BsHouseDoorFill className="text-success" />
                        <span className="ml-1">From {date}</span>
                    </div>
                    <div className="flex mt-1 mr-3 sm:ml-0 items-center text-primary">
                        <MdOutlineWifiProtectedSetup className="text-success" />
                        <span className="ml-1 capitalize">
                            {productCondition}
                        </span>
                    </div>
                    <div className="flex mt-1 mr-3 sm:ml-0 items-center text-primary">
                        <BiCategoryAlt className="text-success" />
                        <span className="ml-1 capitalize">
                            {productCategory}
                        </span>
                    </div>
                </div>

                <h5 className="my-2 text-xl font-semibold tracking-tight text-primary">
                    {productName}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description.length > 50
                        ? `${description.slice(0, 50)} ...`
                        : description}
                </p>
                <div className="pb-2">
                    <span className="mt-1 text-xl font-medium mr-2 text-success">
                        ${price}
                    </span>
                    <span className="mt-2 line-through text-primary font-medium">
                        ${originalPrice}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Product;
