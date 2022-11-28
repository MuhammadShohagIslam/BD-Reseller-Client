import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsByAdvertise } from "../../../api/product";
import Loader from "../../../components/shared/Loader/Loader";


const Advertise = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["allAdvertiseProduct"],
        queryFn: async () => {
            const data = await getAllProductsByAdvertise(true);
            return data.data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }
    const advertiseMapToObject = data?.reduce((acc, cur) => {
        return (acc = {
            ...cur,
        });
    }, {});

    const isEmptyAdvertise = Object.keys(advertiseMapToObject).length === 0;
    if(isEmptyAdvertise){
        return <h2 className="text-success text-3xl text-center">No Advertise Product</h2>
    }
   
    const offProduct = Math.round(
        ((advertiseMapToObject?.originalPrice - advertiseMapToObject?.price) /
            advertiseMapToObject?.originalPrice) *
            100
    );

   

    return (
        <>
            <section className="grid grid-cols-2 sm:grid-cols-1 bg-fixed py-4">
                <div className="z-20 relative">
                    <img
                        className="h-96 sm:h-60 w-full"
                        src={advertiseMapToObject?.productImg}
                        alt="advertised product"
                    />
                </div>
                <div className="z-20 sm:p-4 relative flex items-center">
                    <div className="space-y-3">
                        <h2 className="text-6xl sm:text-4xl uppercase text-success font-bold">
                            Summer <span>Offer</span>
                        </h2>
                        <h3 className="text-6xl  sm:text-4xl uppercase text-primary">
                            {offProduct}% OFF
                        </h3>
                        <h4 className="text-3xl sm:text-2xl text-primary">
                            {advertiseMapToObject?.productName}
                        </h4>
                        <p className="text-lg text-primary">
                            This is awesome offer for almost free
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Advertise;
