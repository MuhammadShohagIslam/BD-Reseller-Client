import React, { useRef } from "react";
import CategoryCard from "../../../components/shared/CategoryCard/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper";
import "swiper/css/navigation";
import "./Categories.css";
import "swiper/css";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import NavigationSliderButton from "../../../components/shared/NavigationSliderButton/NavigationSliderButton";

const Categories = () => {
    const swiperRef = useRef();

    return (
        <section className="container py-14 sm:py-8">
            <SectionTitle title="Popular Computer Category " />

            <NavigationSliderButton swiperRef={swiperRef} isMobile={false} />
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
                <SwiperSlide style={{ height: "366px" }}>
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide style={{ height: "366px" }}>
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide style={{ height: "366px" }}>
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide style={{ height: "366px" }}>
                    <CategoryCard />
                </SwiperSlide>
                <SwiperSlide style={{ height: "366px" }}>
                    <CategoryCard />
                </SwiperSlide>
      
            </Swiper>
            <NavigationSliderButton swiperRef={swiperRef} isMobile={true} />
        </section>
    );
};

export default Categories;
