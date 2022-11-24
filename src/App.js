import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home/Home";
import ProductsByCategory from './pages/ProductsByCategory/ProductsByCategory';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/productsByCategory/:categoryId" element={<ProductsByCategory />} />
        </Routes>
    );
}

export default App;
