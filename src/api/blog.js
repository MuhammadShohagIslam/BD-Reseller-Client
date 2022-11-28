import axios from "axios";

//  get all blogs
export const getAllBlogs = async (page, size) => {
    return await axios.get(`${process.env.REACT_APP_server_api}/blogs?page=${page}&size=${size}`);
};

// get blog by blogId
export const getBlogByBlogId = async (blogId) => {
    return await axios.get(
        `${process.env.REACT_APP_server_api}/blogs/${blogId}`
    );
};
