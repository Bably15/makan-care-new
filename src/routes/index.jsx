import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import About2 from "../components/About2/About2";
import ContactUs from "../components/contactpage/ContactUs";
import Services from "../pages/Services/Services";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about2" element={<About2 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact2" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    );
};

export default AppRoutes;
