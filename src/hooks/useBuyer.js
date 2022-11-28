import { useState, useEffect } from "react";
import { getBuyerUserByEmail } from "../api/user";

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            getBuyerUserByEmail(email)
                .then((data) => {
                    setIsBuyer(data.data.isBuyer);
                    setIsBuyerLoading(false);
                })
                .catch((error) => {
                    console.log(error.message);
                    setIsBuyerLoading(false);
                });
        }
    }, [email]);
    return [isBuyer, isBuyerLoading];
};

export default useBuyer;
