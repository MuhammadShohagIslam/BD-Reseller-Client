import React, { useRef } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import CustomButton from "../../UI/CustomButton/CustomButton";
import NavigationSliderButton from "./../NavigationSliderButton/NavigationSliderButton";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Loader from "./../Loader/Loader";

const Blog = ({ isSliderBlog, blog, blogs, isSlideBlogLoading }) => {
    const swiperRef = useRef();

    return (
        <>
            {isSliderBlog ? (
                <>
                    <NavigationSliderButton
                        swiperRef={swiperRef}
                        isMobile={false}
                    />
                    {isSlideBlogLoading ? (
                        <Loader />
                    ) : (
                        <>
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
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 25,
                                    },
                                }}
                            >
                                {blogs?.map((blogData, index) => (
                                    <SwiperSlide key={blogData._id}>
                                        <div
                                            className="card min-h-[513px] sm:min-h-[420px] bg-base-100 shadow-lg mt-7 sm:mt-3 mx-2"
                                            key={index}
                                        >
                                            <figure className="h-[250px] sm:h-[150px] md:h-[190px]">
                                                <img
                                                className="h-full"
                                                    src={blogData.image}
                                                    alt={blogData.title}
                                                />
                                            </figure>
                                            <div className="card-body sm:p-4 md:p-5">
                                                <h2 className="card-title text-primary">
                                                    {blogData.title}
                                                </h2>
                                                <div className="flex md:flex-col sm:flex-col">
                                                    <div className="flex items-center text-success">
                                                        <BsCalendarDate />
                                                        <span className="ml-1">
                                                            {new Date(
                                                                blogData?.publisherDate
                                                            )
                                                                .toDateString()
                                                                .substr(4, 11)}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center ml-3 md:ml-0 sm:ml-0 text-success">
                                                        <BiUserPlus />
                                                        <span className="ml-1">
                                                            {
                                                                blogData?.publisherName
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text-primary">
                                                    {blogData.description
                                                        .length > 50
                                                        ? `${blogData.description.slice(
                                                              0,
                                                              50
                                                          )} ...`
                                                        : blogData.description}
                                                </p>
                                                <div className="card-actions justify-end">
                                                    <Link
                                                        to={`/blogs/${blogData._id}`}
                                                    >
                                                        <CustomButton>
                                                            Read More
                                                        </CustomButton>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                    )}
                    <NavigationSliderButton
                        swiperRef={swiperRef}
                        isMobile={true}
                    />
                </>
            ) : (
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                             src={blog?.image}
                             alt={blog?.title}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary">
                            {" "}
                            {blog?.title}
                        </h2>
                        <div className="flex md:flex-col sm:flex-col">
                            <div className="flex items-center text-success">
                                <BsCalendarDate />
                                <span className="ml-1">
                                    {" "}
                                    {new Date(blog?.publisherDate)
                                        .toDateString()
                                        .substr(4, 11)}
                                </span>
                            </div>
                            <div className="flex md:ml-0 sm:ml-0 items-center ml-3 text-success">
                                <BiUserPlus />
                                <span className="ml-1 ">
                                    {" "}
                                    {blog?.publisherName}
                                </span>
                            </div>
                        </div>
                        <p className="text-primary">
                            {blog?.description.length > 100
                                ? `${blog?.description.slice(0, 100)} ...`
                                : blog?.description}
                        </p>
                        <div className="card-actions justify-end">
                            <Link to={`/blogs/${blog?._id}`}>
                                <CustomButton>Read More</CustomButton>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Blog;
