import React from "react";
import { BsCalendarDate, BsHouseDoorFill,BsFillCartPlusFill,BsFillHeartFill } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { MdLocationOn, MdOutlineVerifiedUser } from "react-icons/md";
import { Link } from "react-router-dom";

const WishList = () => {
    return (
        <div className="max-w-lg rounded-lg shadow-md group cursor-pointer">
            <div className="h-72 relative">
                <div className="absolute top-3 rounded-full left-3 w-14 h-14 bg-success flex justify-center items-center flex-col">
                    <span className="text-white -mb-2">Off</span>
                    <span className="flex justify-center items-center text-white">
                        56%
                    </span>
                </div>

                <img
                    className="h-full w-full"
                    src="https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
                    alt="Shoes"
                />
            </div>
            <div class="p-5">
                <div className="flex flex-wrap">
                    <div className="flex items-center text-primary">
                        <BsCalendarDate className="text-success" />
                        <span className="ml-1">2022, 20, 20</span>
                    </div>
                    <div className="flex items-center ml-3 sm:mr-2 text-primary">
                        <BiUserPlus className="text-success" />
                        <span className="ml-1">User</span>
                        <MdOutlineVerifiedUser />
                    </div>
                    <div className="flex items-center ml-4 sm:ml-0 text-primary">
                        <MdLocationOn className="text-success" />
                        <span className="ml-1">Location</span>
                    </div>
                    <div className="flex mt-1  sm:ml-3 items-center text-primary">
                        <BsHouseDoorFill className="text-success" />
                        <span className="ml-1">2 years used</span>
                    </div>
                </div>
                <Link to="/dashboard/products/productId">
                    <h5 className="my-2 text-xl font-semibold tracking-tight text-primary">
                        Noteworthy technology acquisitions 2021
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions...
                </p>
                <div className="pb-2">
                    <span className="mt-1 text-xl font-medium mr-2 text-success">
                        $35
                    </span>
                    <span className="mt-2 line-through text-primary font-medium">
                        $35
                    </span>
                </div>
                <ul className="flex pt-4 mt-2 border-t-[1px] border-secondary justify-around">
                    <li
                        className="py-3 flex items-center px-3 rounded-lg ml-2 border-2 border-success  text-white bg-primary cursor-pointer tooltip tooltip-primary"
                        data-tip="Remove To WishList"
                    >
                        <BsFillHeartFill className="text-success"/>
                    </li>

                    <li
                        className="py-3 flex items-center px-3 rounded-lg ml-2 border-2 border-success  text-white bg-primary cursor-pointer tooltip tooltip-primary"
                        data-tip="Add To Cart"
                    >
                        <BsFillCartPlusFill />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WishList;
