import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import useCart from "../../hooks/useCart";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";
import useWishlist from "../../hooks/useWishlist";

const ServiceCard = ({ service }) => {
    const {
        id,
        title,
        description,
        rating,
        reviews,
        price,
        duration,
        services,
    } = service;

    const { handleAddToCart } = useCart();
    const { handleAddToWishlist } = useWishlist();

    return (
        <div
            className="p-4 py-10 w-full border-b-1 border-gray-200 transition-all duration-300 
                               hover:scale-105"
        >
            <div className="flex justify-between items-start">
                <div>
                    {/* Header */}
                    {/* <p className="text-green-600 text-sm font-bold">PACKAGE</p> */}
                    <h2 className="text-lg font-bold mt-1">{title}</h2>

                    {/* Rating and Reviews */}
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                        <span className="text-[#6b4f36] text-lg">★</span>
                        <span className="ml-1 font-semibold">{rating}</span>
                        <span className="ml-1">({reviews} reviews)</span>
                    </div>

                    {/* Price and Duration */}
                    <p className="text-gray-900 font-bold mt-2">
                        {COMMON_CONSTANTS.currency} {price.toFixed(2)} •{" "}
                        {duration}
                    </p>
                </div>

                <div className="flex gap-4">
                    <button
                        className="border border-[#6b4f36] text-[#6b4f36] hover:bg-[#6b4f36] hover:text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => handleAddToWishlist(service)}
                    >
                        Add to Wishlist
                    </button>
                    <button
                        className="border border-[#6b4f36] text-[#6b4f36] hover:bg-[#6b4f36] hover:text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => handleAddToCart(service)}
                    >
                        Add
                    </button>
                </div>
            </div>
            <hr className="my-4 w-40 text-gray-200" />

            {/* Services List */}
            {/* <ul className="text-gray-700 text-sm">
                {services &&
                    services.map((service, index) => (
                        <li key={index}>
                            <strong>{service.type}:</strong> {service.details}
                        </li>
                    ))}
            </ul> */}
            <p className="text-gray-700 text-sm">{description}</p>

            {/* Buttons */}
            {/* <div className="flex justify-between items-center mt-4">
                <button className="font-bold border border-gray-400 px-4 py-2 rounded-md text-gray-800">
                    Edit your package
                </button>
            </div> */}
        </div>
    );
};

export default ServiceCard;
