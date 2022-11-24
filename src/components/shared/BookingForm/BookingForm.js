import React from "react";

const BookingForm = () => {
    const handleBookingProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name?.value;
        const email = form.email?.value;
        const productName = form.productName?.value;
        const price = form.price?.value;
        const location = form.location?.value;
        const meeting = form.meeting?.value;
        console.log(name, email, productName, price, location, meeting, form)
    }
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
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
                                defaultValue={"name"}
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
                                name="email"
                                defaultValue={"email"}
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
                                defaultValue={"hhhh"}
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
                                defaultValue={"email"}
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
                                defaultValue={"email"}
                                type="text"
                                placeholder="Your Phone"
                                className="input input-bordered input-success w-full text-primary"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="meeting"
                                className="block mb-2 text-sm font-medium text-primary"
                            >
                                Meeting Location
                            </label>
                            <input
                                name="meeting"
                                defaultValue={"email"}
                                type="text"
                                placeholder="Your Meeting Location"
                                className="input input-bordered input-success w-full text-primary"
                            />
                        </div>
                        <input type="submit" className="btn btn-primary hover:bg-transparent hover:text-primary border-2" value="Submit"/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingForm;
