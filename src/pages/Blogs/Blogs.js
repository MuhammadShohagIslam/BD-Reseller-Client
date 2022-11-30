import React, { useState } from "react";
import Blog from "../../components/shared/Blog/Blog";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "./../../api/blog";
import Loader from "./../../components/shared/Loader/Loader";
import Pagination from "./../../components/shared/Pagination/Pagination";
import DisplayError from "./../DisplayError/DisplayError";
import useDimensions from "./../../hooks/useDimensions";

const Blogs = () => {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const { pageSize } = useDimensions();
    const pages = Math.ceil(count / pageSize);

    const {
        isLoading,
        error,
        data: blogs = [],
    } = useQuery({
        queryKey: ["blogs", page, pageSize],
        queryFn: async () => {
            const data = await getAllBlogs(page, pageSize);
            setCount(data.data.totalBlogs);
            return data.data.blogs;
        },
    });

    if (error) {
        return <DisplayError />;
    }

    return (
        <div className="container mt-14">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
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
            <Pagination pages={pages} page={page} setPage={setPage} />
        </div>
    );
};

export default Blogs;
