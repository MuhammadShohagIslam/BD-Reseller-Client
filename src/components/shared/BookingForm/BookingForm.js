import React from "react";
import { toast } from "react-hot-toast";
import { createNewBookingProduct } from "./../../../api/bookingProduct";

const BookingForm = ({
    bookingProduct,
    closeModal,
    user,
    bookingProductRefetch,
}) => {
    const { productName, price,productImg
    } = bookingProduct;

    const handleBookingProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name?.value;
        const email = form.email?.value;
        const productName = form.productName?.value;
        const price = form.price?.value;
        const phone = form.phone?.value;
        const meetingLocation = form.meetingLocation?.value;

        if (!phone) {
            toast.error("Enter Your Phone Number");
            return;
        }
        if (!meetingLocation) {
            toast.error("Enter Your Meeting Location");
            return;
        }

        const bookingProductData = {
            userName: user?.displayName || name,
            userEmail: email,
            productImg,
            productName,
            price,
            phone,
            meetingLocation,
            productId: bookingProduct._id,
        };

        createNewBookingProduct(bookingProductData)
            .then((data) => {
                if (data.data.acknowledged) {
                    toast.success(`${productName} Product is Booked!`);
                    bookingProductRefetch();
                    closeModal();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={closeModal}
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold text-primary text-center">
                        Booking Product!
                    </h3>

                    <form onSubmit={handleBookingProduct}>
                        <div className="mb-3">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Name
                            </label>
                            <input
                                name="name"
                                defaultValue={user?.displayName}
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered input-success w-full text-primary"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Email
                            </label>
                            <input
                                readOnly
                                name="email"
                                defaultValue={user?.email}
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered input-success w-full text-primary"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="productName"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Product Name
                            </label>
                            <input
                                name="productName"
                                readOnly
                                defaultValue={productName}
                                type="text"
                                placeholder="Your Product Name"
                                className="input input-bordered input-success w-full text-primary"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Price
                            </label>
                            <input
                                name="price"
                                readOnly
                                defaultValue={price}
                                type="text"
                                placeholder="Your Product Price"
                                className="input input-bordered input-success w-full text-primary"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Phone Number
                            </label>
                            <input
                                name="phone"
                                type="text"
                                placeholder="Your Phone"
                                className="input input-bordered input-success w-full text-primary"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="meetingLocation"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Meeting Location
                            </label>
                            <input
                                name="meetingLocation"
                                type="text"
                                placeholder="Your Meeting Location"
                                className="input input-bordered input-success w-full text-primary"
                            />
                        </div>
                        <input
                            type="submit"
                            className="btn btn-primary hover:bg-transparent hover:text-primary border-2"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingForm;
