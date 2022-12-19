import React, { useState } from "react";
import BookingForm from "./../../../components/shared/BookingForm/BookingForm";
import Product from "./../../../components/shared/Product/Product";
import SectionTitle from "./../../../components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { getAllTopOfferProducts } from "./../../../api/product";
import Loader from "./../../../components/shared/Loader/Loader";
import Pagination from "../../../components/shared/Pagination/Pagination";
import DisplayError from "./../../DisplayError/DisplayError";
import useDimensions from './../../../hooks/useDimensions';
import useBookingWishList from './../../../hooks/useBookingWishList';

const TopOfferProduct = () => {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const {pageSize} = useDimensions();
    const pages = Math.ceil(count / pageSize);

    const {
        user,
        bookingProduct,
        closeModal,
        loadingBookingProduct,
        loadingWishList,
        bookingProductRefetch,
        bookingError,
        bookingProducts,
        wishListError,
        wishLists,
        addToWishList,
        addToBookNow,
    } = useBookingWishList();
    
    const { isLoading, error, data } = useQuery({
        queryKey: ["allTopOfferProducts", page, pageSize],
        queryFn: async () => {
            const data = await getAllTopOfferProducts(page, pageSize);
            setCount(data.data.totalProduct);
            return data.data.products;
        },
    });

    if (error && wishListError && bookingError) {
        return <DisplayError />;
    }

    return (
        <section className="container mt-12">
            <SectionTitle title={`Top Most Offer Product`} />
            {isLoading || loadingWishList || loadingBookingProduct ? (
                <Loader height="h-[572px]"/>
            ) : (
                <div className="grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-6">
                    {data?.length > 0 ? (
                        <>
                            {data?.map((product) => (
                                <Product
                                    key={product._id}
                                    product={product}
                                    addToBookNow={addToBookNow}
                                    addToWishList={addToWishList}
                                    wishLists={wishLists}
                                    bookingProducts={bookingProducts}
                                    user={user}
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

            {bookingProduct && (
                <BookingForm
                    bookingProduct={bookingProduct}
                    user={user}
                    closeModal={closeModal}
                    bookingProductRefetch={bookingProductRefetch}
                />
            )}
        </section>
    );
};

export default TopOfferProduct;
