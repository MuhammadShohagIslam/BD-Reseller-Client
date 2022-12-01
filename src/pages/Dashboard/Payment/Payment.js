import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);

const Payment = () => {
    const data = useLoaderData();

    return (
        <>
            <Helmet>
                <title>Payment</title>
            </Helmet>
            <Elements stripe={stripePromise}>
                <CheckoutForm order={data} />
            </Elements>
        </>
    );
};

export default Payment;
