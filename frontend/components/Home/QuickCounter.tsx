"use client";
import { useEffect } from "react";
import { doctorStore } from "@/store/store";
import Link from "next/link";
import Image from "next/image";

const QuickCounter = () => {
  const { getQuickCounter, quickCounter } = doctorStore();

  useEffect(() => {
    getQuickCounter();
  }, []);

  return (
    <section className="py-12.5">
      <div className="container">
        {quickCounter ? (
          <div className="flex flex-wrap-reverse items-center -mx-3.75">
            <div className="w-full lg:w-1/2 px-3.75 text-center lg:text-start">
              <h2 className="text-[28px] font-medium lg:text-[40px] mb-3 capitalize">
                {quickCounter?.heading2}
              </h2>
              <p className="text-[16px] lg:text-[25px]">
                {quickCounter?.paragraph}
              </p>
              <Link
                className="py-3.5 px-4 bg-[#7CC343] transition duration-300
              hover:bg-[#65a035] rounded-lg text-white mt-4"
                href="/appoinment"
              >
                Book An Appoinment
              </Link>
            </div>
            <div className="w-full lg:w-1/2 px-3.75">
              <div className="max-w-172.75 mx-auto rounded-circle overflow-hidden">
                <Image
                  width={691}
                  height={691}
                  quality={100}
                  className="w-full h-full object-contain"
                  src={quickCounter?.image as string}
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default QuickCounter;
