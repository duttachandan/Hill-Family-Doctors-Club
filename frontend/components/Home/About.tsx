"use client";
import { doctorStore } from "@/store/store";
import { useEffect } from "react";
import Image from "next/image";

const About = () => {
  const { getAbout, about } = doctorStore();
  useEffect(() => {
    getAbout();
    console.log(about);
  }, []);

  return (
    <section>
      <div className="container">
        {about ? (
          <>
            <div className="subtitle text-[20px] lg:text-[25px] text-center">
              {about?.heading1}
            </div>
            <h2 className="text-[28px] lg:text-[40px] text-center">
              {about?.heading1}
            </h2>
            <div className="flex flex-wrap -mx-3.75 items-center">
              <div className="w-full lg:w-1/2 px-3.75">
                <div className="image">
                  <Image
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                    src={about?.image as string}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3.75">
                <p className="text-[16px]">{about?.paragraph}</p>
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
