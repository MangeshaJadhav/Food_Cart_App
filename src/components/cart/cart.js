import React from "react";

const Cart = ({ cartItems, handleAddProduct, productItems }) => {
  return (
    <div className="cart-items">
      <div>
        <h2>Welcome to Cart Section</h2>
      </div>
      <div className="cart-items-header"></div>
      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items into cart</div>
      )}

      <div>
        {cartItems.map((mess) => (
          <div key={mess.id} className="cart-item-list">
            <img className="cart-itmes-image" src={mess.img} alt={mess.name} />
            <div className="cart-item-name">{mess.name}</div>
            <div className="cart-items-function">
              <button className="cart-item-add">+</button>
              <button className="cart-item-add">-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
