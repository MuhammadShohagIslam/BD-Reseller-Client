import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "./../../../context/AuthProvider/AuthProvider";
import { removeWishListProductByProductId } from "./../../../api/wishList";
import {
    updateProductByProductId
} from "./../../../api/product";
import { updateBookingProductByProductId } from "./../../../api/bookingProduct";

const CheckoutForm = ({ order }) => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState("");
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();

    const { _id, price } = order;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`${process.env.REACT_APP_server_api}/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const cartStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: "Arial, sans-serif",
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d",
                },
            },
            invalid: {
                fontFamily: "Arial, sans-serif",
                color: "#fa755a",
                iconColor: "#fa755a",
            },
        },
    };

    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty); // button is disabled when pay is error
        setError(event.error ? event.error.message : "");
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            // store the payment info to the database
            const payment = {
                price: price,
                transactionId: payload?.paymentIntent?.id,
                email: user?.email,
                name: user?.displayName,
                orderId: order._id,
            };
            fetch(`${process.env.REACT_APP_server_api}/payment`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        const updateProduct = {
                            ...order,
                            sold: true,
                        };
                        delete updateProduct._id;

                        const updateBookingProduct = {
                            ...order,
                            paid: true,
                        };
                        delete updateBookingProduct._id;

                        updateBookingProductByProductId(
                            _id,
                            updateBookingProduct
                        )
                            .then((data) => {})
                            .catch((error) => {
                                console.log(error);
                            });
                        updateProductByProductId(_id, updateProduct)
                            .then((data) => {})
                            .catch((error) => {
                                console.log(error);
                            });
                        removeWishListProductByProductId(_id)
                            .then((data) => {})
                            .catch((error) => {
                                console.log(error);
                            });
                        toast.success("Congrats, Your payment is Completed!");
                    }
                });
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };

    if (error) {
        toast.error("Something Went Wrong!");
    }

    return (
        <div className="container  my-11">
            <div className="w-1/2 m-auto bg-secondary">
                <form onSubmit={handleSubmit} className="p-5">
                    <CardElement options={cartStyle} onChange={handleChange} />
                    <button disabled={processing || disabled || succeeded}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;
