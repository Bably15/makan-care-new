import React from "react";
import "./BlogSite.css";
import B1 from "../../assets/b1.png";
import B2 from "../../assets/piperepair.jpg";
import B3 from "../../assets/b3.png";
import B4 from "../../assets/b4.png";

const BlogSite = () => {
  const blogs = [
    {
      id: 1,
      imageUrl: B1, // ✅ Fixed image assignment
      date: "Feb 12, 2025",
      header: "The Ultimate Home Maintenance Checklist.",
      content:
        "A complete guide to essential home maintenance tasks for a safe, efficient, and well-kept home....",
      link: "#",
    },
    {
      id: 2,
      imageUrl: B2, // ✅ Fixed image assignment
      date: "Feb 11, 2025",
      header: "5 Common Plumbing Problems and How to Fix Them",
      content:
        "Learn to identify and fix common plumbing issues to prevent leaks, clogs, and costly repairs easily....",
      link: "#",
    },
    {
      id: 3,
      imageUrl: B3, // ✅ Fixed image assignment
      date: "Feb 10, 2025",
      header: "Signs Your Home Needs a Plumbing Check-up",
      content:
        "Watch for leaks, low water pressure, and strange noises—these signs mean your plumbing needs inspection....",
      link: "#",
    },
    {
      id: 4,
      imageUrl: B4, // ✅ Fixed image assignment
      date: "Feb 9, 2025",
      header: "How to Identify and Fix Common Electrical Issues",
      content:
        "Learn to spot faulty wiring, flickering lights, and tripped breakers, and fix them safely....",
      link: "#",
    },
  ];

  return (
    <div className="blog-site">
      <h2>Our Latest Blogs</h2>
      <div className="blogs">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog">
            <img src={blog.imageUrl} alt={`Blog ${blog.id}`} className="blog-image" /> 
            <div className="blog-details">
              <span className="blog-date">{blog.date}</span>
              <h3 className="blog-header">{blog.header}</h3>
              <p className="blog-content">{blog.content}</p>
              <a href={blog.link} className="read-more-btn">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSite;
