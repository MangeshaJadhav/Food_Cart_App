import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const HandleLogout = () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/");
    }
  }, []);

  const y = localStorage.getItem("user");
  const z = JSON.parse(y);
  const em = z.email;
  const na = em.split("@")[0];
  console.log(na);
  console.log(JSON.parse(y));
  return (
    <div className="navbarColor">
      <nav className=" navbar navbarColor navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="#">
          MessCart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="logout " onClick={HandleLogout}>
                Logout
              </button>
            </li>
            <li className="nav-item">
              <Link to="/cart">
                <button className="logout ">Cart</button>
              </Link>
            </li>

            {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
