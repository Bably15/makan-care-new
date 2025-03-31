import React from "react";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";
import useWishlist from "../../hooks/useWishlist"; // Custom hook for wishlist actions

const WishlistItem = ({ service }) => {
    const { removeServiceFromWishlist } = useWishlist(); // Assuming you have a custom hook for wishlist actions

    return (
        <div
            key={service.id}
            className="border border-gray-300 rounded-lg shadow p-4 mb-4"
        >
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <img
                        src={service?.image}
                        alt={service?.title}
                        className="w-20 h-12 object-cover"
                    />
                    <div>
                        <h3 className="font-semibold">{service.title}</h3>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <p className="font-bold">
                        {COMMON_CONSTANTS.currency} {service?.price.toFixed(2)}
                    </p>
                    <button
                        className="text-gray-500 hover:text-red-500 cursor-pointer"
                        onClick={() => removeServiceFromWishlist(service?.id)} // Assuming this removes item from wishlist
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishlistItem;
