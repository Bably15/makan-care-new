import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../components/Cart/Cart";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";
import { useNavigate } from "react-router-dom";
import { APPROUTES } from "../../constants/routes/appRoutes";

const CartPage = () => {
    const cartData = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate(APPROUTES.SHIPPING);
    };

    return (
        <div className="max-w-4xl mx-auto py-20">
            <h2 className="text-2xl font-bold mb-10">
                My Services{" "}
                <span className="text-gray-500">
                    ({cartData?.totalQuantity} item)
                </span>
            </h2>
            {cartData?.items?.map((service) => (
                <Cart key={service.id} service={service} />
            ))}
            <div className="flex justify-between items-center mt-10">
                <p className="text-lg font-bold">
                    Subtotal Amount:{" "}
                    <span className="text-black">
                        {COMMON_CONSTANTS.currency}{" "}
                        {cartData?.totalPrice.toFixed(2)}
                    </span>
                </p>
                <button
                    className="bg-black hover:bg-gray-700 text-white px-6 py-2 rounded cursor-pointer"
                    onClick={handleCheckout}
                >
                    CHECK OUT
                </button>
            </div>
        </div>
    );
};

export default CartPage;
