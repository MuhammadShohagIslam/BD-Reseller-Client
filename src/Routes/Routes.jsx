import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductsByCategory from "./../pages/ProductsByCategory/ProductsByCategory";
import DashboardLayout from "../Layout/DashboardLayout";
import SellerProducts from "../pages/Dashboard/Seller/SellerProducts/SellerProducts";
import AddProduct from "../pages/Dashboard/Seller/AddProduct/AddProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/blogs",
                element: <Blogs />,
            },
            {
                path: "/productsByCategory/:categoryId",
                element: <ProductsByCategory />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard/seller/allProducts",
                element: <SellerProducts />,
            },
            {
                path: "/dashboard/seller/addProduct",
                element: <AddProduct />,
            },
        ],
    },
]);

export default router;
