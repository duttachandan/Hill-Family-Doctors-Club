import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { otpSchema } from "../../utils/UserValidator";
import type { ModalType, OTPType } from "@/@type/FormTypeCast";



const Modal: React.FC<ModalType> = ({ modal, setModal, email }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OTPType>({
    resolver: yupResolver(otpSchema),
  });

  const onSubmit: SubmitHandler<OTPType> = async (data) => {
    console.log(data);
    const formData = {
      email: email,
      otp: data?.otp,
    };
    console.log(formData);
    setModal(false);
  };

  return (
    <div
      className={`modal fixed inset-0 bg-[rgba(0,0,0,0.5)] 
    backdrop-blur-2xl ${modal ? "flex" : "hidden"} items-center justify-center`}
    >
      <div className="modal-content max-w-100 mx-auto p-4 bg-white rounded-md">
        <h2 className="text-xl">Type Your OTP</h2>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <p className="text-red-500">
            <span>{errors.otp?.message ? "*" : ""}</span>
            {errors.otp?.message}
          </p>
          <input
            className="w-full py-2 px-3 mb-3 border-2 mt-3"
            placeholder="XXXX"
            type="number"
            {...register("otp")}
          />

          <br />
          <input
            className="w-full py-2 px-3 bg-green-500"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
