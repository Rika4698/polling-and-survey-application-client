import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login')
    const noHeader = location.pathname.includes('register')
    return (
        <div>
           { noHeaderFooter|| noHeader || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || noHeader|| <Footer></Footer>}
        </div>
    );
};

export default Main;