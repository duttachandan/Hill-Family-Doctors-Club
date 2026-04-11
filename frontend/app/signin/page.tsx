"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userSchema } from "@/utils/UserValidator";
import type { userCredential } from "@/@type/FormTypeCast";
import Modal from "@/components/signup/Modal";

const page = () => {
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const userSubmit = (data: userCredential) => console.log(data);

  return (
    <main>
      <div className="container">
        <div className="min-h-screen flex-col flex items-center justify-center">
          <Modal
            modal={modal}
            setModal={setModal}
            setErrorModal={setErrorModal}
            email={email}
          />
          <div className="max-w-100 mx-auto w-full">
            <form onSubmit={handleSubmit(userSubmit)}>
              <p className="text-red-500">{errors?.email?.message}</p>
              <input
                type="email"
                placeholder="Ex: XYZ@gmail.com"
                className="w-full py-2 px-3 font-Poppins text-xl border mb-3 rounded-md"
                {...register("email")}
              />
              <br />
              <p className="text-red-500">{errors?.password?.message}</p>
              <input
                type="password"
                placeholder="Type Your Password"
                className="w-full py-2 px-3 text-xl font-Poppins border mb-3 rounded-md"
                {...register("password")}
              />
              <br />
              <input
                type="submit"
                value="Submit"
                className="w-full py-3 cursor-pointer bg-green-500 text-white font-bold italic"
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
