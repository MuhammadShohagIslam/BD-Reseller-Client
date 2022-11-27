import axios from "axios";

// create jwt token
export const createJwtToken = async (userData) => {
    return await axios.post(
        `${process.env.REACT_APP_server_api}/createJwtToken`,
        userData
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

// remove users by userEmail
export const removedUsersByEmail = async (email) => {
    return await axios.delete(
        `${process.env.REACT_APP_server_api}/users?email=${email}`
    );
};