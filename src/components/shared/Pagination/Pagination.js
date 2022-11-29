import React from "react";

const Pagination = ({ pages, page, setPage }) => {
    return (
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
    );
};

export default Pagination;
