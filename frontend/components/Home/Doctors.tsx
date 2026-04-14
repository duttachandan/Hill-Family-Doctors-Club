"use client";
import { doctorStore } from "@/store/store";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import cloudinaryImageConverter from "@/utils/cloudinaryImage";

export default function Counter() {
  const { doctors, fetchDoctors } = doctorStore();
  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <section className="card-Section py-5">
      <div className="container">
        <div className="text-center mb-26.5">
          <p className="text-[16px] lg:text-[25px]">Our Team</p>
          <h2 className="text-[28px] font-medium lg:text-[40px] mt-3 capitalize">
            Meet Our Professional Team
          </h2>
        </div>
        <div className="flex -mx-3.75 flex-wrap items-stretch justify-center">
          {doctors &&
            doctors.map((element, index) => {
              return (
                <div
                  className="w-full md:w-1/2 lg:w-1/4 px-3.75 h-full mb-4"
                  key={index}
                >
                  <div className="card shadow-xl rounded-lg p-2 h-full">
                    <div className="image w-full h-65 rounded-lg">
                      <Image
                        width={300}
                        className="w-full h-full object-cover object-top"
                        height={300}
                        loading="eager"
                        fetchPriority="high"
                        quality={50}
                        src={cloudinaryImageConverter(element?.Image, {})}
                        alt={element?.name}
                      />
                    </div>
                    <div className="text-center mt-3">
                      <h3 className="text-lg lg:text-xl font-Poppins">
                        {element?.name}
                      </h3>
                      <p>{element?.specialization}</p>
                      <Link
                        className="py-3.5 w-full px-4 
                        bg-[#7CC343] transition duration-300   
                        hover:bg-[#65a035] rounded-lg text-white mt-4"
                        href={`/${element?.name}`}
                      >
                        Book Appoinment
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
