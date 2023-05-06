import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import messes from "./data";
import Cart from "./components/cart/cart";
import NewHome from "./components/new/NewHome";

function App() {
  const { productItems } = messes;
  const [user, setLoginUser] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          {/* <Route exact path="/">
            {
              user && user._id ? <Homescreen setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route> */}

          <Route
            path="/login"
            element={<Login />}
            setLoginUser={setLoginUser}
          ></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route
            path="/home"
            element={
              <Homescreen
                handleAddProduct={handleAddProduct}
                productItems={productItems}
              />
            }
          ></Route>
          <Route path="/cart" element={<NewHome />}></Route>
          <Route
            path="/cartmenu"
            element={
              <Cart
                productItems={productItems}
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/**
 * npx create-react-app client
 * cd client
 * npm start
 * npm i bootstrap
 */
