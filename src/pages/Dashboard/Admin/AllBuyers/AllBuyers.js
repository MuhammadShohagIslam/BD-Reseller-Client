import React from "react";
import { AiFillDelete } from "react-icons/ai";
import SectionTitle from "./../../../../components/shared/SectionTitle/SectionTitle";

const AllBuyers = () => {
    return (
        <section className="container mt-8">
            <SectionTitle title="All Buyers Users" />
            <div className="overflow-x-auto w-full bg-secondary mt-7 rounded-sm">
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
                        <tr>
                            <td className="text-left">
                                <div className="flex items-center justify-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src="/tailwind-css-component-profile-3@56w.png"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Brice Swyre
                                        </div>
                                        <div className="text-sm opacity-50">
                                            China
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>Carroll</td>
                            <td>Red</td>
                            <td className="flex justify-center items-center ">
                                <label className="w-12 h-12 flex items-center cursor-pointer">
                                    <AiFillDelete className="h-5 w-5 text-red-600" />
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllBuyers;
