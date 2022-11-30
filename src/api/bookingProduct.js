import axios from "axios";

// create new booking product
export const createNewBookingProduct = async (productBookingData) => {
    return await axios.post(
        `${process.env.REACT_APP_server_api}/products/bookings`,
        productBookingData
    );
};

// get all booking product
export const getAllBookingProducts = async (userName, userEmail) => {
    return await axios.get(
        `${process.env.REACT_APP_server_api}/bookings?userName=${userName}&userEmail=${userEmail}`,{
            headers:{
                authorization: `${localStorage.getItem("bdSeller-token")}`
            }
        }
    );
};

// update booking product by productId
export const updateBookingProductByProductId = async (productId, updatedData) => {
    return await axios.patch(
        `${process.env.REACT_APP_server_api}/bookings/${productId}`,
        updatedData
    );
};

// delete booking product by productId
export const deleteBookingProductByProductId = async (productId) => {
    return await axios.delete(
        `${process.env.REACT_APP_server_api}/bookings/${productId}`
    );
};
