import React from "react";

const BlogCard = ({ image, title, description, category, author }) => {
    return (
        <>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-40 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{description}</p>
                    <div className="mt-3 text-xs text-gray-500">
                        <span>{category}</span> <span className="mx-2">|</span>{" "}
                        <span>{author}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
