import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../reducers/loginReducer";
import { object, string } from "yup";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.auth);

  const formValidator = object({
    email: string().email("Must be a valid Email").lowercase().required(),
    password: string()
      .min(8, "Password must be 8 characters long")
      .matches(/[a-z]/, "Password should contain atleast one lowercase letter")
      .matches(/[A-Z]/, "Password should contain atleast one uppercase letter")
      .matches(/[0-9]/, "Password should contain atleast one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character",
      )
      .required("Password is Required"),
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await formValidator.validate(formData);
      const response = await dispatch(authLogin(formData));
      console.log(response);
      if (response?.error) {
        Swal.fire({
          title: `${response?.error?.message}`,
          text: response?.error?.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      } else {
        navigate("/otp");
        console.log(data);
      }
    } catch (err) {
      Swal.fire({
        title: `${err.name}!`,
        text: err.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <section>
      <div className="container">
        <form className="max-w-300" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control py-2"
                id="email"
                value={formData.email}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control py-2"
                id="password"
                value={formData.password}
                onChange={handleInput}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 py-3">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
