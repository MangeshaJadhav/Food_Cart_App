import React, { useState } from "react";
import "./login.css";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [response, setResponse] = useState([]);

  const HandleLogin = async () => {
    const resp = await fetch("http://localhost:9002/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await resp.json();
    console.log(data);
    if (data.token) {
        localStorage.setItem("jwt", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        navigate('/home');
        alert(resp.data.message);
    }
    
    setResponse(data);
    console.log(response.message === "Login Successful");
    console.log(JSON.stringify(response) === "Login Successful");
    console.log(response.token);
  };
  return (
    <div className="mainCont">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter your Email"
        ></input>
        <input
          type="password"
          name="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter your Password"
        ></input>
        <div className="button" onClick={HandleLogin}
        type="submit">
          Login
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/register")}>
          Register
        </div>
      </div>
    </div>
  );
};

export default Login;
