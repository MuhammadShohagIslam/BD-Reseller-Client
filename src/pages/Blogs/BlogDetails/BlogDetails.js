import React from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
    const blog = useLoaderData();

    return (
        <>
            <Helmet>
                <title>Blog Details</title>
            </Helmet>
            <section className="container my-14">
                <div className="w-10/12 m-auto bg-secondary px-6 py-7">
                    <div className="mb-5">
                        <img
                            className="w-full"
                            src={blog.image}
                            alt={blog.title}
                        />
                    </div>
                    <div className="">
                        <h2 className="text-primary text-center text-xl font-medium">
                            {blog.title}
                        </h2>
                        <h6 className="text-success text-center mb-4 mt-1 text-sm">
                            Author: {blog.publisherName} - Published:{" "}
                            {new Date(blog.publisherDate)
                                .toString()
                                .substr(4, 11)}
                        </h6>
                        <p className="text-primary text-lg font-normal">
                            {blog.description}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetails;
