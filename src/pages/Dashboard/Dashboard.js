import React, { useState, useEffect } from "react";
import Loader from "../../components/shared/Loader/Loader";
import { useAuth } from "./../../context/AuthProvider/AuthProvider";
import useAdmin from "./../../hooks/useAdmin";
import useSeller from "./../../hooks/useSeller";
import { Helmet } from "react-helmet-async";
import useBuyer from "./../../hooks/useBuyer";

const Dashboard = () => {
    const { user } = useAuth();
    const [fetching, setFetching] = useState(true);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    useEffect(() => {
        setTimeout(() => {
            setFetching(false);
        }, 800);
    }, [fetching]);

    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>

            {fetching ? (
                <Loader />
            ) : (
                <section className="container h-screen flex justify-center py-10">
                    <div className="text-center italic text-primary text-5xl sm:text-2xl md:text-3xl space-y-4 sm:space-y-2 md:space-y-2">
                        <h2>Welcome To The</h2>
                        <h2>
                            '''
                            <span className="text-success">
                                {isAdmin
                                    ? "Admin"
                                    : isSeller
                                    ? "Seller"
                                    : isBuyer
                                    ? "User"
                                    : ""}
                            </span>
                            '''
                        </h2>
                        <h2>DashBoard</h2>
                    </div>
                </section>
            )}
        </>
    );
};

export default Dashboard;
