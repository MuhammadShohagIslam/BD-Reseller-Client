import React, { useState } from "react";
import BookingForm from "../../components/shared/BookingForm/BookingForm";
import Product from "../../components/shared/Product/Product";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

const ProductsByCategory = () => {
    const [count, setCount] = useState(50);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    const pages = Math.ceil(count / size);
    return (
        <section className="container mt-12">
            <SectionTitle title={`All Products Of  '''Laptop''' Category`} />
            <div className="grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 mt-6">
                <Product />
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
            <BookingForm />
        </section>
    );
};

export default ProductsByCategory;
