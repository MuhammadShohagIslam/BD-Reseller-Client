import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineVerifiedUser } from "react-icons/md";
import SectionTitle from "./../../../../components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import {
    getAllUsersByRole,
    removedUsersByEmail,
    verifiedSellerByAdmin,
} from "./../../../../api/user";
import Loader from "./../../../../components/shared/Loader/Loader";
import { toast } from "react-hot-toast";
import DisplayError from "../../../DisplayError/DisplayError";
import { useAuth } from "./../../../../context/AuthProvider/AuthProvider";
import { useLocation, Navigate } from "react-router-dom";
import { deleteProductBySellerEmail } from "./../../../../api/product";
import { Helmet } from "react-helmet-async";

const AllSellers = () => {
    const { logOut } = useAuth();
    const location = useLocation();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                return (
                    <Navigate
                        to="/login"
                        state={{ from: location }}
                        replace={true}
                    />
                );
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const {
        isLoading,
        refetch,
        error,
        data: allSellers = [],
    } = useQuery({
        queryKey: ["sellers"],
        queryFn: async () => {
            try {
                const data = await getAllUsersByRole("seller");
                return data?.data;
            } catch (error) {
                if (error.response.status === 403) {
                    handleLogOut();
                }
            }
        },
    });
    const handleSellerVerified = (seller) => {
        const updatedData = {
            ...seller,
            isVerified: true,
        };
        delete updatedData._id;
        verifiedSellerByAdmin(seller.email, updatedData)
            .then((data) => {
                toast.success(`${seller.name}  is Verified Successfully!`);
                refetch();
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    handleLogOut();
                }
            });
    };

    const handleSellerDelete = (seller) => {
        const { email } = seller;
        removedUsersByEmail(email)
            .then((data) => {
                deleteProductBySellerEmail(email)
                    .then((data) => {
                        toast.success(
                            `${seller.name} Delete Successfully and All Products!`
                        );
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
                refetch();
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    handleLogOut();
                }
            });
    };
    if (error) {
        return <DisplayError />;
    }
    return (
        <>
            <Helmet>
                <title>AllSellers</title>
            </Helmet>
            <section className="container mt-8">
                <SectionTitle title="All Seller Users" />
                <div className="overflow-x-auto w-full bg-secondary mt-7 rounded-sm">
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <table className="w-full">
                            <thead className="bg-green-300 text-primary text-left">
                                <tr>
                                    <th className="text-center">Profile</th>
                                    <th>Email</th>
                                    <th>Delete</th>
                                    <th>Verified</th>
                                </tr>
                            </thead>
                            <tbody className="text-primary text-left">
                                <>
                                    {allSellers?.map((seller) => (
                                        <tr key={seller._id}>
                                            <td className="text-left">
                                                <div className="flex items-center justify-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img
                                                                src={
                                                                    seller.profileImage
                                                                }
                                                                alt={
                                                                    seller.name
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">
                                                            {seller.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>{seller.email}</td>
                                            <td>
                                                <label
                                                    onClick={() =>
                                                        handleSellerDelete(
                                                            seller
                                                        )
                                                    }
                                                >
                                                    <AiFillDelete className="h-5 w-5 cursor-pointer text-red-600" />
                                                </label>
                                            </td>
                                            <td>
                                                <label
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        handleSellerVerified(
                                                            seller
                                                        )
                                                    }
                                                >
                                                    <MdOutlineVerifiedUser
                                                        className={`h-5 w-5  ${
                                                            seller?.isVerified
                                                                ? "text-green-600"
                                                                : "text-primary"
                                                        }`}
                                                    />
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
        </>
    );
};

export default AllSellers;
