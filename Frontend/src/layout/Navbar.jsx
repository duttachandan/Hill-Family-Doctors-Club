import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authLogin } from "../reducers/loginReducer";
import { NavLink } from "react-router";

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
              <NavLink
                to="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                DoctorsClub
              </NavLink>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <NavLink to="#" className="nav-link text-secondary">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="nav-link text-white">
                    Doctors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="nav-link text-white">
                    Appointment
                  </NavLink>
                </li>
              </ul>
              <div className="text-end">
                <NavLink
                  to="/login"
                  type="button"
                  className="btn btn-light text-dark me-2"
                >
                  Login
                </NavLink>
                <NavLink to="" type="button" className="btn btn-primary">
                  Sign-up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
