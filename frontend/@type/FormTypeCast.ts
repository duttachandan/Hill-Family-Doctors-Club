import React from "react";

export type userCredential = {
  email: string;
  password: string;
};

export type AppState = React.Dispatch<React.SetStateAction<boolean>>;

export type ModalType = {
  modal: boolean;
  setModal: AppState;
  setErrorModal: AppState;
  email: string;
};

export type OTPType = {
  otp: string;
};

export type UserOtp = {
  email: string;
  userOtp: string;
};
