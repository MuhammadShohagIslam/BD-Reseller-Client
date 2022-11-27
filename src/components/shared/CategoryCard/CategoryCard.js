import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    console.log(category)
    const { image, categoryName } = category;
    return (
        <Link to={`/productsByCategory/${categoryName}`}>
            <div
                className="h-80 md:h-56 sm:h-52 w-full bg-cover flex items-end md:items-center sm:items-center justify-center relative bg-no-repeat bg-center after:content-[''] after:bg-primary after:h-full after:opacity-40 after:absolute after:top-0 after:left-0 after:w-full  md:bg-center rounded-lg after:rounded-lg hover:shadow-xl transition ease-in-out delay-30 cursor-pointer"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <h3 className="text-white bottom-8 md:bottom-0 sm:bottom-0 text-2xl z-30 relative">
                    {categoryName}
                </h3>
            </div>
        </Link>
    );
};

export default CategoryCard;
