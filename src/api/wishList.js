import axios from "axios";

// create new wish-list product
export const createNewWishListProduct = async (wishListData) => {
    return await axios.post(
        `${process.env.REACT_APP_server_api}/products/wishLists`,
        wishListData
    );
};

// get all wish-list products
export const getAllWishListProducts = async () => {
    return await axios.get(`${process.env.REACT_APP_server_api}/wishLists`);
};


// delete wish-list product by productId
export const deleteWishListProductByProductId = async (productId) => {
    return await axios.delete(
        `${process.env.REACT_APP_server_api}/products/wishLists/${productId}`
    );
};
