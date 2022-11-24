import React from "react";
import BannerImg from "../../../assets/banner/laptop.jpg";
import AdvertiseImg from "../../../assets/advertise/Laptop.png";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

const Advertise = () => {
    return (
        <section
            className="grid grid-cols-2 sm:grid-cols-1 bg-fixed relative before:content-[''] before:w-full before:h-full before:left-0 before:top-0 before:absolute before:bg-success before:opacity-90 py-4"
            style={{ backgroundImage: `url(${BannerImg})` }}
        >
            <div className="z-20 relative">
                <img
                    className="h-96 sm:h-60 w-full"
                    src={AdvertiseImg}
                    alt="advertised product"
                />
            </div>
            <div className="z-20 sm:p-4 relative flex items-center">
                <div className="space-y-3">
                    <h2 className="text-6xl sm:text-4xl uppercase text-white font-bold">
                        Summer <span>Offer</span>
                    </h2>
                    <h3 className="text-6xl  sm:text-4xl uppercase text-white">
                        40% OFF
                    </h3>
                    <h4 className="text-3xl sm:text-2xl text-white">
                        Acer Laptop
                    </h4>
                    <p className="text-lg text-white">
                        This is awesome offer for almost free{" "}
                    </p>
                    <CustomButton className="mt-5 sm:mt-1">Shop Now</CustomButton>
                </div>
            </div>
        </section>
    );
};

export default Advertise;
