import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
