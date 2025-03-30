import { useLocation, Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooterRoutes = ["/login", "/signup"];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Show Header only if not in login/signup */}
            {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}

            {/* Page Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Show Footer only if not in login/signup */}
            {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
        </div>
    );
};

export default MainLayout;
