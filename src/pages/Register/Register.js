import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import { useAuth } from "./../../context/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { createJwtToken, createNewUser } from "../../api/user";
import axios from "axios";

const Register = () => {
    const [loadingRegister, setLoadingRegister] = useState(false);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgdb_key}`;
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const {
        createUser,
        setUser,
        userProfileUpdate,
        registerAndLoginWithProvider,
        setLoading,
    } = useAuth();

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleRegister = (data) => {
        const profileURL = data.profileImg[0];
        const { name, password, email, role } = data;

        const formData = new FormData();
        formData.append("image", profileURL);
        setLoadingRegister(true);
        axios
            .post(url, formData)
            .then((imgData) => {
                const productImgUrl = imgData.data.data.url;
                createUser(email, password)
                    .then((result) => {
                        handleProfileUpdate(name, productImgUrl, role);
                        const userCredential = result?.user;
                        const currentUser = {
                            name: userCredential?.displayName || name,
                            email: userCredential?.email || email,
                        };

                        createJwtToken(currentUser)
                            .then((tokenData) => {
                                const userData = {
                                    ...currentUser,
                                    profileImage: productImgUrl,
                                    role: role,
                                };
                                const data = tokenData.data;
                                localStorage.setItem(
                                    "bdSeller-token",
                                    data.token
                                );
                                saveNewUser(userData);
                                setUser(result?.user);
                                reset();
                                navigate("/");
                                setLoading(false);
                                setLoadingRegister(false);
                            })
                            .catch((error) => {
                                setLoading(false);
                                console.log(error.message);
                                setLoadingRegister(false);
                            });
                    })
                    .catch((error) => {
                        setLoading(false);
                        setLoadingRegister(false);
                        toast.error(error.message.split("Firebase: ").join(""));
                    });
            })
            .catch((error) => {
                setLoading(false);
                setLoadingRegister(false);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
                setLoadingRegister(false);
            });
    };

    const handleProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL,
        };
        userProfileUpdate(profile)
            .then((result) => {})
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const saveNewUser = (userData) => {
        createNewUser(userData)
            .then((data) => {})
            .catch((error) => {
                console.log(error.message);
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
                const userCredential = result.user;
                const currentUser = {
                    name: userCredential?.displayName,
                    email: userCredential?.email,
                };

                createJwtToken(currentUser)
                    .then((tokenData) => {
                        const userData = {
                            ...currentUser,
                            profileImage: userCredential?.photoURL,
                            role: "user",
                        };
                        const data = tokenData.data;
                        localStorage.setItem("bdSeller-token", data.token);
                        saveNewUser(userData);
                        navigate("/");
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
                    Register Now!
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
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="mb-3">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-primary"
                        >
                            Name
                        </label>
                        <input
                            {...register("name", {
                                required: "Name Is Required!",
                            })}
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered input-success w-full text-primary"
                        />
                        {errors.name && (
                            <p className="text-red-600">
                                {errors.name?.message}
                            </p>
                        )}
                    </div>
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
                            htmlFor="profileImg"
                            className="block mb-2 text-sm font-medium text-primary"
                        >
                            Select Profile Picture
                        </label>
                        <input
                            type="file"
                            {...register("profileImg", {
                                required: "Profile Picture Is Required!",
                            })}
                            accept="image/*"
                            className="file-input text-primary file-input-bordered file-input-success"
                        />
                        {errors.profileImg && (
                            <p className="text-red-600">
                                {errors.profileImg?.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="role"
                            className="block mb-2 text-sm font-medium text-primary"
                        >
                            Role
                        </label>
                        <select
                            className="select select-success w-full max-w-xs text-primary text-base"
                            {...register("role")}
                        >
                            <option disabled className="text-primary text-base">
                                Pick Your Role
                            </option>
                            <option
                                className="text-primary text-base"
                                value="user"
                            >
                                user
                            </option>
                            <option
                                value="seller"
                                className="text-primary text-base"
                            >
                                seller
                            </option>
                        </select>
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
                        {errors.password && (
                            <p className="text-red-600">
                                {errors.password?.message}
                            </p>
                        )}
                    </div>
                    <button
                        disabled={loadingRegister}
                        type="submit"
                        className="btn block hover:bg-transparent hover:text-primary text-white btn-primary disabled:opacity-75 disabled:border-2 disabled:border-primary disabled:text-primary mt-2"
                    >
                        {loadingRegister ? "Loading" : "Register"}
                    </button>
                </form>
                <hr className="my-4"></hr>
                <p className="text-primary">
                    Already Do You Have a Account?{" "}
                    <Link className="text-success" to="/login">
                        Login Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
