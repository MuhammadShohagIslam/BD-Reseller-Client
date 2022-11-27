import React from "react";
import { AiFillDelete } from "react-icons/ai";
import SectionTitle from "./../../../../components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { getAllUsersByRole, removedUsersByEmail } from "./../../../../api/user";
import Loader from "./../../../../components/shared/Loader/Loader";
import { toast } from "react-hot-toast";

const AllBuyers = () => {
    const {
        isLoading,
        refetch,
        data: allUsers = [],
    } = useQuery({
        queryKey: ["buyers"],
        queryFn: async () => {
            const data = await getAllUsersByRole("user");
            return data.data;
        },
    });

    const handleUserDelete = (user) => {
        const { email } = user;
        removedUsersByEmail(email).then((data) => {
            toast.success(`${user.name}  Delete Successfully!`);
            refetch();
            refetch();
        });
    };

    return (
        <section className="container mt-8">
            <SectionTitle title="All Buyers Users" />
            <div className="overflow-x-auto w-full bg-secondary mt-7 rounded-sm">
                {isLoading ? (
                    <Loader />
                ) : (
                    <table className="w-full">
                        <thead className="bg-green-300 text-primary">
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-primary text-center">
                            <>
                                {allUsers?.map((user) => (
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
                                        <td> {user.email}</td>
                                        <td className="flex justify-center items-center ">
                                            <label
                                                onClick={() =>
                                                    handleUserDelete(user)
                                                }
                                                className="w-12 h-12 flex items-center cursor-pointer"
                                            >
                                                <AiFillDelete className="h-5 w-5 text-red-600" />
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

export default AllBuyers;
