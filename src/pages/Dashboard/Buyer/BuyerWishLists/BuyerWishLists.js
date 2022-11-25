import React, { useState } from "react";
import SectionTitle from "../../../../components/shared/SectionTitle/SectionTitle";
import WishList from "../../../../components/shared/WishList/WishList";

const BuyerWishLists = () => {
    const [count, setCount] = useState(50);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const pages = Math.ceil(count / size);

    return (
        <section className="container py-10">
            <SectionTitle title="Your Desire Product"/>
            <div className="grid grid-cols-3 mt-8 gap-5">
                <WishList />
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
        </section>
    );
};

export default BuyerWishLists;
