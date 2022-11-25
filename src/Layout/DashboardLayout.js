import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBarCollapseButton from "./../components/shared/Dashboard/DashboardSidebar/SideBarCollapseButton/SideBarCollapseButton";
import DashboardNavbar from "./../components/shared/Dashboard/DashboardNavbar/DashboardNavbar";
import SidebarList from "../components/shared/Dashboard/DashboardSidebar/DashboardSidebarList/SidebarList";

const DashboardLayout = () => {
    const [toggleAdminSidebar, setToggleAdminSidebar] = useState(false);
    
    return (
        <>
            <DashboardNavbar />
            <div className="flex h-screen max-h-screen">
                <aside className={`w-72 ${toggleAdminSidebar ? "w-16" : ""}`}>
                    <div className="relative min-h-screen py-4 bg-gray-50 dark:bg-gray-800 flex flex-col justify-between">
                        <SidebarList toggleAdminSidebar={toggleAdminSidebar} />
                        <SideBarCollapseButton
                            toggleAdminSidebar={toggleAdminSidebar}
                            setToggleAdminSidebar={setToggleAdminSidebar}
                        />
                    </div>
                </aside>

                <section className="w-full w-max-full">
                    <Outlet />
                </section>
            </div>
        </>
    );
};

export default DashboardLayout;
