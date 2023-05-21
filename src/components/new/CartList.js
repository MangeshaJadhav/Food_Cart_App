import { useEffect, useState } from "react";
import "./new.css";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    // <div></div>
    <div className="cartContainer">
      <div>
        {CART?.map((cartItem, cartindex) => {
          return (
            <div className="subcartContainer">
              <img className="prooImg" src={cartItem.url} alt="img" />
              <span> {cartItem.name} </span>
              <button
                className="btn"
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? {
                          ...item,
                          quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                        }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                -
              </button>
              <span> {cartItem.quantity} </span>
              <button
                className="btn"
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                +
              </button>
              <span> Rs. {cartItem.price * cartItem.quantity} </span>
            </div>
          );
        })}
      </div>

      <p className="total">
        {" "}
        Total <span></span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </p>
      <p>Thanks for Visit..!</p>
    </div>
  );
}

export default CartList;
