import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home/Home";
import ProductsByCategory from "./pages/ProductsByCategory/ProductsByCategory";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import DashboardLayout from "./Layout/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route
                path="/productsByCategory/:categoryId"
                element={<ProductsByCategory />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App;
