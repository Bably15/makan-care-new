import React from "react";

const BlogCard2 = ({ image, date, title, description }) => {
    return (
        <div className="rounded-lg overflow-hidden p-4 border border-gray-200 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl 
                        animate-fadeIn">
            <img src={image} alt="Blog" className="w-full h-48 object-cover" />
            <div className="py-5">
                <p className="text-xs text-red-500 flex items-center">
                    <span className="mr-2">
                        <i class="fa-regular fa-clock"></i>
                    </span>
                    {date}
                </p>
                <h3 className="font-semibold mt-2">{title}</h3>
                <p className="text-gray-600 text-sm mt-2">{description}</p>
                <a
                    href="#"
                    className="bg-[#6b4f36] text-white text-sm px-8 py-2 rounded-lg font-medium mt-3 inline-block transition-all duration-300 hover:bg-[#543c29] 
                               hover:scale-105"
                >
                    READ MORE
                </a>
            </div>
        </div>
    );
};

export default BlogCard2;
