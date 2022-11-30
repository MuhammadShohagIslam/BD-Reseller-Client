import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { createJwtToken } from "./../../api/user";
import { toast } from "react-hot-toast";
import { useAuth } from "./../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const {
        loginWithEmailAndPassword,
        registerAndLoginWithProvider,
        setLoading,
    } = useAuth();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(from);

    const handleLogin = (data) => {
        const { email, password } = data;
        loginWithEmailAndPassword(email, password)
            .then((result) => {
                const user = result?.user;
                const currentUser = {
                    name: user?.displayName,
                    email: user?.email,
                };
                createJwtToken(currentUser)
                    .then((tokenData) => {
                        const data = tokenData.data;
                        localStorage.setItem("bdSeller-token", `Bearer ${data.token}`);
                        reset();
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: "Login Successfully",
                            showConfirmButton: false,
                            timer: 2500,
                        });
                        navigate(from, { replace: true });
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                toast.error(error.message.split("Firebase: ").join(""));
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleSignUpWithProvider = (event, providerName) => {
        event.preventDefault();
        if (providerName === "google") {
            popupForSignInProvider(googleProvider);
        }
    };

    const popupForSignInProvider = (provider) => {
        registerAndLoginWithProvider(provider)
            .then((result) => {
                const userCredential = result?.user;
                const currentUser = {
                    name: userCredential?.displayName,
                    email: userCredential?.email,
                };

                createJwtToken(currentUser)
                    .then((tokenData) => {
                        const data = tokenData.data;
                        localStorage.setItem("bdSeller-token", `Bearer ${data.token}`);
                        navigate(from, { replace: true });
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                toast.error(error?.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <div className="container my-14 sm:my-8">
            <div className="w-[560px] sm:w-[280px] m-auto p-8 sm:p-4 bg-secondary rounded-lg">
                <h2 className="text-center font-medium text-primary text-2xl">
                    Login Now!
                </h2>
                <div className="space-y-2 mt-4">
                    <button
                        onClick={(e) => handleSignUpWithProvider(e, "google")}
                        className="btn btn-success bg-success text-primary hover:bg-transparent hover:text-primary border-2 btn-block"
                    >
                        <FaGoogle className="text-lg mr-1" />
                        Connection With Google
                    </button>
                </div>
                <h2 className="text-center font-medium text-primary text-xl mt-3">
                    Or
                </h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="mb-3">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-primary"
                        >
                            Email
                        </label>
                        <input
                            {...register("email", {
                                required: "Email Address Is Required!",
                            })}
                            type="email"
                            placeholder="Enter Your Email"
                            className="input input-bordered input-success w-full text-primary"
                        />
                        {errors.email && (
                            <p className="text-red-600">
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-primary"
                        >
                            Password
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password should be 6 characters or longer",
                                },
                            })}
                            type="password"
                            placeholder="Enter Your Password"
                            className="input input-bordered input-success w-full text-primary"
                        />

                        <label className="label cursor-pointer">
                            <span className="text-primary font-medium text-sm sm:text-sm">
                                Forget Password?
                            </span>
                        </label>
                        {errors.password && (
                            <p className="text-red-600">
                                {errors.password?.message}
                            </p>
                        )}
                    </div>
                    <input
                        type="submit"
                        className="btn btn-primary text-white hover:bg-transparent hover:text-primary border-2"
                        value="Login"
                    />
                </form>
                <hr className="my-4"></hr>
                <p className="text-primary">
                    If You Do Not Have Account?{" "}
                    <Link className="text-success" to="/register">
                        Register Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
