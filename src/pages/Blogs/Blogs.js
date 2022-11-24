import React, { useState } from "react";
import MainLayout from "../../Layout/Main";
import Blog from "../../components/shared/Blog/Blog";

const Blogs = () => {
    const [count, setCount] = useState(50);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    const pages = Math.ceil(count / size);

    return (
        <MainLayout>
            <div className="container mt-14">
                <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                    <Blog isSliderBlog={false} />
                </div>
                <div className="text-center mt-5">
                    {[...Array(pages).keys()].map((number) => (
                        <button
                            key={number}
                            className={`btn btn-sm text-primary hover:text-white ${page === number ? "btn-active text-white" : ""}`}
                            onClick={() => setPage(number)}
                        >
                            {number + 1}
                        </button>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default Blogs;
