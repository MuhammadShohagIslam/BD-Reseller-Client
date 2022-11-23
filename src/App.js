import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
        </Routes>
    );
}

export default App;
