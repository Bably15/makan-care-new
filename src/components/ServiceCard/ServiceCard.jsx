import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import useCart from "../../hooks/useCart";

const ServiceCard = ({ service }) => {
    const { serviceId, title, rating, reviews, price, duration, services } =
        service;

    const { handleAddToCart } = useCart();

    return (
        <div className="p-4 py-10 w-full border-b-1 border-gray-200">
            <div className="flex justify-between items-start">
                <div>
                    {/* Header */}
                    <p className="text-green-600 text-sm font-bold">PACKAGE</p>
                    <h2 className="text-lg font-bold mt-1">{title}</h2>

                    {/* Rating and Reviews */}
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                        <span className="text-[#6E42E5] text-lg">★</span>
                        <span className="ml-1 font-semibold">{rating}</span>
                        <span className="ml-1">({reviews} reviews)</span>
                    </div>

                    {/* Price and Duration */}
                    <p className="text-gray-900 font-bold mt-2">
                        ${price} • {duration}
                    </p>
                </div>

                <button
                    className="border border-[#6E42E5] text-[#6E42E5] hover:bg-[#6E42E5] hover:text-white px-4 py-2 rounded-md cursor-pointer"
                    onClick={() => handleAddToCart(service)}
                >
                    Add
                </button>
            </div>
            <hr className="my-4 w-40 text-gray-200" />

            {/* Services List */}
            <ul className="text-gray-700 text-sm">
                {services &&
                    services.map((service, index) => (
                        <li key={index}>
                            <strong>{service.type}:</strong> {service.details}
                        </li>
                    ))}
            </ul>

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
