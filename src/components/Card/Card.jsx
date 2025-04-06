import React from "react";
import useCart from "../../hooks/useCart";

const Card = ({ service }) => {
    const { image, category, title, description, rating, price } = service;
    const { handleAddToCart } = useCart();

    return (
        <div className="rounded-lg border border-gray-200 p-4 h-full transition-all duration-300 hover:bg-gray-200 
                               hover:scale-105">
            <img
                src={image}
                alt={name}
                className="w-full h-40 object-cover rounded-md"
            />

            <div className="mt-4">
                <h3 className="text-sm font-normal font-roboto mb-4">
                    {title}
                </h3>
                <p className="text-xs text-gray-600">{description}</p>

                <div className="flex mt-1 mb-4">
                    {Array(5)
                        .fill(0)
                        .map((_, index) => (
                            <span
                                key={index}
                                className={`text-gray-400 ${
                                    index < rating ? "text-yellow-400" : ""
                                }`}
                            >
                                ★
                            </span>
                        ))}
                </div>

                {/* <p className="text-red-600 font-bold text-lg mt-2">${price}</p> */}
                <button
                    className="bg-[#6b4f36] hover:bg-yellow-950 text-white text-sm border-none px-4 py-2 rounded-md cursor-pointer uppercase"
                    onClick={() => handleAddToCart(service)}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default Card;
