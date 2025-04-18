import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import ServicePage from "../pages/ServicePage/ServicePage";
import { APPROUTES } from "../constants/routes/appRoutes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";
import MainLayout from "../layouts/mainLayout/MainLayout";
import CartPage from "../pages/Cart/CartPage";
import ShippingDetails from "../pages/ShippingDetails/ShippingDetails";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import HelpCenter from "../pages/HelpCenter/HelpCenter";
import WishlistPage from "../pages/WishlistPage/WishlistPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AddressMap from "../pages/AddressPickerPage/AddressPickerPage";
import SlotBooking from "../components/SlotBooking/SlotBooking";
import AuthPage from "../pages/AuthPage/AuthPage";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index path={APPROUTES.HOME} element={<Home />} />

                <Route path={APPROUTES.LOGIN} element={<Login />} />
                <Route path={APPROUTES.SIGNUP} element={<SignUp />} />
                <Route path={APPROUTES.AUTH} element={<AuthPage />} />
                <Route path={APPROUTES.ABOUT} element={<About />} />
                <Route path={APPROUTES.HELP_CENTER} element={<HelpCenter />} />
                <Route path={APPROUTES.CONTACT} element={<Contact />} />
                <Route
                    path={APPROUTES.SERVICES}
                    element={
                        <Navigate to={APPROUTES.SERVICES_REDIRECT} replace />
                    }
                />
                <Route
                    path={APPROUTES.SERVICE_DETAIL}
                    element={<ServicePage />}
                />
                <Route path={APPROUTES.CART} element={<CartPage />} />
                <Route path={APPROUTES.PROFILE} element={<ProfilePage />} />
                <Route path={APPROUTES.WISHLIST} element={<WishlistPage />} />
                <Route path={APPROUTES.ADDRESS} element={<AddressMap />} />
                <Route
                    path={APPROUTES.SHIPPING}
                    element={<ShippingDetails />}
                />
                <Route path={APPROUTES.CHECKOUT} element={<CheckoutPage />} />
                <Route
                    path={APPROUTES.SLOT_BOOKING}
                    element={<SlotBooking />}
                />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
