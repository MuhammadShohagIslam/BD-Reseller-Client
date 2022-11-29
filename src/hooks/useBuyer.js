import { useState, useEffect } from "react";
import { getBuyerUserByEmail } from "../api/user";
import { useAuth } from "./../context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (email) {
            getBuyerUserByEmail(email)
                .then((data) => {
                    setIsBuyer(data.data.isBuyer);
                    setIsBuyerLoading(false);
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
                    setIsBuyerLoading(false);
                });
        }
    }, [email, logOut, navigate]);
    
    return [isBuyer, isBuyerLoading];
};

export default useBuyer;
