import React, { useRef } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import CustomButton from "../../UI/CustomButton/CustomButton";
import NavigationSliderButton from "./../NavigationSliderButton/NavigationSliderButton";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";

const Blog = ({ isSliderBlog }) => {
    const swiperRef = useRef();
    return (
        <>
            {isSliderBlog ? (
                <>
                    <NavigationSliderButton
                        swiperRef={swiperRef}
                        isMobile={false}
                    />
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="h-[570px] sm:h-[455px]"
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                        }}
                    >
                        {[...Array(8)]?.map((blog, index) => (
                            <SwiperSlide>
                                <div
                                    className="card bg-base-100 shadow-lg mt-7 sm:mt-3 mx-2"
                                    key={index}
                                >
                                    <figure>
                                        <img
                                            src="https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
                                            alt="Shoes"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-primary">
                                            Shoes!
                                        </h2>
                                        <div className="flex">
                                            <div className="flex items-center text-success">
                                                <BsCalendarDate />
                                                <span className="ml-1">
                                                    2022, 20, 20
                                                </span>
                                            </div>
                                            <div className="flex items-center ml-3 text-success">
                                                <BiUserPlus />
                                                <span className="ml-1">
                                                    User
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-primary">
                                            If a dog chews shoes whose shoes
                                            does he choose?
                                        </p>
                                        <div className="card-actions justify-end">
                                            <CustomButton>
                                                Read More
                                            </CustomButton>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <NavigationSliderButton
                        swiperRef={swiperRef}
                        isMobile={true}
                    />
                </>
            ) : (
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary">Shoes!</h2>
                        <div className="flex">
                            <div className="flex items-center text-success">
                                <BsCalendarDate />
                                <span className="ml-1">2022, 20, 20</span>
                            </div>
                            <div className="flex items-center ml-3 text-success">
                                <BiUserPlus />
                                <span className="ml-1">User</span>
                            </div>
                        </div>
                        <p className="text-primary">
                            If a dog chews shoes whose shoes does he choose?
                        </p>
                        <div className="card-actions justify-end">
                            <CustomButton>Read More</CustomButton>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Blog;
