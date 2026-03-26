"use client";
import { doctorStore } from "@/store/store";
import { useEffect } from "react";
import Link from "next/link";

export default function Counter() {
  const { doctors, fetchDoctors } = doctorStore();
  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <section className="card-Section py-5">
      <div className="container">
        <h2 className="text-3xl mb-3">Doctors List:</h2>
        <div className="flex -mx-3.75 flex-wrap items-center justify-center">
          {doctors &&
            doctors.map((element, index) => {
              return (
                <div
                  className="w-100 md:w-[50%] lg:w-[33.33%] px-3.75"
                  key={index}
                >
                  <div className="p-3 text-center border mb-3">
                    <div className="card-name font-space">
                      Dr.{"  "}
                      <span className="text-2xl">{element.name}</span>
                    </div>
                    <div className="font-Poppins my-2">
                      Price :{"  "}
                      <span className="text-xl font-space text-green-500">
                        {element.fees}₹
                      </span>
                    </div>
                    <div className="font-Poppins">
                      {element.availableSlots[0]?.date}
                    </div>
                    <div className="font-Poppins">
                      {element.availableSlots[0]?.time}
                    </div>
                    <div>
                      Paitent:{" "}
                      <span className="text-lg text-red-400">
                        {element.specialization}
                      </span>
                    </div>
                    <div className="flex justify-center items-center mt-2">
                      <Link
                        className="py-2 px-5 rounded-lg bg-green-500 text-white"
                        href=""
                      >
                        Take Appointment
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
