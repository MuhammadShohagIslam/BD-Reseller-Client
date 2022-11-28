import React, { useState } from "react";
import { FaShoppingBag, FaUsers, FaHeart, FaUser } from "react-icons/fa";
import { AiFillSetting, AiFillDashboard } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits, MdLogout } from "react-icons/md";
import SideBarListItem from "./SideBarListItem/SideBarListItem";
import SideBarDropdownListItem from "./SideBarDropdownListItem/SideBarDropdownListItem";
import useAdmin from "./../../../../../hooks/useAdmin";
import useSeller from "./../../../../../hooks/useSeller";
import useBuyer from "./../../../../../hooks/useBuyer";
import { useAuth } from "./../../../../../context/AuthProvider/AuthProvider";

const SidebarList = ({ toggleAdminSidebar }) => {
    const [openProduct, setOpenProduct] = useState(false);
    const [openCategories, setOpenCategories] = useState(false);
    const [openAllUsers, setOpenAllUsers] = useState(false);

    const { user } = useAuth();

    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

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
            {isSeller && (
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
            )}
            {isSeller && (
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
            )}

            {isBuyer && (
                <>
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
                        navigationLink="/dashboard/buyer/orders"
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
                </>
            )}

            {isSeller && (
                <SideBarListItem
                    navigationLink="/dashboard/seller/myBuyers"
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
            )}
            {isAdmin && (
                <SideBarListItem
                    open={openAllUsers}
                    setOpen={setOpenAllUsers}
                    icon={<FaUsers className="h-[19px] w-[19px]" />}
                    toggleAdminSidebar={toggleAdminSidebar}
                    dropdownMainMenuName="All Users"
                    tooltipName="All Users"
                    isDropdownList
                >
                    <SideBarDropdownListItem
                        dropdownNavigationLink="/dashboard/admin/allSellers"
                        name="All Sellers"
                    />
                    <SideBarDropdownListItem
                        dropdownNavigationLink="/dashboard/admin/allBuyers"
                        name="All Buyers"
                    />
                </SideBarListItem>
            )}

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
