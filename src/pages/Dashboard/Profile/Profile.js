import React from "react";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    return (
        <>
            <Helmet>
                <title>Account Setting</title>
            </Helmet>
            <section className="container h-screen flex justify-center py-10">
                <div className="text-center italic text-success text-5xl sm:text-2xl md:text-3xl space-y-4 sm:space-y-2 md:space-y-2">
                    <h2>Coming Soon...</h2>
                </div>
            </section>
        </>
    );
};

export default Profile;
