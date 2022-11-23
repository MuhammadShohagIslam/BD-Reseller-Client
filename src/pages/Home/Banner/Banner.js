import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import BannerImg from "../../../assets/banner/laptop.jpg";
import BannerImg1 from "../../../assets/banner/laptop1Banner.jpg";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

const Banner = () => {
    return (
        <section>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="sm:h-[380px]"
            >
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: `url(${BannerImg})` }}
                        className="bg-contain md:bg-cover sm:bg-cover z-20 bg-no-repeat bg-left md:bg-center w-full h-[444px] sm:h-[380px] flex items-center justify-center"
                    >
                        <div className="text-center">
                            <span className="text-success text-xl sm:text-lg mb-3">
                                20% off Laptop and Desktop
                            </span>
                            <h2 className="text-5xl sm:text-3xl text-primary w-[34rem] sm:w-64 ">
                                Smartest and Affordable Devices
                            </h2>
                            <button className="btn btn-outline btn-primary mt-10 sm:mt-5">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: `url(${BannerImg1})` }}
                        className="bg-contain md:bg-cover sm:bg-cover z-20 bg-no-repeat bg-left md:bg-center w-full h-[444px] sm:h-[380px] flex items-center justify-center"
                    >
                        <div className="text-center">
                            <span className="text-success text-xl sm:text-lg mb-3">
                                20% off Laptop and Desktop
                            </span>
                            <h2 className="text-5xl sm:text-3xl text-primary w-[34rem] sm:w-64">
                                Smartest and Affordable Devices
                            </h2>
                            <button className="btn btn-outline btn-primary mt-10 sm:mt-5">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;
