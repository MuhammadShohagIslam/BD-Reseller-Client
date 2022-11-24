import React from "react";
import Navbar from "../components/shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {children}
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="dashboard-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li>
                            <Link
                                className="hover:bg-transparent text-primary hover:text-success text-lg"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:bg-transparent text-primary hover:text-success text-lg"
                                to="/blogs"
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:bg-transparent text-primary hover:text-success text-lg"
                                to="/booked"
                            >
                                Booked
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:bg-transparent text-primary hover:text-success text-lg"
                                to="/contact"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:bg-transparent text-primary hover:text-success text-lg"
                                to="/login"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
