import React, { useEffect } from "react";
import Blogs from "../Blogs/Blogs";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import TopOfferProduct from "../TopOfferProduct/TopOfferProduct";
import { Helmet } from "react-helmet-async";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <Categories />
            <Advertise />
            <TopOfferProduct />
            <Blogs />
        </>
    );
};

export default Home;
