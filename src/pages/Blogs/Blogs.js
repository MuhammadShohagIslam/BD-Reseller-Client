import React, { useState } from "react";
import Blog from "../../components/shared/Blog/Blog";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "./../../api/blog";
import Loader from "./../../components/shared/Loader/Loader";

const Blogs = () => {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const pages = Math.ceil(count / 3);

    const { isLoading, data: blogs = [] } = useQuery({
        queryKey: ["blogs", page, "3"],
        queryFn: async () => {
            const data = await getAllBlogs(page, "3");
            setCount(data.data.totalBlogs);
            return data.data.blogs;
        },
    });


    return (
        <div className="container mt-14">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1">
                    {blogs?.length > 0 ? (
                        <>
                            {blogs?.map((blog) => (
                                <Blog
                                    key={blog._id}
                                    isSliderBlog={false}
                                    blog={blog}
                                />
                            ))}
                        </>
                    ) : (
                        <h3 className="text-center text-xl text-primary">
                            There is no Blog
                        </h3>
                    )}
                </div>
            )}
            <div className="text-center mt-5">
                <button
                    disabled={pages === page + 1}
                    onClick={() => setPage((p) => p + 1)}
                    className="text-primary font-medium mr-3 cursor-pointer py-0 px-2 border-2 border-dashed border-success hover:bg-success  hover:text-white transition-all"
                >
                    Next
                </button>

                {[...Array(pages).keys()].map((number) => (
                    <button
                        key={number}
                        className={`btn btn-sm text-primary hover:text-white ${
                            page === number ? "btn-active text-white" : ""
                        }`}
                        onClick={() => setPage(number)}
                    >
                        {number + 1}
                    </button>
                ))}
                <button
                    disabled={page === 0}
                    onClick={() => setPage((p) => p - 1)}
                    className="text-primary ml-3 cursor-pointer py-0 font-medium px-2 border-2 border-dashed border-success  hover:bg-success  hover:text-white transition-all"
                >
                    Prev
                </button>
            </div>
        </div>
    );
};

export default Blogs;
