import React from "react";
import { useAuth } from './../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";
import useSeller from "./../hooks/useSeller";

const SellerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isSeller, isSellerLoading] = useSeller(user?.email);

    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loader />;
    }
    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default SellerRoute;
