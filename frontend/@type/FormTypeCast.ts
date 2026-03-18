import React from "react";

export type userCredential = {
  email: string;
  password: string;
};

export type AppState = typeof React.useState;

export type ModalType = {
  modal: boolean;
  setModal: AppState;
  email: string;
};

export type OTPType = {
  otp: string;
};
