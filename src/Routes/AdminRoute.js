import React from "react";
import { useAuth } from './../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";
import useAdmin from "./../hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    const location = useLocation();
    console.log(location);
    if (loading || isAdminLoading) {
        return <Loader />;
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default AdminRoute;
