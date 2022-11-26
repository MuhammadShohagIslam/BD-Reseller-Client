import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            {" "}
            <AuthProvider>
                <App />
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);

reportWebVitals();
