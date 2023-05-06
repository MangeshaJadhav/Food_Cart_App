import React from "react";
import "./new.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  return (
    <div className="flex shopping-card">
      <div classname="messHeader" onClick={() => props.handleShow(false)}>
        Choose Best Mess
      </div>

      <div classname="messCart" onClick={() => props.handleShow(true)}>
        <span className="headerHome" onClick={() => navigate("/home")}>
          Home
        </span>{" "}
        <span className="headerHome">Cart </span>
        <sup className="headerCount"> {props.count} </sup>
      </div>
    </div>
  );
}

export default Header;
