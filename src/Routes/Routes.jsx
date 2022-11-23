import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/blogs",
                element: <Blogs/>,
            },
        ]
    }
])

export default router;
