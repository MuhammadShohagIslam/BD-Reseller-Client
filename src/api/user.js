import axios from "axios";

// create jwt token
export const createJwtToken = async (userData) => {
    return await axios.post(
        `${process.env.REACT_APP_server_api}/createJwtToken`,
        userData
    );
};

//  get admin user by email
export const getAdminUserByEmail = async (email) => {
    return await axios.get(
        `${process.env.REACT_APP_server_api}/users/admin/${email}`
    );
};

// get seller user by email
export const getSellerUserByEmail = async (email) => {
    return await axios.get(
        `${process.env.REACT_APP_server_api}/users/seller/${email}`
    );
};
// get seller user by sellerId
export const getSellerUserBySellerId = async (sellerId) => {
    return await axios.get(
        `${process.env.REACT_APP_server_api}/users/seller?sellerId=${sellerId}`
    );
};

// get seller user by email
export const getBuyerUserByEmail = async (email) => {
    return await axios.get(
        `${process.env.REACT_APP_server_api}/users/buyers/${email}`
    );
};

// create new user
export const createNewUser = async (userData) => {
    return await axios.post(
        `${process.env.REACT_APP_server_api}/users`,
        userData
    );
};

//  get all users by role
export const getAllUsersByRole = async (role) => {
    return await axios.get(
        `${process.env.REACT_APP_server_api}/users?role=${role}`
    );
};

// verified seller by admin
export const verifiedSellerByAdmin = async (sellerId, updatedData) => {
    return await axios.put(
        `${process.env.REACT_APP_server_api}/seller/${sellerId}`,
        updatedData,
        {
            headers: {
                authorization: `${localStorage.getItem("bdSeller-token")}`,
            },
        }
    );
};

// remove users by userEmail
export const removedUsersByEmail = async (email) => {
    return await axios.delete(
        `${process.env.REACT_APP_server_api}/users?email=${email}`,
        {
            headers: {
                authorization: `${localStorage.getItem("bdSeller-token")}`,
            },
        }
    );
};
