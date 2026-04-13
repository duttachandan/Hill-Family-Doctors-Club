"use client";
import React, { useEffect } from "react";
import type { blogs } from "@/@type/StoreTypeCast";
import { doctorStore } from "@/store/store";

const Blogs = () => {
  const { blogs, getBlogs } = doctorStore();
  useEffect(() => {
    getBlogs();
    console.log(blogs);
  },[]);
  return (
    <section>
      <div className="container"></div>
    </section>
  );
};

export default Blogs;
