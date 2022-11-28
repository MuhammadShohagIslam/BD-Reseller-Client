import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineVerifiedUser } from "react-icons/md";
import SectionTitle from "./../../../../components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import {
    deleteBookingProductByProductId,
    getAllBookingProducts,
} from "../../../../api/bookingProduct";
import { useAuth } from "../../../../context/AuthProvider/AuthProvider";
import Loader from "./../../../../components/shared/Loader/Loader";

const MyOrder = () => {
    const { user } = useAuth();

    const {
        isLoading,
        refetch,
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

    const handleBookingOrderDelete = (productId) => {
        deleteBookingProductByProductId(productId)
            .then((data) => {
                toast.success(`${user.name}  Delete Successfully!`);
                refetch();
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
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
                                <th className="text-center">Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Delete</th>
                                <th>Verified</th>
                            </tr>
                        </thead>
                        <tbody className="text-primary text-left">
                            <>
                                {allBuyerOrders?.map((buyerOrder) => (
                                    <tr key={user._id}>
                                        <td className="text-left">
                                            <div className="flex items-center justify-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img
                                                            src={
                                                                user.profileImage
                                                            }
                                                            alt={user.name}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        {user.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Carroll</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <label
                                                onClick={() =>
                                                    handleBookingOrderDelete(user)
                                                }
                                            >
                                                <AiFillDelete className="h-5 w-5 cursor-pointer text-red-600" />
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <MdOutlineVerifiedUser className="h-5 w-5 text-green-600" />
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
