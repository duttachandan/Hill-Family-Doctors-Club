"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { doctorStore } from "@/store/store";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { logo, getLogo } = doctorStore();
  const [showNav, setShowNav] = useState<boolean>(false);
  const pathName = usePathname();

  const NavLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact", lastChild: true },
  ];

  useEffect(() => {
    getLogo();
  }, []);

  function handleClick() {
    if (showNav) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }

  return (
    <header className="py-3 border-b border-green-500">
      <div
        onClick={() => setShowNav(false)}
        className={`bg-[rgba(0,0,0,0.5)] backdrop-blur-2xl fixed inset-0 z-2 ${showNav ? "block" : "hidden"}`}
      ></div>
      <div className="mx-auto max-w-362.5 px-3.75">
        <nav className="flex items-center">
          <div className="nav-logo">
            <Link
              href="/"
              className="navbar-brand w-37.5 sm:w-[215.72px] inline-block font-Poppins text-green-500 text-2xl font-bold italic"
            >
              {logo ? (
                <Image
                  className="object-cover w-full"
                  width={215.72}
                  height={80}
                  src={logo[0]?.image}
                  alt=""
                />
              ) : (
                ""
              )}
            </Link>
          </div>
          <div
            onClick={handleClick}
            className="flex md:hidden ms-auto relative"
          >
            <span className="absolute w-7.5 h-0.5 bg-black -top-1.25  right-0"></span>
            <span className="absolute w-7.5 h-0.5 bg-black top-0 right-0"></span>
            <span className="absolute w-7.5 h-0.5 bg-black top-1.25 right-0"></span>
          </div>
          <div
            className={`navbar-collapsed -right-full transition 
              ${showNav ? "fixed top-0 z-3 right-0 sm:w-[60%] w-[90%] h-full bg-white" : "hidden"} 
              md:flex items-center grow`}
          >
            <ul className="md:flex block text-center items-center mx-auto">
              {NavLinks.map((elm) => {
                return (
                  <li
                    key={elm.name}
                    className={`md:mr-7.5 my-3 md:my-0 ${elm.lastChild ? "mr-0" : ""}`}
                  >
                    <Link
                      onClick={() => setShowNav(false)}
                      href={elm.path}
                      className={`hover:text-[#7CC343] relative transition after:transition
                      after:absolute after:left-0 after:w-0 hover:after:w-full
                      after:h-0.5 after:bg-[#7CC343] after:-bottom-0.5 text-[20px] 
                      ${pathName.startsWith(elm.path) ? "after:w-full text-[#7CC343]" : ""}`}
                    >
                      {elm.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="">
              <Link 
              className="py-3.5 px-4 bg-[#7CC343] 
              hover:bg-[#65a035] rounded-lg text-white" 
              href="/appointment"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
