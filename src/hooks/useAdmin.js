import { useState, useEffect } from "react";
import { getAdminUserByEmail } from "../api/user";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            getAdminUserByEmail(email)
                .then((data) => {
                    setIsAdmin(data.data.isAdmin);
                    setIsAdminLoading(false);
                })
                .catch((error) => {
                    console.log(error.message);
                    setIsAdminLoading(false);
                });
        }
    }, [email]);

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
