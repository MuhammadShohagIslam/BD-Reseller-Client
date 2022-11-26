import axios from "axios";

// create new category
export const createNewCategory = async (productData) => {
    return await axios.post(
        `${process.env.REACT_APP_server_api}/categories`,
        productData
    );
};

// get all categories
export const getAllCategories = async () => {
    return await axios.get(`${process.env.REACT_APP_server_api}/categories`);
};

// update category by categoryId
export const updateCategoryByCategoryId = async (categoryId, updatedData) => {
    return await axios.patch(
        `${process.env.REACT_APP_server_api}/categories/${categoryId}`,
        updatedData
    );
};

// delete category by categoryId
export const deleteCategoryByCategoryId = async (categoryId) => {
    return await axios.delete(
        `${process.env.REACT_APP_server_api}/categories/${categoryId}`
    );
};
