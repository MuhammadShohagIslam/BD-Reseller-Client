import axios from "axios";

// create new product
export const createNewProduct = async (productData) => {
    return await axios.post(
        `${process.env.REACT_APP_server_api}/products`,
        productData
    );
};

// get all products
export const getAllProducts = async (page, size,categoryName) => {
    return await axios.get(`${process.env.REACT_APP_server_api}/products?categoryName=${categoryName}&page=${page}&size=${size}`);
};

// update product by productId
export const updateProductByProductId = async (productId, updatedData) => {
    return await axios.patch(
        `${process.env.REACT_APP_server_api}/products/${productId}`,
        updatedData
    );
};

// delete product by productId
export const deleteProductByProductId = async (productId) => {
    return await axios.delete(
        `${process.env.REACT_APP_server_api}/products/${productId}`
    );
};
