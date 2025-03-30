import React, { useState } from "react";
import { useSelector } from "react-redux";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";

const CheckoutForm = () => {
    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const cartData = useSelector((state) => state.cart);

    return (
        <div className="max-w-lg mx-auto py-20">
            <h1 className="text-2xl font-bold mb-10 text-center">Payment</h1>

            {/* Credit Card Option */}
            <h2 className="font-normal mb-5">Payment Option</h2>
            <div
                className="mb-4 cursor-pointer shadow-sm border border-gray-200"
                onClick={() => setPaymentMethod("creditCard")}
            >
                <div className="flex items-center justify-between bg-gray-100 border border-gray-200 p-10">
                    <div className="flex gap-5">
                        <input
                            type="radio"
                            checked={paymentMethod === "creditCard"}
                            readOnly
                        />
                        <div>
                            <h3 className="text-xl font-medium mb-2">
                                Credit Card
                            </h3>
                            <p className="text-sm">
                                Pay with Visa, Master Card and other debit or
                                credit card
                            </p>
                        </div>
                    </div>
                </div>
                {paymentMethod === "creditCard" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 mt-4">
                        <div className="mb-4">
                            <label className="block font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium">
                                Card Number
                            </label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium">
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="MM/YY"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium">CVV</label>
                            <input
                                type="text"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* PayPal Option */}

            <div
                className="flex items-center justify-between bg-gray-100 border border-gray-200 p-10 cursor-pointer"
                onClick={() => setPaymentMethod("paypal")}
            >
                <div className="flex gap-5">
                    <input
                        type="radio"
                        checked={paymentMethod === "paypal"}
                        readOnly
                    />
                    <div>
                        <h3 className="text-xl font-medium mb-2">PayPal</h3>
                        <p className="text-sm">
                            Pay easily, fast and secure with PayPal
                        </p>
                    </div>
                </div>
            </div>

            <button
                className="bg-black text-white px-6 py-2 rounded w-full"
                disabled
            >
                Pay {COMMON_CONSTANTS.currency}{" "}
                {cartData?.totalPrice.toFixed(2)}
            </button>
        </div>
    );
};

export default CheckoutForm;
