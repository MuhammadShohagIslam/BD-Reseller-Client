import React from "react";
import { useRouteError, Link, useNavigate } from "react-router-dom";
import ErrorImage from "../../assets/error/error.jpg";
import { useAuth } from "./../../context/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const DisplayError = () => {
    const { logOut } = useAuth();
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <>
            <Helmet>
                <title>Error</title>
            </Helmet>
            <section className="w-10/12 pt-4 m-auto h-screen flex sm:block sm:pb-11 justify-center items-center">
                <div>
                    <img
                        className="w-96 h-96 rounded-full m-auto"
                        src={ErrorImage}
                        alt="error page"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-red-400 text-5xl mb-3">
                        {error?.statusText}
                    </h2>

                    <p className="text-success">
                        Please{" "}
                        <button
                            className="text-red cursor-pointer btn btn-success"
                            onClick={handleLogOut}
                        >
                            LogOut
                        </button>{" "}
                        and{" "}
                        <Link to="/login">
                            <button className="text-red cursor-pointer btn btn-success">
                                Login
                            </button>
                        </Link>{" "}
                        Back In
                    </p>
                </div>
            </section>
        </>
    );
};

export default DisplayError;
