import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { RiAdvertisementLine } from "react-icons/ri";
import { BsCalendarDate, BsHouseDoorFill } from "react-icons/bs";
import { BiUserPlus, BiCategoryAlt } from "react-icons/bi";
import {
    MdLocationOn,
    MdOutlineVerifiedUser,
    MdOutlineWifiProtectedSetup,
} from "react-icons/md";
import { Link } from "react-router-dom";

const SellerProduct = ({
    product,
    handleDeleteProduct,
    handleAdvertisingProduct,
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
        isAdvertised,
    } = product;

    const offProduct = Math.round(
        ((originalPrice - price) / originalPrice) * 100
    );

    return (
        <div className="max-w-lg rounded-lg shadow-md group cursor-pointer">
            <div className="h-72 relative">
                <div className="absolute top-3 rounded-full left-3 w-14 h-14 bg-success flex justify-center items-center flex-col">
                    <span className="text-white -mb-2">Off</span>
                    <span className="flex justify-center items-center text-white">
                        {offProduct}%
                    </span>
                </div>
                <ul className="transition duration-300 ease-in-out invisible flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:visible">
                    <li
                        className={`py-3 flex items-center px-3 rounded-lg ml-2 border-2 border-success hover:bg-primary hover:border-primary hover:text-white  text-white ${
                            product?.isAdvertised ? "bg-primary" : "bg-success"
                        } bg-success transition ease-in-out delay-15 cursor-pointer tooltip tooltip-primary`}
                        data-tip={
                            product?.isAdvertised
                                ? "Already Advertised"
                                : "Add To Advertised"
                        }
                        onClick={() =>
                            handleAdvertisingProduct(product, isAdvertised)
                        }
                    >
                        <RiAdvertisementLine />
                    </li>
                    <li
                        className="py-3 flex items-center px-3 rounded-lg ml-2 border-2 border-success hover:bg-primary hover:border-primary hover:text-white  text-white bg-success transition ease-in-out delay-15 cursor-pointer tooltip tooltip-primary"
                        data-tip="Delete Product"
                        onClick={() => handleDeleteProduct(_id)}
                    >
                        <AiFillDelete />
                    </li>

                    <label htmlFor="my-modal-3">
                        <Link to={`/dashboard/seller/updateProduct/${_id}`}>
                            <li
                                className="py-3 flex items-center px-3 rounded-lg ml-2 border-2 border-success hover:bg-primary hover:border-primary hover:text-white  text-white bg-success transition ease-in-out delay-15 cursor-pointer tooltip tooltip-primary"
                                data-tip="Edit Product"
                            >
                                <AiFillEdit />
                            </li>
                        </Link>
                    </label>
                </ul>
                <img
                    className="h-full w-full"
                    src={productImg}
                    alt={productName}
                />
            </div>
            <div className="p-5">
                <div className="flex flex-wrap">
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
                        <MdOutlineVerifiedUser />
                    </div>
                    <div className="flex items-center mr-3 sm:ml-0 text-primary">
                        <MdLocationOn className="text-success" />
                        <span className="ml-1">{location}</span>
                    </div>
                    <div className="flex mt-1 mr-3 sm:ml-3 items-center text-primary">
                        <BsHouseDoorFill className="text-success" />
                        <span className="ml-1">From {date}</span>
                    </div>
                    <div className="flex mt-1 mr-3 sm:ml-3 items-center text-primary">
                        <MdOutlineWifiProtectedSetup className="text-success" />
                        <span className="ml-1 capitalize">
                            {productCondition}
                        </span>
                    </div>
                    <div className="flex mt-1 mr-3 sm:ml-3 items-center text-primary">
                        <BiCategoryAlt className="text-success" />
                        <span className="ml-1 capitalize">
                            {productCategory}
                        </span>
                    </div>
                </div>
                <Link to="/dashboard/products/productId">
                    <h5 className="my-2 text-xl font-semibold tracking-tight text-primary">
                        {productName}
                    </h5>
                </Link>
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

export default SellerProduct;
