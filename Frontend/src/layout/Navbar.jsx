import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authLogin } from "../reducers/loginReducer";

const Navbar = () => {
  const data = useSelector((state) => console.log(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authLogin());
  }, []);

  return (
    <>
      <header>
        <div className="px-3 py-4 text-bg-dark border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                DoctorsClub
              </a>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href="#" className="nav-link text-secondary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    Doctors
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    Appointment
                  </a>
                </li>
              </ul>
              <div className="text-end">
                <button type="button" className="btn btn-light text-dark me-2">
                  Login
                </button>
                <button type="button" className="btn btn-primary">
                  Sign-up
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
