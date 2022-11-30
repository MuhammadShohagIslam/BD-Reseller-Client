import React from "react";
import { useAuth } from "./../../context/AuthProvider/AuthProvider";
import useAdmin from "./../../hooks/useAdmin";
import useSeller from "./../../hooks/useSeller";

const Dashboard = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    return (
        <section className="container h-screen flex justify-center py-10">
            <div className="text-center italic text-primary text-5xl sm:text-2xl md:text-3xl space-y-4 sm:space-y-2 md:space-y-2">
                <h2>Welcome To The</h2>
                <h2>
                    ''' 
                    <span className="text-success">
                        {isAdmin ? "Admin" : isSeller ? "Seller" : "User"}
                    </span>
                    '''
                </h2>
                <h2>DashBoard</h2>
            </div>
        </section>
    );
};

export default Dashboard;
