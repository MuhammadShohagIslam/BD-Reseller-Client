import { useState, useEffect } from "react";
import { getAdminUserByEmail } from "../api/user";
import { useAuth } from "./../context/AuthProvider/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (email) {
            getAdminUserByEmail(email)
                .then((data) => {
                    setIsAdmin(data.data.isAdmin);
                    setIsAdminLoading(false);
                })
                .catch((error) => {
                    if (error.response.status === 403) {
                        logOut()
                            .then(() => {
                                navigate("/login");
                            })
                            .catch((error) => {
                                console.log(error.message);
                            });
                    }
                    setIsAdminLoading(false);
                });
        }
    }, [email, logOut, navigate]);

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
