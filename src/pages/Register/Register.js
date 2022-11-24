import React from "react";
import { useForm } from "react-hook-form";
import Main from "./../../Layout/Main";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const handleRegister = (data) => {
        console.log(data);
    };

    const handleSignUpWithProvider = () => {};
    return (
        <Main>
            <div className="container my-14 sm:my-8">
                <div className="w-[560px] sm:w-[280px] m-auto p-8 sm:p-4 bg-secondary rounded-lg">
                    <h2 className="text-center font-medium text-primary text-2xl">
                        Register Now!
                    </h2>
                    <div className="space-y-2 mt-4">
                        <button
                            onClick={(e) =>
                                handleSignUpWithProvider(e, "google")
                            }
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
                                className="file-input text-primary file-input-bordered file-input-success w-[7.4rem]"
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
                                <option
                                    disabled
                                    className="text-primary text-base"
                                >
                                    Pick Your Role
                                </option>
                                <option
                                    defaultValue={"user"}
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
                            <label className="label cursor-pointer">
                                <span className="text-primary font-medium text-base sm:text-sm">
                                    Forget Password?
                                </span>
                            </label>
                        </div>
                        <input
                            type="submit"
                            className="btn btn-primary text-white hover:bg-transparent hover:text-primary border-2"
                            value="Register"
                        />
                    </form>
                </div>
            </div>
        </Main>
    );
};

export default Register;
