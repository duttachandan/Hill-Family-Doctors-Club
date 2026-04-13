"use client";
import React, { useEffect } from "react";
import { doctorStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const { blogs, getBlogs } = doctorStore();

  useEffect(() => {
    getBlogs();
    console.log(blogs);
  }, []);

  return (
    <section className="blog-section py-25">
      <div className="container">
        {blogs ? (
          <>
            <div className="text-center mb-26.5">
              <p className="text-[16px] lg:text-[25px]">
                {blogs.getHeadingBlogs?.heading2}
              </p>
              <h2 className="text-[28px] font-medium lg:text-[40px] mt-3 capitalize">
                {blogs.getHeadingBlogs?.heading1}
              </h2>
            </div>
            <div className="flex flex-wrap items-stretch justify-center -mx-3.75">
              {blogs?.getBlogs?.map((data, index) => {
                return (
                  <div key={index} className="px-3.75 w-full sm:w-1/2 lg:w-1/3">
                    <div className="blogCard mb-4 p-3 shadow-lg rounded-lg">
                      <div className="blogImage w-full h-61.25">
                        <Image
                          width={529}
                          className="w-full h-full object-cover rounded-lg"
                          height={245}
                          src={data.blogImage}
                          alt={data.blogTitle}
                        />
                      </div>
                      <div className="blogContent">
                        <h3 className="font-Poppins font-semibold text-[18px] md:text-[20px] my-3.5">
                          {data.blogTitle}
                        </h3>
                        <p className="font-Poppins md:text-[18px] mb-3.5">
                          {data.blogContent}
                        </p>
                        <Link className="text-[20px] font-semibold" href={`/${index}`}>Read More</Link>
                      </div>
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

export default Blogs;
