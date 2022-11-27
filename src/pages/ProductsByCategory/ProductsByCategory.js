import React, { useState } from "react";
import BookingForm from "../../components/shared/BookingForm/BookingForm";
import Product from "../../components/shared/Product/Product";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../api/product";
import { useParams } from "react-router-dom";
import Loader from "./../../components/shared/Loader/Loader";

const ProductsByCategory = () => {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const params = useParams();
    const { categoryName } = params;

    const { isLoading, error, refetch, data } = useQuery({
        queryKey: ["productsByCategories", page, size, categoryName],
        queryFn: async () => {
            const data = await getAllProducts(page, size, categoryName);
            setCount(data.data.totalProduct);
            return data.data.products;
        },
    });

    const addToWishList = (product) => {};
    const addToBookNow = (product) => {};

    const pages = Math.ceil(count / size);
    return (
        <section className="container mt-12">
            <SectionTitle
                title={`All Products Of  '''${categoryName}''' Category`}
            />
            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 mt-6">
                    {data?.length > 0 ? (
                        <>
                            {data?.map((product) => (
                                <Product
                                    key={product._id}
                                    product={product}
                                    addToBookNow={addToBookNow}
                                    addToWishList={addToWishList}
                                />
                            ))}
                        </>
                    ) : (
                        <h3 className="text-center text-xl text-primary">
                            There is no product
                        </h3>
                    )}
                </div>
            )}

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
