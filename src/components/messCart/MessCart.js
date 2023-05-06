import React from "react";

const MessCart = (cartItems, handleAddProduct, productItems) => {
  return (
    <div className="cart-items">
      <div>
        <h2>Welcome to Cart Section</h2>
      </div>
      <div className="cart-items-header">
        {cartItems.length === 0 && <div>No items into cart</div>}
      </div>

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-list">
            <img className="cart-itmes-image" src={item.img} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessCart;
