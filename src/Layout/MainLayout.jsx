import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const MainLayout = () => {
    return (
        <>
            <Navbar />
            {/* content area */}
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;