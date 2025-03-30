import React from "react";
import BlogCard2 from "../../components/BlogCard/BlogCard2";
import { blogData } from "../../mocks/blogs";

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
