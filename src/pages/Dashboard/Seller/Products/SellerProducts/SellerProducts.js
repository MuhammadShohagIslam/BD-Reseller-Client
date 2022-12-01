import React, { useState } from "react";
import SectionTitle from "./../../../../../components/shared/SectionTitle/SectionTitle";
import SellerProduct from "./../../../../../components/shared/SellerProduct/SellerProduct";
import { useQuery } from "@tanstack/react-query";
import {
    deleteProductByProductId,
    getAllSellerProducts,
    updateProductByProductId,
} from "../../../../../api/product";
import Loader from "./../../../../../components/shared/Loader/Loader";
import { toast } from "react-hot-toast";
import Pagination from "../../../../../components/shared/Pagination/Pagination";
import DisplayError from "./../../../../DisplayError/DisplayError";
import useDimensions from "./../../../../../hooks/useDimensions";
import { useAuth } from "../../../../../context/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const SellerProducts = () => {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const { pageSize } = useDimensions();
    const { user } = useAuth();
    const pages = Math.ceil(count / pageSize);

    const { isLoading, error, refetch, data } = useQuery({
        queryKey: ["sellerAllProducts", page, pageSize, user?.email],
        queryFn: async () => {
            const data = await getAllSellerProducts(
                page,
                pageSize,
                user?.email
            );
            setCount(data.data.totalProduct);
            return data.data.products;
        },
    });

    const handleDeleteProduct = (productId) => {
        deleteProductByProductId(productId)
            .then((data) => {
                toast.error("Product Delete Successfully");
                refetch();
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleAdvertisingProduct = (product, isAdvertised) => {
        if (isAdvertised) {
            const updatedData = {
                ...product,
                isAdvertised: false,
            };
            delete updatedData._id;
            delete updatedData.createdAdvertised;
            updateProductByProductId(product._id, updatedData)
                .then((data) => {
                    toast.error("Product is Removed For Advertised!");
                    refetch();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        } else {
            const updatedData = {
                ...product,
                isAdvertised: true,
                createdAdvertised: Date.now(),
            };
            delete updatedData._id;
            updateProductByProductId(product._id, updatedData)
                .then((data) => {
                    toast.success("Product is Selected For Advertised!");
                    refetch();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    if (error) {
        return <DisplayError />;
    }

    return (
        <>
            <Helmet>
                <title>Seller Products</title>
            </Helmet>
            <div className="container my-10">
                <SectionTitle title="All Products of Seller" />

                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-7 gap-5">
                        {data?.length > 0 ? (
                            <>
                                {data?.map((product) => (
                                    <SellerProduct
                                        key={product._id}
                                        product={product}
                                        handleDeleteProduct={
                                            handleDeleteProduct
                                        }
                                        handleAdvertisingProduct={
                                            handleAdvertisingProduct
                                        }
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

                <Pagination pages={pages} page={page} setPage={setPage} />
            </div>
        </>
    );
};

export default SellerProducts;
