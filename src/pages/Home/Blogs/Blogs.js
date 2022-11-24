import React from "react";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import Blog from "../../../components/shared/Blog/Blog";

const Blogs = () => {
    return (
        <div className="container py-20 sm:py-8">
            <SectionTitle title="Popular Blogs" />
            <Blog isSliderBlog={true} />
        </div>
    );
};

export default Blogs;
