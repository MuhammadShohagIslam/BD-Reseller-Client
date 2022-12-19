import React from "react";

const Pagination = ({ pages, page, setPage }) => {
    return (
        <div className="text-center mt-5">
            <button
                disabled={pages === page}
                onClick={() => setPage((p) => p + 1)}
                className={`text-primary mr-3 cursor-pointer py-0 font-medium px-2 border-2 border-dashed border-success ${
                    pages === page
                        ? "bg-success text-white border-dashed border-primary"
                        : ""
                } hover:bg-success  hover:text-white transition-all`}
            >
                Next
            </button>

            {[...Array(pages).keys()].map((number) => (
                <button
                    key={number}
                    className={`btn btn-sm text-primary hover:text-white ${
                        page === number + 1 ? "btn-active text-white" : ""
                    }`}
                    onClick={() => setPage(number + 1)}
                >
                    {number + 1}
                </button>
            ))}
            <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className={`text-primary ml-3 cursor-pointer py-0 font-medium px-2 border-2 border-dashed border-success ${
                    page === 1
                        ? "bg-success text-white border-dashed border-primary"
                        : ""
                } hover:bg-success  hover:text-white transition-all`}
            >
                Prev
            </button>
        </div>
    );
};

export default Pagination;
