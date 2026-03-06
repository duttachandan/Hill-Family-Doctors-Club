import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-vh-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
