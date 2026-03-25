"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { doctorStore } from "@/store/store";

const Navbar = () => {
  const { logo, getLogo } = doctorStore();

  useEffect(() => {
    getLogo();
  }, []);

  return (
    <header className="py-3 border-b border-green-500">
      <div className="mx-auto max-w-362.5 px-3.75">
        <nav className="flex items-center">
          <div className="nav-logo">
            <Link
              href="/"
              className="navbar-brand w-[215.72px] font-roboto text-green-500 text-2xl font-bold italic"
            >
              {logo ? (
                <Image
                  className="w-full object-cover h-full"
                  width={215.72}
                  height={100}
                  src={logo[0]?.image}
                  alt=""
                />
              ) : (
                ""
              )}
            </Link>
          </div>
          <div className="flex md:hidden ms-auto relative">
            <span className="absolute w-7.5 h-0.5 bg-black -top-1.25  right-0"></span>
            <span className="absolute w-7.5 h-0.5 bg-black top-0 right-0"></span>
            <span className="absolute w-7.5 h-0.5 bg-black top-1.25 right-0"></span>
          </div>
          <div className="navbar-collapsed hidden md:flex items-center grow">
            <ul className="flex items-center mx-auto">
              <li className="ml-5 italic uppercase">
                <Link href="/signin" className="hover:text-green-600">
                  Signin
                </Link>
              </li>
              <li className="ml-5 italic uppercase">
                <Link href="/signup" className="hover:text-green-600">
                  SignUp
                </Link>
              </li>
              <li className="ml-5 italic uppercase">
                <Link href="/profile" className="hover:text-green-600">
                  Profile
                </Link>
              </li>
              <li className="ml-5 italic uppercase">
                <Link href="/about" className="hover:text-green-600">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
