import React, { useState } from "react";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import SellerProduct from "../../../components/shared/SellerProduct/SellerProduct";

const SellerProducts = () => {
    const [count, setCount] = useState(50);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    const pages = Math.ceil(count / size);
    return (
        <div className="container mt-10">
            <SectionTitle title="All Products of Seller" />
            <div className="grid grid-cols-3 mt-7 gap-3">
                <SellerProduct />
                <SellerProduct />
                <SellerProduct />
            </div>
            <div className="text-center mt-5">
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
            </div>
        </div>
    );
};

export default SellerProducts;
