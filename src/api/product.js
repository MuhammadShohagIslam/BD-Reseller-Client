import axios from "axios";

// create new product
export const createNewProduct = async (productData) => {
    return await axios.post(
        `${process.env.REACT_APP_server_api}/products`,
        productData
    );
};

// get all products
export const getAllProducts = async (page, size, categoryName) => {
    return await axios.get(
        `${process.env.REACT_APP_server_api}/products?categoryName=${categoryName}&page=${page}&size=${size}`
    );
};

// get all seller products
export const getAllSellerProducts = async (page, size, sellerEmail) => {
    return await axios.get(
        `${process.env.REACT_APP_server_api}/seller/products?page=${page}&size=${size}&sellerEmail=${sellerEmail}`
    );
};

// get all top most offer products
export const getAllTopOfferProducts = async (page, size) => {
    return await axios.get(
        `${process.env.REACT_APP_server_api}/products/topOffer?page=${page}&size=${size}`
    );
};

// get all products by isAdvertise
export const getAllProductsByAdvertise = async (isAdvertise) => {
    return await axios.get(
        `${process.env.REACT_APP_server_api}/products/advertise/${isAdvertise}`
    );
};

// update product by productId
export const updateProductByProductId = async (productId, updatedData) => {
    return await axios.patch(
        `${process.env.REACT_APP_server_api}/products/${productId}`,
        updatedData,
        {
            headers: {
                authorization: `${localStorage.getItem("bdSeller-token")}`,
            },
        }
    );
};

// delete product by productId
export const deleteProductByProductId = async (productId) => {
    return await axios.delete(
        `${process.env.REACT_APP_server_api}/products/${productId}`
    );
};
