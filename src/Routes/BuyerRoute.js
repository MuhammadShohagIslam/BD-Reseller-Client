import React from "react";
import { useAuth } from "./../context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";
import useBuyer from "./../hooks/useBuyer";

const BuyerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <Loader />;
    }
    if (user && isBuyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default BuyerRoute;
