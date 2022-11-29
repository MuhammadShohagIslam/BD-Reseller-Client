import React from "react";
import Blogs from "../Blogs/Blogs";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import TopOfferProduct from "../TopOfferProduct/TopOfferProduct";

const Home = () => {
    return (
        <>
            <Banner />
            <Categories />
            <Advertise />
            <TopOfferProduct/>
            <Blogs />
        </>
    );
};

export default Home;
