import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [ user, setLoginUser] = useState({})
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

          <Route path="/login" element={<Login />} setLoginUser={setLoginUser}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Homescreen />}></Route>
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
