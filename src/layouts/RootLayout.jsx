import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Rootlayout = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <>
        {noHeaderFooter || <Navbar/>}
        <section className="bg-[#d1b48c]">
        <Outlet/>
        {noHeaderFooter || <Footer/>}
        </section>
        </>
    );
};

export default Rootlayout;