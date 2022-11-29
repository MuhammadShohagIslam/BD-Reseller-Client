import { useState, useEffect } from "react";
import { getSellerUserByEmail } from "../api/user";
import { useAuth } from "./../context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (email) {
            getSellerUserByEmail(email)
                .then((data) => {
                    setIsSeller(data.data.isSeller);
                    setIsSellerLoading(false);
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
                    setIsSellerLoading(false);
                });
        }
    }, [email, logOut, navigate]);
    
    return [isSeller, isSellerLoading];
};

export default useSeller;
