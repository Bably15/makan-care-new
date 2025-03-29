import "./App.css";
import Hero from "./components/hero/Hero.jsx";
import Section1 from "./components/section1/Section1.jsx";
import Footer from "./components/Footer/Footer.jsx";
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
import OnlyHead from "./components/OnlyHead/OnlyHead.jsx";
import Header from "./layouts/header/Header.jsx";

// function App() {
//     return (
//         <div>
//             <Hero />
//             <Section1 />
//             <Section2 />
//             {/* <Section3 /> */}
//             <CategoryWiseProductDisplay />
//             <BlogSite />

//             {/* <InstagramSection /> */}
//             <LastSection />
//             <Footer />
//         </div>
//         // <div>
//         //   <ProductPage />
//         // </div>
//         // <div>
//         //   <About2 />
//         // </div>
//         // <div>
//         //   <ContactUs />
//         // </div>
//         // <div>
//         //   <Product_Site />
//         // </div>
//         // <div>
//         //   <Plumbing_Product/>
//         // </div>
//     );
// }

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {/* <OnlyHead /> */}
                <Header />
                <AppRoutes />
                <Footer />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
