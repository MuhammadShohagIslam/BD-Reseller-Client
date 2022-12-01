import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "swiper/css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <HelmetProvider context={helmetContext}>
                    <App />
                </HelmetProvider>
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);

reportWebVitals();
