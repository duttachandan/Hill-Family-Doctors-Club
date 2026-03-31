"use client";
import React, { useEffect } from "react";
import { doctorStore } from "@/store/store";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  const { Services, getServices } = doctorStore();

  useEffect(() => {
    getServices();
    console.log(Services);
  }, []);
  return (
    <section className="py-12.5">
      <div className="container">
        {Services ? (
          <>
            <div className="text-center">
              <div className="subtitle text-[20px] lg:text-[25px] text-center">
                {Services.content.heading2}
              </div>
              <h2 className="text-[28px] font-medium lg:text-[40px] mt-3 mb-22.5 text-center capitalize">
                {Services.content.heading1}
              </h2>
            </div>
            <div className="flex flex-wrap -mx-3.75">
              {Services?.services.map((elem, index) => {
                return (
                  <div className="lg:w-1/3 md:w-1/2 w-full px-3.75" key={index}>
                    <div className="services-card p-3.75 rounded-md shadow-lg">
                      <div className="services-heading mb-5 flex items-center">
                        <Image
                          height={82}
                          width={82}
                          src={elem.icon}
                          alt={elem.cardHeader}
                          className="rounded-full"
                        />
                        <h3 className="ml-5 text-[25px] font-Poppins font-medium">{elem.cardHeader}</h3>
                      </div>
                      <div className="services-paragraph text-[18px] mb-5">{elem.paragraph}</div>
                      <Link
                        style={{ display: "flex" }}
                        className="items-center"
                        href=""
                      >
                        <span className="mr-2">Read More</span>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 20L22.5 15M22.5 15L17.5 10M22.5 15H7.5"
                            stroke="#252525"
                            strokeWidth="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Services;
