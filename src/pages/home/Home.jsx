import React from "react";
import Hero from "../../components/hero/Hero";
import Section1 from "../../components/section1/Section1";
import Section2 from "../../components/section2/section2";
import CategoryWiseProductDisplay from "../../components/CategoryWiseProductDisplay/CategoryWiseProductDisplay";
import BlogSite from "../../components/Blogsite/BlogSite.jsx";
import LastSection from "../../components/LastSection/LastSection";
import RenovationsFabrications from "../../components/Renovation&Fabrications/Renovation&Fabrications";
import Highlight from "../../components/Highlight/Highlight.jsx";
import InstagramSection from "../../components/Instagram/InstagramSection.jsx";
import Service2 from "../../components/Services/Service2.jsx";
import Testimonial from "../../components/Testimonials/Testimonial.jsx";
import Features from "../../components/Features/Features.jsx";
const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Section1 />
            <RenovationsFabrications />
            <Highlight />
            <Service2 />
            <Testimonial />
            <InstagramSection />
            <LastSection />
            {/* <Section2 />
            <Section3 />
            <CategoryWiseProductDisplay />
            <BlogSite />*/}
        </>
    );
};

export default Home;
