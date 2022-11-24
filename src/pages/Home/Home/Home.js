import React from "react";
import Blogs from "../Blogs/Blogs";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    return (
        <>
            <Banner />
            <Categories />
            <Advertise />
            <Blogs />
        </>
    );
};

export default Home;
