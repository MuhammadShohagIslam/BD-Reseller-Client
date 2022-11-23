import React from "react";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";

const MainLayout = ({ children }) => {
    return (
        <>
  
                <Navbar />
           
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;
