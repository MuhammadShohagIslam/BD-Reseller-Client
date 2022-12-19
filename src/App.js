import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Routes";
import ScrollToTop from "react-scroll-to-top";

function App() {
    return (
        <>
            <ScrollToTop smooth color="#000" />
            <Toaster />
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
