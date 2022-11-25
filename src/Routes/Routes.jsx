import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductsByCategory from "./../pages/ProductsByCategory/ProductsByCategory";
import Dashboard from "./../pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import SellerProducts from "../pages/Dashboard/SellerProducts/SellerProducts";

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
                path: "/dashboard/allProducts",
                element: <SellerProducts />,
            },
        ],
    },
]);

export default router;
