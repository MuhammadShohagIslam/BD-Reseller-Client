import { useState, useEffect } from "react";
import { getSellerUserByEmail } from "../api/user";

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            getSellerUserByEmail(email)
                .then((data) => {
                    setIsSeller(data.data.isSeller);
                    setIsSellerLoading(false);
                })
                .catch((error) => {
                    console.log(error.message);
                    setIsSellerLoading(false);
                });
        }
    }, [email]);
    return [isSeller, isSellerLoading];
};

export default useSeller;
