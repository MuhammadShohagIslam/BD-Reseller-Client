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
import AllBuyers from "./../pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../pages/Dashboard/Admin/AllSellers/AllSellers";
import UpdateProduct from "../pages/Dashboard/Seller/Products/UpdateProduct/UpdateProduct";
import MyOrder from "../pages/Dashboard/Buyer/MyOrder/MyOrder";
import BlogDetails from "../pages/Blogs/BlogDetails/BlogDetails";
import DisplayError from "../pages/DisplayError/DisplayError";
import MyBuyers from "../pages/Dashboard/Seller/MyBuyers/MyBuyers";
import AdminRoute from "./AdminRoute";
import PrivateRouter from "./PrivateRoute";
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";
import Payment from "../pages/Dashboard/Payment/Payment";
import Dashboard from "./../pages/Dashboard/Dashboard";
import Profile from "../pages/Dashboard/Profile/Profile";
import AccountSetting from "../pages/Dashboard/AccountSetting/AccountSetting";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <DisplayError />,
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
                path: "/blogs/:blogId",
                element: <BlogDetails />,
                loader: ({ params }) =>
                    fetch(
                        `${process.env.REACT_APP_server_api}/blogs/${params.blogId}`
                    ),
            },
            {
                path: "/productsByCategory/:categoryName",
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
        element: (
            <PrivateRouter>
                <DashboardLayout></DashboardLayout>
            </PrivateRouter>
        ),
        errorElement: <DisplayError />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/dashboard/admin/allBuyers",
                element: (
                    <AdminRoute>
                        <AllBuyers />
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/admin/allSellers",
                element: (
                    <AdminRoute>
                        <AllSellers />
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/seller/myBuyers",
                element: (
                    <SellerRoute>
                        {" "}
                        <MyBuyers />
                    </SellerRoute>
                ),
            },
            {
                path: "/dashboard/seller/allProducts",
                element: (
                    <SellerRoute>
                        <SellerProducts />
                    </SellerRoute>
                ),
            },
            {
                path: "/dashboard/seller/addProduct",
                element: (
                    <SellerRoute>
                        <AddProduct />
                    </SellerRoute>
                ),
            },
            {
                path: "/dashboard/seller/updateProduct/:productId",
                element: (
                    <SellerRoute>
                        <UpdateProduct />
                    </SellerRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `${process.env.REACT_APP_server_api}/products/${params.productId}`
                    ),
            },
            {
                path: "/dashboard/seller/allCategories",
                element: (
                    <SellerRoute>
                        <AllCategories />
                    </SellerRoute>
                ),
            },
            {
                path: "/dashboard/seller/addCategories",
                element: (
                    <SellerRoute>
                        <AddCategory />
                    </SellerRoute>
                ),
            },
            {
                path: "/dashboard/buyer/wishlist",
                element: (
                    <BuyerRoute>
                        <BuyerWishLists />
                    </BuyerRoute>
                ),
            },
            {
                path: "/dashboard/buyer/orders",
                element: (
                    <BuyerRoute>
                        <MyOrder />
                    </BuyerRoute>
                ),
            },
            {
                path: "/dashboard/payment/:orderId",
                element: (
                    <BuyerRoute>
                        <Payment />
                    </BuyerRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `${process.env.REACT_APP_server_api}/bookings/${params.orderId}`,
                        {
                            headers: {
                                authorization: `${localStorage.getItem(
                                    "bdSeller-token"
                                )}`,
                            },
                        }
                    ),
            },
            {
                path: "/dashboard/profile",
                element: <Profile />,
            },
            {
                path: "/dashboard/accountSetting",
                element: <AccountSetting />,
            },
        ],
    },
]);

export default router;
