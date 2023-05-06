import React, { useState } from "react";
import messes from "../data";
import "./Mess.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Mess({ mess, productItems, handleAddProduct }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("veg");
  const [cartItems, setCartItems] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="m-1 shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1 style={{ fontSize: "2rem" }}>
          {mess.name} <span className="star">{mess.star}*</span>
        </h1>
        <img
          src={mess.img}
          alt="img"
          style={{ height: "30vh", width: "20vw" }}
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Types</p>
          <select
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
            className="form-control"
          >
            {mess.varients.map((varient, i) => {
              return (
                <option value="varient" key={i}>
                  {varient}
                </option>
              );
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Months</p>
          <select
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
            className="form-control"
          >
            {[...Array(6).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1">
          <h1>Price: {mess.prices[0][varient] * quantity}</h1>
          {/* <h1>Price:{mess.prices[1][varient] * quantity}</h1> */}
          {/* <h1>Price:{mess.prices[2][varient] * quantity}</h1> */}
        </div>
        {/* <Link to="/cart"></Link> */}
        <div className="m-1 w-100">
          <Link to="/cart">
            <button
              className="btn"
              onClick={() => handleAddProduct(productItems)}
            >
              Visit Cart Section
            </button>
          </Link>
        </div>
      </div>
      {/* pop up model from
       react */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{mess.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={mess.img}
            alt=""
            style={{ width: "35vw", height: "50vh" }}
          ></img>
          <p>{mess.discription}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
/**
 * varient of types is array loop throgh by using map method
 * first object so prices of 0 the index small medium large
 * map we have two para obj and index
 */
