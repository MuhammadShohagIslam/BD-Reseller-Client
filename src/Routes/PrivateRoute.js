import React from "react";
import { useAuth } from './../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <Loader/>
        );
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace={true}/>;
};

export default PrivateRouter;
