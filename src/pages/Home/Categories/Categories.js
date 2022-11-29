import React, { useRef } from "react";
import CategoryCard from "../../../components/shared/CategoryCard/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import NavigationSliderButton from "../../../components/shared/NavigationSliderButton/NavigationSliderButton";
import { getAllCategories } from "../../../api/category";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/shared/Loader/Loader";

const Categories = () => {
    const swiperRef = useRef();

    const { isLoading, error, refetch, data } = useQuery({
        queryKey: ["allCategories"],
        queryFn: async () => {
            const data = await getAllCategories();
            return data.data;
        },
    });
    console.log(data)
    return (
        <section className="container py-14 sm:py-8">
            <SectionTitle title="Popular Computer Category " />

            <NavigationSliderButton swiperRef={swiperRef} isMobile={false} />
            {isLoading ? (
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
                        className="sm:h-56"
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {data?.length > 0 ? (
                            <>
                                {data?.map((category) => (
                                    <SwiperSlide  key={category._id} style={{ height: "366px" }}>
                                        <CategoryCard
                                            category={category}
                                        />
                                    </SwiperSlide>
                                ))}
                            </>
                        ) : (
                            <h2 className="text-center text-xl text-primary">
                                There is no category
                            </h2>
                        )}
                    </Swiper>
                </>
            )}
            <NavigationSliderButton swiperRef={swiperRef} isMobile={true} />
        </section>
    );
};

export default Categories;
