import React from "react";
import BlogCard2 from "../../components/BlogCard/BlogCard2";

import BLOG_1_IMG from "../../assets/b1.png";
import BLOG_2_IMG from "../../assets/b2.png";
import BLOG_3_IMG from "../../assets/b3.png";
import BLOG_4_IMG from "../../assets/b4.png";

const blogData = [
    {
        image: BLOG_1_IMG,
        date: "5 APRIL, 2023",
        title: "Nullam ullamcorper ornare molestie",
        description:
            "Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam...",
    },
    {
        image: BLOG_2_IMG,
        date: "3 APRIL, 2023",
        title: "Turpis at eleifend Aenean porta",
        description:
            "Turpis at eleifend ps mi elit Aenean porta ac sed faucibus. Nunc urna...",
    },
    {
        image: BLOG_3_IMG,
        date: "1 APRIL, 2023",
        title: "Morbi condimentum molestie Nam",
        description:
            "Sed mauris Pellentesque elit Aliquam at lacus interdum nascetur elit...",
    },
    {
        image: BLOG_4_IMG,
        date: "18 MARCH, 2023",
        title: "Curabitur at elit Vestibulum",
        description:
            "Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum...",
    },
];

const BlogSection = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 py-20">
            <h2 className="text-2xl font-bold mb-12">Our Latest Blogs</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogData.map((blog, index) => (
                    <BlogCard2 key={index} {...blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
