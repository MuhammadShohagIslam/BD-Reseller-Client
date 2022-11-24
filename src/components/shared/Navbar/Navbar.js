import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const menuListItem = () => {
        return (
            <>
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
                <li>
                    <Link
                        className="hover:bg-transparent text-primary hover:text-success text-lg"
                        to="/register"
                    >
                        Register
                    </Link>
                </li>
            </>
        );
    };
    return (
        <header className="bg-secondary">
            <div className="navbar container md:flex-row-reverse sm:flex-row-reverse">
                <div className="navbar-start md:w-full md:justify-between sm:w-full sm:justify-between">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-primary hidden  md:flex sm:flex "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content bg-secondary mt-3 p-2 shadow rounded-box w-96 sm:w-52"
                        >
                            {menuListItem()}
                        </ul>
                    </div>
                    <Link className="text-3xl sm:text-2xl md:text-2xl italic text-success font-bold">
                        BdSeller
                    </Link>
                    <label
                        htmlFor="dashboard-drawer"
                        className="btn btn-primary drawer-button hidden sm:flex "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                </div>
                <div className="navbar-center lg:flex md:hidden sm:hidden flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuListItem()}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
