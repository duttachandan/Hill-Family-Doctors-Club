"use client";
import { doctorStore } from "@/store/store";
import { useEffect } from "react";
import Image from "next/image";

const About = () => {
  const { getAbout, about } = doctorStore();

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <section className="py-12.5">
      <div className="container">
        {about ? (
          <>
            <div className="subtitle text-[20px] lg:text-[25px] text-center">
              {about?.heading2}
            </div>
            <h2 className="text-[28px] font-medium lg:text-[40px] mt-3 mb-22.5 text-center capitalize">
              {about?.heading1}
            </h2>
            <div className="flex flex-wrap -mx-3.75 items-center">
              <div className="w-full lg:w-1/2 px-3.75">
                <div className="max-w-139.5 mx-auto overflow-hidden rounded-lg">
                  <Image
                    width={558}
                    height={550}
                    className="w-full h-full object-contain"
                    src={about?.image as string}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3.75 mt-8 lg:mt-0 text-center lg:text-start">
                <p className="text-[16px] lg:text-[25px]">{about?.paragraph}</p>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default About;
