import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authLogin } from "../reducers/loginReducer";
import { object, string } from "yup";
import Swal from "sweetalert2";

const Login = () => {
  const formValidator = object({
    email: string().email("Must be a valid Email").lowercase().required(),
    password: string().min(8, "must be 8 characters long").required(),
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
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonText: "danger",
      });
    }
    dispatch(authLogin(formData));
  };

  return (
    <section>
      <div className="container">
        <form className="max-w-300" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleInput}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
