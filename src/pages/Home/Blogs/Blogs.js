import React from "react";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import Blog from "../../../components/shared/Blog/Blog";
import { getAllBlogs } from "./../../../api/blog";
import { useQuery } from "@tanstack/react-query";
import DisplayError from './../../DisplayError/DisplayError';

const Blogs = () => {
    const {
        isLoading: isSlideBlogLoading,
        error,
        data,
    } = useQuery({
        queryKey: ["AllBlogs"],
        queryFn: async () => {
            const data = await getAllBlogs();
            return data.data;
        },
    });
    
    if (error) {
        return <DisplayError />;
    }
    return (
        <div className="container py-20 sm:py-8">
            <SectionTitle title="Popular Blogs" />
            <Blog
                isSliderBlog={true}
                blogs={data}
                isSlideBlogLoading={isSlideBlogLoading}
            />
        </div>
    );
};

export default Blogs;
