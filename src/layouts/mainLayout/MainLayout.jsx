import { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MainLayout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const noHeaderFooterRoutes = ["/login", "/signup"];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="min-h-screen flex flex-col">
                    {!noHeaderFooterRoutes.includes(location.pathname) && (
                        <Header />
                    )}
                    <main className="flex-grow">
                        <Outlet />
                    </main>
                    {!noHeaderFooterRoutes.includes(location.pathname) && (
                        <Footer />
                    )}
                </div>
            )}
        </>
    );
};

export default MainLayout;
