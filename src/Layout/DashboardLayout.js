import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const [open, setOpen] = useState(false);
    const [toggleAdminSidebar, setToggleAdminSidebar] = useState(false);
    const [toggleTooltip, setToggleTooltip] = useState(false);
    return (
        <>
            <div className="navbar bg-gray-800">
                <div className="container flex justify-between ">
                    <div className="w-1/4">
                        <Link
                            to="/dashboard"
                            className="text-white font-bold text-3xl"
                        >
                            BD-Seller
                        </Link>
                    </div>

                    <form className="w-1/2">
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                class="block w-full h-10 pl-10 pr-4 text-sm text-primary border border-white rounded-lg bg-white focus:ring-primary focus:border-primary"
                                placeholder="Search Anything"
                                required
                            />
                        </div>
                    </form>

                    <div className="flex items-center justify-end w-1/4">
                        <button className="btn btn-ghost btn-circle relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                            <span class="h-3 w-3 absolute top-1">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                            </span>
                        </button>
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/" />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 pb-2 shadow menu menu-compact dropdown-content bg-gray-800 rounded w-52 divide-y divide-gray-100"
                            >
                                <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
                                    <div>Bonnie Green</div>
                                    <div class="font-medium truncate">
                                        name@flowbite.com
                                    </div>
                                </div>
                                <ul
                                    class="text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownUserAvatarButton"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            class="block py-2 px-4 hover:bg-gray-600 text-white"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block py-2 px-4 hover:bg-gray-600 text-white"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block py-2 px-4 hover:bg-gray-600 text-white"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                </ul>
                                <div>
                                    <a
                                        href="#"
                                        class="block py-2 px-4 hover:bg-gray-600 text-white"
                                    >
                                        Sign out
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-screen max-h-screen">
                <aside className={`w-72 ${toggleAdminSidebar ? "w-16" : ""}`}>
                    <div className="relative h-screen min-h-screen py-4 bg-gray-50 dark:bg-gray-800 flex flex-col justify-between overflow-y-auto">
                        <ul className="space-y-2 px-3 ">
                            <li className="relative">
                                <a
                                    onMouseEnter={()=> setToggleTooltip(!toggleTooltip)}
                                    onMouseLeave={()=> setToggleTooltip(!toggleTooltip)}
                                    href="#"
                                    className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${toggleAdminSidebar && "tooltip tooltip-right tooltip-primary"}`} data-tip="hello"
                                >
                                    <svg
                                        class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white "
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                    
                                    {!toggleAdminSidebar && (
                                        <span className="ml-3">Dashboard</span>
                                    )}
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => setOpen(!open)}
                                    type="button"
                                    className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    {!toggleAdminSidebar && (
                                        <>
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                Products
                                            </span>
                                            <svg
                                                className={`w-6 h-6 ${
                                                    open
                                                        ? "rotate-180"
                                                        : "rotate-0"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </>
                                    )}
                                </button>
                                {!toggleAdminSidebar && (
                                    <ul
                                        className={`${
                                            open ? "block" : "hidden"
                                        } py-2 space-y-2`}
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                Products
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                Billing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                Invoice
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button
                                    onClick={() => setOpen(!open)}
                                    type="button"
                                    className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    {!toggleAdminSidebar && (
                                        <>
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                Products
                                            </span>
                                            <svg
                                                className={`w-6 h-6 ${
                                                    open
                                                        ? "rotate-180"
                                                        : "rotate-0"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </>
                                    )}
                                </button>
                                {!toggleAdminSidebar && (
                                    <ul
                                        className={`${
                                            open ? "block" : "hidden"
                                        } py-2 space-y-2`}
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                Products
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                Billing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                Invoice
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button
                                    onClick={() => setOpen(!open)}
                                    type="button"
                                    className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    {!toggleAdminSidebar && (
                                        <>
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                Products
                                            </span>
                                            <svg
                                                className={`w-6 h-6 ${
                                                    open
                                                        ? "rotate-180"
                                                        : "rotate-0"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </>
                                    )}
                                </button>
                                {!toggleAdminSidebar && (
                                    <ul
                                        className={`${
                                            open ? "block" : "hidden"
                                        } py-2 space-y-2`}
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                Products
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                Billing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                Invoice
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button
                                    onClick={() => setOpen(!open)}
                                    type="button"
                                    className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    {!toggleAdminSidebar && (
                                        <>
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                Products
                                            </span>
                                            <svg
                                                className={`w-6 h-6 ${
                                                    open
                                                        ? "rotate-180"
                                                        : "rotate-0"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </>
                                    )}
                                </button>
                                {!toggleAdminSidebar && (
                                    <ul
                                        className={`${
                                            open ? "block" : "hidden"
                                        } py-2 space-y-2`}
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                Products
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                Billing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                Invoice
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    {!toggleAdminSidebar && (
                                        <span className="flex-1 ml-3 whitespace-nowrap">
                                            Users
                                        </span>
                                    )}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    {!toggleAdminSidebar && (
                                        <span className="flex-1 ml-3 whitespace-nowrap">
                                            Sign In
                                        </span>
                                    )}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    {!toggleAdminSidebar && (
                                        <span className="flex-1 ml-3 whitespace-nowrap">
                                            Sign Up
                                        </span>
                                    )}
                                </a>
                            </li>
                        </ul>
                        <div className="block border-t-2 w-full border-white">
                            <label
                                onClick={() =>
                                    setToggleAdminSidebar(!toggleAdminSidebar)
                                }
                                className="btn btn-sm btn-circle border-2 hover:bg-success hover:text-white hover:border-success mt-4 ml-2"
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
                    </div>
                </aside>

                <section className="w-full w-max-full"></section>
            </div>
        </>
    );
};

export default DashboardLayout;
