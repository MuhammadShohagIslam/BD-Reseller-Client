import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const handleLogin = (data) => {
        console.log(data);
    };

    const handleSignUpWithProvider = () => {};
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
                            <span className="text-primary font-medium text-lg sm:text-sm">
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
            </div>
        </div>
    );
};

export default Login;
