import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Routes";

function App() {
    return (
        <>
            <Toaster />
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
