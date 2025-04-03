import "./App.css";
import Hero from "./components/hero/Hero.jsx";
import Section1 from "./components/section1/Section1.jsx";
import Footer2 from "./components/Footer/Footer.jsx";
import Footer from "./layouts/footer/Footer.jsx";
import LastSection from "./components/LastSection/LastSection.jsx";
import InstagramSection from "./components/Instagram/InstagramSection.jsx";
import BlogSite from "./components/Blogsite/BlogSite.jsx";
import Section2 from "./components/section2/section2.jsx";
import Section3 from "./components/section3/Section3.jsx";
import ContactUs from "./components/contactpage/ContactUs.jsx";
import ProductPage from "./components/ProductPage/ProductPage.jsx";
import AboutUs from "./components/AboutUs/About_us.jsx";
import About2 from "./components/About2/About2.jsx";
import Product_Site from "./components/Product_Site/Product_Site.jsx";
import Plumbing_Product from "./components/plumbing_product/plumbing_product.jsx";
import CategoryWiseProductDisplay from "./components/CategoryWiseProductDisplay/CategoryWiseProductDisplay.jsx";
import AppRoutes from "./routes/index.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index.js";
import { ToastProvider } from "./context/ToastContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
    return (
        <Provider store={store}>
            <GoogleOAuthProvider clientId="464368740603-7dbeshdqpo540j7uu3ocl7dt1ughtsoh.apps.googleusercontent.com">
                <BrowserRouter>
                    <ToastProvider>
                        <AppRoutes />
                    </ToastProvider>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </Provider>
    );
};

export default App;
