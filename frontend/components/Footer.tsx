"use client";
import { useEffect } from "react";
import { doctorStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { logo, getLogo } = doctorStore();
  useEffect(() => {
    getLogo();
  }, []);
  return (
    <footer className="pt-12.5 text-center lg:text-start">
      <div className="container">
        <div className="flex flex-wrap -mx-3.75">
          <div className="w-full lg:w-1/3 px-3.75">
            {logo ? (
              <div className="w-fit mx-auto lg:mx-0 lg:me-auto">
                <Image
                  width={216}
                  height={88}
                  className="w-54 h-22 object-cover"
                  src={logo[0]?.image}
                  alt=""
                />
              </div>
            ) : (
              ""
            )}
            <p className="font-Poppins max-w-91 lg:mx-0 lg:me-auto mx-auto text-[17px] mt-5">
              Discover our commitment to excellence in diagnostics and
              healthcare. Contact us for reliable results and exceptional
              service.
            </p>
            <div className="subscribe text-[20px] font-Poppins font-semibold mt-5">
              Subscribe Our Newsletter
            </div>
          </div>
          <div className="w-full lg:w-1/4 px-3.75">
            <div className="footer-header mt-5 lg:mt-0 text-[25px] font-semibold text-[#7CC343]">
              Useful Links
            </div>
            <ul>
              <li>
                <Link
                  className="hover:text-[#7CC343] my-2.5 lg:my-[17.5px] "
                  href=""
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#7CC343] my-2.5 lg:my-[17.5px] "
                  href=""
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#7CC343] my-2.5 lg:my-[17.5px] "
                  href=""
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#7CC343] my-2.5 lg:my-[17.5px] "
                  href=""
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#7CC343] my-2.5 lg:my-[17.5px] "
                  href=""
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 px-3.75">
            <div className="footer-header mt-5 lg:mt-0 text-[25px] font-semibold text-[#7CC343]">
              Address
            </div>
            <ul>
              <li>
                <Link
                  className="hover:text-[#7CC343] my-2.5 lg:my-[17.5px] "
                  href=""
                >
                  111 Adelaide, Australia
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#7CC343] my-2.5 lg:my-[17.5px] items-center justify-center lg:justify-start"
                  href=""
                  style={{ display: "flex" }}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.275 13.4875C10.075 17.025 12.975 19.925 16.5125 21.725L19.2625 18.975C19.6125 18.625 20.1 18.525 20.5375 18.6625C21.9375 19.125 23.4375 19.375 25 19.375C25.3315 19.375 25.6495 19.5067 25.8839 19.7411C26.1183 19.9755 26.25 20.2935 26.25 20.625V25C26.25 25.3315 26.1183 25.6495 25.8839 25.8839C25.6495 26.1183 25.3315 26.25 25 26.25C19.3641 26.25 13.9591 24.0112 9.97398 20.026C5.98883 16.0409 3.75 10.6359 3.75 5C3.75 4.66848 3.8817 4.35054 4.11612 4.11612C4.35054 3.8817 4.66848 3.75 5 3.75H9.375C9.70652 3.75 10.0245 3.8817 10.2589 4.11612C10.4933 4.35054 10.625 4.66848 10.625 5C10.625 6.5625 10.875 8.0625 11.3375 9.4625C11.475 9.9 11.375 10.3875 11.025 10.7375L8.275 13.4875Z"
                      fill="#252525"
                    />
                  </svg>
                  <span className="ms-2.5">2233558844</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6 px-3 75">
            <div className="mt-5 lg:mt-0 text-[25px] font-semibold text-[#7CC343]">
              Social Media Links
            </div>
            <ul className="flex gap-2 2xl:gap-7 mt-5 justify-center lg:justify-start">
              <li>
                <Link className="hover:text-[#7CC343]" href="">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4102 7.49997C10.4098 8.29562 10.0933 9.05853 9.53042 9.62086C8.96753 10.1832 8.20431 10.4989 7.40866 10.4985C6.61301 10.4981 5.8501 10.1816 5.28778 9.61873C4.72545 9.05584 4.40976 8.29262 4.41016 7.49697C4.41055 6.70133 4.72701 5.93842 5.2899 5.37609C5.85279 4.81377 6.61601 4.49808 7.41166 4.49847C8.20731 4.49887 8.97021 4.81532 9.53254 5.37821C10.0949 5.94111 10.4106 6.70432 10.4102 7.49997ZM10.5002 12.72H4.50016V31.5H10.5002V12.72ZM19.9802 12.72H14.0102V31.5H19.9202V21.645C19.9202 16.155 27.0752 15.645 27.0752 21.645V31.5H33.0002V19.605C33.0002 10.35 22.4102 10.695 19.9202 15.24L19.9802 12.72Z"
                      fill="#252525"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#7CC343]" href="">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.6886 9C32.5336 9.525 31.2886 9.87 29.9986 10.035C31.3186 9.24 32.3386 7.98 32.8186 6.465C31.5736 7.215 30.1936 7.74 28.7386 8.04C27.5536 6.75 25.8886 6 23.9986 6C20.4736 6 17.5936 8.88 17.5936 12.435C17.5936 12.945 17.6536 13.44 17.7586 13.905C12.4186 13.635 7.66359 11.07 4.49859 7.185C3.94359 8.13 3.62859 9.24 3.62859 10.41C3.62859 12.645 4.75359 14.625 6.49359 15.75C5.42859 15.75 4.43859 15.45 3.56859 15V15.045C3.56859 18.165 5.78859 20.775 8.72859 21.36C7.78485 21.6194 6.79365 21.6554 5.83359 21.465C6.241 22.7437 7.0389 23.8626 8.11512 24.6644C9.19134 25.4662 10.4918 25.9105 11.8336 25.935C9.5591 27.7358 6.73961 28.7091 3.83859 28.695C3.32859 28.695 2.81859 28.665 2.30859 28.605C5.15859 30.435 8.54859 31.5 12.1786 31.5C23.9986 31.5 30.4936 21.69 30.4936 13.185C30.4936 12.9 30.4936 12.63 30.4786 12.345C31.7386 11.445 32.8186 10.305 33.6886 9Z"
                      fill="#252525"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#7CC343]" href="">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7 3H24.3C29.1 3 33 6.9 33 11.7V24.3C33 26.6074 32.0834 28.8203 30.4518 30.4518C28.8203 32.0834 26.6074 33 24.3 33H11.7C6.9 33 3 29.1 3 24.3V11.7C3 9.39262 3.9166 7.17974 5.54817 5.54817C7.17974 3.9166 9.39262 3 11.7 3ZM11.4 6C9.96783 6 8.59432 6.56893 7.58162 7.58162C6.56893 8.59432 6 9.96783 6 11.4V24.6C6 27.585 8.415 30 11.4 30H24.6C26.0322 30 27.4057 29.4311 28.4184 28.4184C29.4311 27.4057 30 26.0322 30 24.6V11.4C30 8.415 27.585 6 24.6 6H11.4ZM25.875 8.25C26.3723 8.25 26.8492 8.44754 27.2008 8.79917C27.5525 9.15081 27.75 9.62772 27.75 10.125C27.75 10.6223 27.5525 11.0992 27.2008 11.4508C26.8492 11.8025 26.3723 12 25.875 12C25.3777 12 24.9008 11.8025 24.5492 11.4508C24.1975 11.0992 24 10.6223 24 10.125C24 9.62772 24.1975 9.15081 24.5492 8.79917C24.9008 8.44754 25.3777 8.25 25.875 8.25ZM18 10.5C19.9891 10.5 21.8968 11.2902 23.3033 12.6967C24.7098 14.1032 25.5 16.0109 25.5 18C25.5 19.9891 24.7098 21.8968 23.3033 23.3033C21.8968 24.7098 19.9891 25.5 18 25.5C16.0109 25.5 14.1032 24.7098 12.6967 23.3033C11.2902 21.8968 10.5 19.9891 10.5 18C10.5 16.0109 11.2902 14.1032 12.6967 12.6967C14.1032 11.2902 16.0109 10.5 18 10.5ZM18 13.5C16.8065 13.5 15.6619 13.9741 14.818 14.818C13.9741 15.6619 13.5 16.8065 13.5 18C13.5 19.1935 13.9741 20.3381 14.818 21.182C15.6619 22.0259 16.8065 22.5 18 22.5C19.1935 22.5 20.3381 22.0259 21.182 21.182C22.0259 20.3381 22.5 19.1935 22.5 18C22.5 16.8065 22.0259 15.6619 21.182 14.818C20.3381 13.9741 19.1935 13.5 18 13.5Z"
                      fill="#252525"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#7CC343]" href="">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33 18C33 9.72 26.28 3 18 3C9.72 3 3 9.72 3 18C3 25.26 8.16 31.305 15 32.7V22.5H12V18H15V14.25C15 11.355 17.355 9 20.25 9H24V13.5H21C20.175 13.5 19.5 14.175 19.5 15V18H24V22.5H19.5V32.925C27.075 32.175 33 25.785 33 18Z"
                      fill="#252525"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="rights text-center mt-4 mb-2.5">
          @ 2025 All rights reserved Indrajit Roy & Chandan Dutta
        </div>
      </div>
    </footer>
  );
};

export default Footer;
