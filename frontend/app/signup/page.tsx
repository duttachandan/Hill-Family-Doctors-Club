"use client";

import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { type userCredential } from "@/@type/FormTypeCast";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/utils/UserValidator";
import { doctorStore } from "@/store/store";
import { useEffect, useState } from "react";

type OTP = {
  otp: number;
  email: string;
};

const page = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { UserRegister, user } = doctorStore();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userCredential>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<userCredential> = async (data) => {
    await UserRegister(data);
  };

  useEffect(() => {
    if (user?.success) {
      setModal(true);
    }
  }, [user]);

  return (
    <main>
      <div
        className={`modal fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-2xl ${modal ? "flex" : "hidden"} items-center justify-center`}
      >
        <div className="modal-content bg-white">
          <h2 className="text-3xl">Type Your OTP</h2>
          <form>
            <input type="number" />
          </form>
        </div>
      </div>
      <section className="banner_section">
        <div className="container">
          <div className="min-h-screen flex-col flex items-center justify-center">
            <h1 className="text-xl mb-4 capitalize font-bold">
              Sign Up For Booking Appointment
            </h1>
            <div className="max-w-100 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <p className="text-red-500">{errors?.email?.message}</p>
                <input
                  type="email"
                  placeholder="Ex: XYZ@gmail.com"
                  className="w-100 py-2 px-3 font-roboto text-xl border mb-3 rounded-md"
                  {...register("email")}
                />
                <br />
                <p className="text-red-500">{errors?.password?.message}</p>
                <input
                  type="password"
                  placeholder="Type Your Password"
                  className="w-100 py-2 px-3 text-xl font-roboto border mb-3 rounded-md"
                  {...register("password")}
                />
                <br />
                <input
                  type="submit"
                  value="Submit"
                  className="w-100 py-3 cursor-pointer bg-green-500 text-white font-bold italic"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
