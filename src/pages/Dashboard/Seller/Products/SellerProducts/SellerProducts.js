import React, { useState } from "react";
import SectionTitle from "./../../../../../components/shared/SectionTitle/SectionTitle";
import SellerProduct from "./../../../../../components/shared/SellerProduct/SellerProduct";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../../../../api/product";
import Loader from "./../../../../../components/shared/Loader/Loader";

const SellerProducts = () => {
    const [count, setCount] = useState(50);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    const {
        isLoading,
        error,
        data:{ data } = [],
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const data = await getAllProducts();
            return data;
        },
    });

    console.log(data);

    const pages = Math.ceil(count / size);
    return (
        <div className="container mt-10">
            <SectionTitle title="All Products of Seller" />
           
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-3 mt-7 gap-5">
                        {data?.length > 0 ? (
                            <>
                                {data?.map((product) => (
                                    <SellerProduct
                                        key={product._id}
                                        product={product}
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
        </div>
    );
};

export default SellerProducts;
