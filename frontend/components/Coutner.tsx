"use client";
import { doctorStore } from "@/store/store";
import { useEffect } from "react";

export default function Counter() {
  const { doctors, fetchDoctors } = doctorStore();

  useEffect(() => {
    fetchDoctors();
    console.log(doctors);
  }, []);
  return (
    <div className="py-2 px-3 border-2 border-red-500">
      {doctors &&
        doctors.map((element, index) => {
          return <div key={index}>{element.name}</div>;
        })}
    </div>
  );
}
