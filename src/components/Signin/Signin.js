import React, { useState } from "react";
import Button from "../UtilityComponents/Button/Button";
import Input from "../UtilityComponents/Input/Input";
import "./Signin.scss";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin">
      <div className="signinTop">
        <h2>Login to Your account!</h2>
      </div>
      <form onSubmit={(e) => handleLogin(e)} className="loginForm">
        <div className="row">
          <Input
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row">
          <Input
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Log in Now</Button>
      </form>
      <div className="signinBottom">
        <p className="loginLink">
          Don't have an account yet? Click here to register!
        </p>
      </div>
    </div>
  );
};

export default Signin;
