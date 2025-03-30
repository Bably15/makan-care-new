import React from "react";
import useForm from "../../hooks/useForm";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { APPROUTES } from "../../constants/routes/appRoutes";

const ShippingDetails = () => {
    const cartData = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const initialValues = {
        fullName: "",
        email: "",
        address: "",
        mobile: "",
        internationalShipping: true,
    };

    const validate = (values) => {
        let errors = {};
        if (!values.fullName) errors.fullName = "Full Name is required";
        if (!values.email) errors.email = "Email is required";
        if (!values.address) errors.address = "Shipping Address is required";
        return errors;
    };

    const onSubmit = (values) => {
        navigate(APPROUTES.CHECKOUT);
    };

    const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(
        initialValues,
        validate,
        onSubmit
    );

    return (
        <div className="max-w-3xl mx-auto py-20">
            <h2 className="text-2xl font-bold mb-15 text-center">
                Shipping Details
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="mb-4">
                        <label className="block font-medium">* Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm">
                                {errors.fullName}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">
                            * Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">
                            * Shipping Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.address && (
                            <p className="text-red-500 text-sm">
                                {errors.address}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.mobile && (
                            <p className="text-red-500 text-sm">
                                {errors.mobile}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-end text-end mt-8">
                    <div className="flex gap-10 my-4">
                        <div>Subtotal:</div>
                        <div>
                            {COMMON_CONSTANTS.currency}{" "}
                            {cartData ? cartData.totalPrice.toFixed(2) : 0}
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div>Total:</div>
                        <div>
                            {COMMON_CONSTANTS.currency}{" "}
                            {cartData.totalPrice.toFixed(2)}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-12">
                    <Link
                        className="px-4 py-2 border rounded cursor-pointer"
                        to={APPROUTES.CART}
                    >
                        Go Back
                    </Link>
                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-700 text-white px-6 py-2 rounded cursor-pointer"
                    >
                        Next Step
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ShippingDetails;
