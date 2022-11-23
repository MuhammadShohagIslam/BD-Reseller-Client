import React from "react";

const NavigationSliderButton = ({ swiperRef, isMobile }) => {
    console.log(swiperRef.current)
    return (
        <div
            className={`flex justify-end pb-2  ${
                isMobile ? "lg:hidden md:hidden mt-3" : "sm:hidden"
            }`}
        >
            <button
                className="h-8 w-14 bg-success text-white rounded-sm border-2 border-success hover:bg-transparent hover:text-primary transition ease-out duration-300 mr-2"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                Prev
            </button>
            <button
                className="h-8 w-14 bg-success text-white rounded-sm border-2 border-success hover:bg-transparent hover:text-primary transition ease-out duration-300"
                onClick={() => swiperRef.current?.slideNext()}
            >
                Next
            </button>
        </div>
    );
};

export default NavigationSliderButton;
