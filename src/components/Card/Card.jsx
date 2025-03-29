import React from "react";

const Card = ({ image, category, name, rating, price }) => {
    return (
        <div className="rounded-lg border border-gray-200 p-4 h-full">
            <img
                src={image}
                alt={name}
                className="w-full h-40 object-cover rounded-md"
            />

            <div className="mt-4">
                <p className="text-gray-500 text-xs font-roboto">{category}</p>
                <h3 className="text-sm font-normal font-roboto">{name}</h3>

                <div className="flex mt-1">
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

                <p className="text-red-600 font-bold text-lg mt-2">${price}</p>
            </div>
        </div>
    );
};

export default Card;
