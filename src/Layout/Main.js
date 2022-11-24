import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const Main = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
};

export default Main;
