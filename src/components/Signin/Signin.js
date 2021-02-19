import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { emailSignInStart } from "../../redux/User/user.actions";
import Button from "../UtilityComponents/Button/Button";
import Input from "../UtilityComponents/Input/Input";
import "./Signin.scss";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Signin = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push("/");
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(emailSignInStart({ email, password }));
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row">
          <Input
            placeholder="Password..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Log in Now</Button>
      </form>
      <div className="signinBottom">
        <p className="loginLink">
          Don't have an account yet? Click{" "}
          <Link to="/register">here to register!</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
