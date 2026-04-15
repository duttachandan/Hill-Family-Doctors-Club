"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { doctorStore } from "@/store/store";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { logo, getLogo } = doctorStore();
  const [user, setUser] = useState<string | null>(null);
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
    if (localStorage.getItem("email")) setUser(localStorage.getItem("email"));
  }, []);

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
    <header className="py-3 shadow-md">
      <div
        onClick={() => setShowNav(false)}
        className={`bg-[rgba(0,0,0,0.5)] backdrop-blur-2xl fixed inset-0 z-2 ${showNav ? "block" : "hidden"}`}
      ></div>
      <div className="container">
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
            className="flex lg:hidden ms-auto relative"
          >
            <span className="absolute w-7.5 h-0.5 bg-black -top-1.25  right-0"></span>
            <span className="absolute w-7.5 h-0.5 bg-black top-0 right-0"></span>
            <span className="absolute w-7.5 h-0.5 bg-black top-1.25 right-0"></span>
          </div>
          <div
            className={`-right-full transition ease-in-out duration-800 fixed lg:static
              ${showNav ? "top-0 z-3 right-0 sm:w-[60%] w-[90%] h-full bg-white opacity-100" : "opacity-0 lg:opacity-100"} 
              lg:flex items-center grow`}
          >
            <ul className="lg:flex block text-center items-center mx-auto">
              {NavLinks.map((elm) => {
                return (
                  <li
                    key={elm.name}
                    className={`lg:mr-7.5 my-3 lg:my-0 ${elm.lastChild ? "mr-0" : ""}`}
                  >
                    <Link
                      onClick={() => setShowNav(false)}
                      href={elm.path}
                      className={`hover:text-[#7CC343] relative transition after:transition
                      after:absolute after:left-0 after:w-0 hover:after:w-full after:duration-300 after:ease-in-out
                      after:h-0.5 after:bg-[#7CC343] after:-bottom-0.5 text-[20px] 
                      ${pathName.startsWith(elm.path) ? "after:w-full text-[#7CC343]" : ""}`}
                    >
                      {elm.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="text-center">
              {user ? (
                <div className="flex items-center">
                  <Link
                    className="py-3.5 px-4 bg-[#7CC343] transition duration-300
              hover:bg-[#65a035] rounded-lg text-white mr-2"
                    href="/appointment"
                  >
                    Book An Appointment
                  </Link>
                  <Link
                    href="/profile"
                    style={{ display: "flex" }}
                    className="h-10 w-10 rounded-full items-center 
                  justify-center text-sm bg-gray-400 profile"
                    data-attr={user}
                  >
                    <svg
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.79834 15.1691C0.79834 12.0827 3.30038 9.58069 6.3868 9.58069C9.47322 9.58069 11.9753 12.0827 11.9753 15.1691M9.5802 3.99223C9.5802 5.7559 8.15043 7.18563 6.3868 7.18563C4.62313 7.18563 3.19339 5.7559 3.19339 3.99223C3.19339 2.22856 4.62313 0.798828 6.3868 0.798828C8.15043 0.798828 9.5802 2.22856 9.5802 3.99223Z"
                        stroke="#525151"
                        stroke-width="1.5967"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    className="py-3.5 px-4 bg-[#7CC343] transition duration-300
              hover:bg-[#65a035] rounded-lg text-white me-2"
                    href="/signin"
                  >
                    Sign In
                  </Link>
                  <Link
                    className="py-3.5 px-4 border-[#7CC343] border text-[#7CC343] transition duration-300
              hover:bg-[#65a035] rounded-lg hover:text-white"
                    href="/signup"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
