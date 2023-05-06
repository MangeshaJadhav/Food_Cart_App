import React from "react";
import { useState } from "react";
import Header from "./Header";
import CartList from "./CartList";
import ProductList from "./ProductList";

const NewHome = () => {
  const [product, setProduct] = useState([
    {
      url: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/t/f/p104821-16487263886245917424433.jpg?tr=tr:n-xlarge",
      name: "Sadhguru Mess",
      category: "Veg",
      seller: "Best Mess 4 Chapati,Rice,Dal,Sweets,Curry,and Many More",
      price: 1500,
    },
    {
      url: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/8/d/p/p8020-1651153635626a9ae3bb7eb.jpg?tr=tr:n-xlarge",
      name: "Wagholi Shahi",
      category: "Veg/Non-Veg",
      seller: "Veg plus chiken Thali",
      price: 2000,
    },
    {
      url: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/j/x/p49505-15464248895c2c92391344e.jpg?tr=tr:n-xlarge",
      name: "Manapa Annapurna",
      category: "Non-Veg",
      seller: "Best Chiken Thali with 5 Chapati,Rice,Dal,Sweets",
      price: 2200,
    },
    {
      url: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/8/w/l/p8020-1651153669626a9b05d83c9.jpg?tr=tr:n-xlarge",
      name: "Wagholi Mess",
      category: "veg",
      seller: "Famous Misal and Mess 4 Chapati,Rice,Dal,Sweets",
      price: 1500,
    },
    {
      url: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/d/i/p58789-167758837863fdf79a26c58.jpg?tr=tr:n-xlarge",
      name: "Hadapsar Punjabi",
      category: "Veg/Non-Veg",
      seller: "Famous Punjbi Thali",
      price: 2000,
    },
    {
      url: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/7/h/j/p7011-15967768575f2ce19979be7.jpg?tr=tr:n-large",
      name: "Wagholi Darbar",
      category: "Veg/Non-Veg",
      seller: "Best Chiken Thali with 4 Chapati,Rice,Dal,Sweets",
      price: 2200,
    },
  ]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };
  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}
    </div>
  );
};

export default NewHome;
