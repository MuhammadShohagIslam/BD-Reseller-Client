import axios from 'axios';

export const createNewProduct = async (productData) => {
    return await axios.post(`${process.env.REACT_APP_server_api}/products`, productData);
}
export const getAllProducts = async () => {
    return await axios.get(`${process.env.REACT_APP_server_api}/products`);
}

