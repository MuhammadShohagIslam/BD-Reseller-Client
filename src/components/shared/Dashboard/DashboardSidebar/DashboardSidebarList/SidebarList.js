import React, { useState } from "react";
import { FaShoppingBag, FaUsers, FaHeart, FaUser } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { AiFillSetting, AiFillDashboard } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits, MdLogout } from "react-icons/md";
import SideBarListItem from "./SideBarListItem/SideBarListItem";
import SideBarDropdownListItem from "./SideBarDropdownListItem/SideBarDropdownListItem";

const SidebarList = ({ toggleAdminSidebar }) => {
    const [openProduct, setOpenProduct] = useState(false);
    const [openCategories, setOpenCategories] = useState(false);

    return (
        <ul className="space-y-2 px-3 ">
            <SideBarListItem
                navigationLink="/dashboard"
                tooltipName="Dashboard"
                toggleAdminSidebar={toggleAdminSidebar}
            >
                <AiFillDashboard className="h-[19px] w-[19px]" />

                {!toggleAdminSidebar && <span className="ml-3">Dashboard</span>}
            </SideBarListItem>
            <SideBarListItem
                open={openProduct}
                setOpen={setOpenProduct}
                icon={
                    <MdOutlineProductionQuantityLimits className="h-[19px] w-[19px]" />
                }
                toggleAdminSidebar={toggleAdminSidebar}
                dropdownMainMenuName="Products"
                isDropdownList
                tooltipName="Products"
            >
                <SideBarDropdownListItem
                    dropdownNavigationLink="/dashboard/seller/allProducts"
                    name="All Products"
                />
                <SideBarDropdownListItem
                    dropdownNavigationLink="/dashboard/seller/addProduct"
                    name="Add Product"
                />
            </SideBarListItem>
            <SideBarListItem
                open={openCategories}
                setOpen={setOpenCategories}
                icon={<BiCategory className="h-[19px] w-[19px]" />}
                toggleAdminSidebar={toggleAdminSidebar}
                dropdownMainMenuName="Categories"
                tooltipName="Categories"
                isDropdownList
            >
                <SideBarDropdownListItem
                    dropdownNavigationLink="/dashboard/seller/allCategories"
                    name="All Categories"
                />
                <SideBarDropdownListItem
                    dropdownNavigationLink="/dashboard/seller/addCategories"
                    name="Add Category"
                />
            </SideBarListItem>

            <SideBarListItem
                navigationLink="/dashboard/buyer/wishlist"
                tooltipName="My WishList"
                toggleAdminSidebar={toggleAdminSidebar}
            >
                <FaHeart className="h-[19px] w-[19px]" />
                {!toggleAdminSidebar && (
                    <span className="flex-1 ml-3 whitespace-nowrap">
                        My WishList
                    </span>
                )}
            </SideBarListItem>
            <SideBarListItem
                navigationLink="/dashboard/myOrders"
                tooltipName="My Orders"
                toggleAdminSidebar={toggleAdminSidebar}
            >
                <FaShoppingBag className="h-[19px] w-[19px]" />
                {!toggleAdminSidebar && (
                    <span className="flex-1 ml-3 whitespace-nowrap">
                        My Orders
                    </span>
                )}
            </SideBarListItem>
            <SideBarListItem
                navigationLink="/dashboard/admin/allBuyers"
                tooltipName="My Buyers"
                toggleAdminSidebar={toggleAdminSidebar}
            >
                <FaUsers className="h-[19px] w-[19px]" />
                {!toggleAdminSidebar && (
                    <span className="flex-1 ml-3 whitespace-nowrap">
                        My Buyers
                    </span>
                )}
            </SideBarListItem>
            <SideBarListItem
                navigationLink="/dashboard/admin/allSellers"
                tooltipName="All Sellers"
                toggleAdminSidebar={toggleAdminSidebar}
            >
                <ImUserTie className="h-[19px] w-[19px]" />
                {!toggleAdminSidebar && (
                    <span className="flex-1 ml-3 whitespace-nowrap">
                        All Sellers
                    </span>
                )}
            </SideBarListItem>
            <SideBarListItem
                navigationLink="/dashboard/profile"
                tooltipName="Profile"
                toggleAdminSidebar={toggleAdminSidebar}
            >
                <FaUser className="h-[19px] w-[19px]" />
                {!toggleAdminSidebar && (
                    <span className="flex-1 ml-3 whitespace-nowrap">
                        Profile
                    </span>
                )}
            </SideBarListItem>
            <SideBarListItem
                navigationLink="/dashboard/accountSetting"
                tooltipName="Account Setting"
                toggleAdminSidebar={toggleAdminSidebar}
            >
                <AiFillSetting className="h-[19px] w-[19px]" />
                {!toggleAdminSidebar && (
                    <span className="flex-1 ml-3 whitespace-nowrap">
                        Account Setting
                    </span>
                )}
            </SideBarListItem>
            <SideBarListItem
                tooltipName="LogOut"
                toggleAdminSidebar={toggleAdminSidebar}
                isLabel
            >
                <MdLogout className="h-[19px] w-[19px]" />
                {!toggleAdminSidebar && (
                    <span className="flex-1 ml-3 whitespace-nowrap">
                        LogOut
                    </span>
                )}
            </SideBarListItem>
        </ul>
    );
};

export default SidebarList;
