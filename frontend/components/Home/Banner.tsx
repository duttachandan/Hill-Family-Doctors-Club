"use client";
import { doctorStore } from "@/store/store";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  const { getBanner, banner } = doctorStore();
  
  useEffect(() => {
    getBanner();
  }, []);
  
  return (
    <section className="py-10 lg:py-25">
      <div className="container">
        <div className="-mx-3.75 py-3.75 flex flex-wrap-reverse items-center">
          <div className="w-full lg:w-1/2 px-3.75">
            {banner ? (
              <div className="mt-10 lg:mt-0">
                <div className="text-[24px] lg:text-[35px]">
                  {banner.heading2}
                </div>
                <h1 className="text-[32px] lg:text-[64px] my-3 font-medium font-Poppins capitalize">
                  {banner.heading1}
                </h1>
                <p className="text-[18px] lg:text-[25px]">{banner.paragraph}</p>
                <Link
                  className="py-3.5 px-4 bg-[#7CC343] transition duration-300
              hover:bg-[#65a035] rounded-lg text-white mt-4"
                  href="/appoinment"
                >
                  Book An Appointment
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="w-full lg:w-1/2 px-3.75">
            {banner ? (
              <div className="lg:max-w-[639.76px] w-full h-fit mx-auto lg:ms-auto relative">
                <Image
                  width={639.76}
                  height={100}
                  className="w-full h-fit object-cover"
                  src={banner?.image as string}
                  alt=""
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
