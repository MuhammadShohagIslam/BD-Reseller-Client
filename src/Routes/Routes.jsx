import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductsByCategory from "./../pages/ProductsByCategory/ProductsByCategory";
import DashboardLayout from "../Layout/DashboardLayout";
import SellerProducts from "../pages/Dashboard/Seller/Products/SellerProducts/SellerProducts";
import AddProduct from "../pages/Dashboard/Seller/Products/AddProduct/AddProduct";
import BuyerWishLists from "../pages/Dashboard/Buyer/BuyerWishLists/BuyerWishLists";
import AllCategories from "../pages/Dashboard/Seller/Categories/AllCategories/AllCategories";
import AddCategory from "../pages/Dashboard/Seller/Categories/AddCategory/AddCategory";

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
            {
                path: "/dashboard/seller/allCategories",
                element: <AllCategories/>,
            },
            {
                path: "/dashboard/seller/addCategories",
                element: <AddCategory/>,
            },
            {
                path: "/dashboard/buyer/wishlist",
                element: <BuyerWishLists/>,
            },
           
        ],
    },
]);

export default router;
