import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import ServicePage from "../pages/ServicePage/ServicePage";
import { APPROUTES } from "../constants/routes/appRoutes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";
import MainLayout from "../layouts/mainLayout/MainLayout";

const AppRoutes = () => {
    return (
        // <Routes>
        //     <Route path={APPROUTES.LOGIN} element={<Login />} />
        //     <Route path={APPROUTES.SIGNUP} element={<SignUp />} />
        //     <Route path={APPROUTES.HOME} element={<Home />} />
        //     <Route path={APPROUTES.ABOUT} element={<About />} />
        //     <Route path={APPROUTES.CONTACT} element={<Contact />} />
        //     <Route
        //         path={APPROUTES.SERVICES}
        //         element={<Navigate to={APPROUTES.SERVICES_REDIRECT} replace />}
        //     />
        //     <Route path={APPROUTES.SERVICE_DETAIL} element={<ServicePage />} />
        // </Routes>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index path={APPROUTES.HOME} element={<Home />} />

                <Route path={APPROUTES.LOGIN} element={<Login />} />
                <Route path={APPROUTES.SIGNUP} element={<SignUp />} />

                <Route path={APPROUTES.ABOUT} element={<About />} />
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
            </Route>
        </Routes>
    );
};

export default AppRoutes;
