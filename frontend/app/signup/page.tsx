"use client";

import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { type userCredential } from "@/@type/FormTypeCast";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/utils/UserValidator";
import { doctorStore } from "@/store/store";
import { useEffect, useState } from "react";
import Modal from "@/components/signup/Modal";
import { useRouter } from "next/navigation";

const page = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
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
    setEmail(data.email);
    await UserRegister(data);
  };

  // OTP field Trigger
  useEffect(() => {
    if (user?.success) {
      setModal(true);
    }
    if (user?.message) {
      setErrorModal(true);
      setTimeout(() => {
        setErrorModal(false);
        router.push("/signup");
      }, 3000);
    }
  }, [user]);

  return (
    <main>
      <section className="banner_section">
        <div className="container">
          <div className="min-h-screen flex-col flex items-center justify-center">
            <h1 className="text-xl mb-4 capitalize font-bold">
              Sign Up For Booking Appointment
            </h1>
            <div
              className={`${errorModal ? "flex" : "hidden"} fixed 
              items-center justify-center inset-0 bg-[rgba(0,0,0,0.5)] 
              backdrop-blur`}
              onClick={() => {
                setErrorModal(false);
              }}
            >
              <div className="modal-box bg-white p-3">
                <p className="text-red-500 capitalize">*{user?.message}</p>
              </div>
            </div>
            <Modal
              modal={modal}
              setModal={setModal}
              setErrorModal={setErrorModal}
              email={email}
            />
            <div className="max-w-100 mx-auto w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <p className="text-red-500">{errors?.email?.message}</p>
                <input
                  type="email"
                  placeholder="Ex: XYZ@gmail.com"
                  className="w-full py-2 px-3 font-roboto text-xl border mb-3 rounded-md"
                  {...register("email")}
                />
                <br />
                <p className="text-red-500">{errors?.password?.message}</p>
                <input
                  type="password"
                  placeholder="Type Your Password"
                  className="w-full py-2 px-3 text-xl font-roboto border mb-3 rounded-md"
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
      </section>
    </main>
  );
};

export default page;
