import React from "react";
import { AiFillDelete } from "react-icons/ai";
import SectionTitle from "./../../../../components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import {
    deleteBookingProductByProductId,
    getAllBookingProducts,
} from "../../../../api/bookingProduct";
import { useAuth } from "../../../../context/AuthProvider/AuthProvider";
import Loader from "./../../../../components/shared/Loader/Loader";
import { Link } from "react-router-dom";
import DisplayError from "./../../../DisplayError/DisplayError";

const MyOrder = () => {
    const { user } = useAuth();

    const {
        isLoading,
        refetch,
        error,
        data: allBuyerOrders = [],
    } = useQuery({
        queryKey: ["allBuyerOrders", user?.displayName, user?.email],
        queryFn: async () => {
            const data = await getAllBookingProducts(
                user?.displayName,
                user?.email
            );
            return data.data;
        },
    });

    const handleBookingOrderDelete = (buyerOrder) => {
        deleteBookingProductByProductId(buyerOrder.productId)
            .then((data) => {
                toast.success(
                    `${buyerOrder.productName}  Delete Successfully!`
                );
                refetch();
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    if (error) {
        return <DisplayError />;
    }
    return (
        <section className="container mt-8">
            <SectionTitle title="All Seller Users" />
            <div className="overflow-x-auto w-full bg-secondary mt-7 rounded-sm">
                {isLoading ? (
                    <Loader />
                ) : (
                    <table className="w-full">
                        <thead className="bg-green-300 text-primary text-left">
                            <tr>
                                <th className="text-center">Product</th>
                                <th>Price</th>
                                <th>Pay</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-primary text-left">
                            <>
                                {allBuyerOrders?.map((buyerOrder) => (
                                    <tr key={buyerOrder._id}>
                                        <td className="text-left">
                                            <div className="flex items-center justify-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img
                                                            src={
                                                                buyerOrder.productImg
                                                            }
                                                            alt={
                                                                buyerOrder.productName
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        {buyerOrder.productName}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td> {buyerOrder.price}</td>
                                        <td>
                                            <Link
                                                to={`/dashboard/payment/${buyerOrder._id}`}
                                                className="text-primary rounded-lg cursor-pointer text-lg py-1 px-4 bg-success"
                                            >
                                                Pay
                                            </Link>
                                        </td>
                                        <td>
                                            <label
                                                onClick={() =>
                                                    handleBookingOrderDelete(
                                                        buyerOrder
                                                    )
                                                }
                                            >
                                                <AiFillDelete className="h-5 w-5 cursor-pointer text-red-600" />
                                            </label>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
};

export default MyOrder;
