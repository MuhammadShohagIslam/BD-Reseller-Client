import React from "react";
import Main from "../../../Layout/Main";
import Blogs from "../Blogs/Blogs";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    return (
      <Main>
        <Banner/>
        <Categories/>
        <Advertise/>
        <Blogs/>
      </Main>
    );
};

export default Home;
