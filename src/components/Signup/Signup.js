import React, { useEffect, useState } from "react";
import "./Signup.scss";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { useDispatch, useSelector } from "react-redux";

import { signupUserStart } from "../../redux/User/user.actions";
import Input from "../UtilityComponents/Input/Input";
import Button from "../UtilityComponents/Button/Button";
import { Link, useHistory } from "react-router-dom";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userError: user.userError,
});

const Signup = () => {
  const dispatch = useDispatch();
  const { currentUser, userError } = useSelector(mapState);
  const history = useHistory();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push("/");
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userError) && userError.length > 0) {
      setErrors(userError);
    }
  }, [userError]);

  const resetForm = () => {
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleDateChange = (date) => {
    setSelectedDate(new Date(date));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(
      signupUserStart({
        name,
        surname,
        email,
        password,
        confirmPassword,
        selectedDate,
      })
    );
  };

  return (
    <div className="signup">
      <div className="signupTop">
        <h2>Register your account</h2>
      </div>
      <form onSubmit={(e) => handleRegister(e)} className="registerForm">
        {Array.isArray(errors) && errors.length > 0 && (
          <ul className="errors">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <div className="row">
          <Input
            placeholder="Name..."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Surname..."
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="row">
          <Input
            placeholder="Email..."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row">
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/DD/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Your birth date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className="row">
          <Input
            placeholder="Password..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="row">
          <Input
            placeholder="Confirm Password..."
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button className="registerBtn" type="submit">
          Register now
        </Button>
      </form>
      <div className="signupBottom">
        <p className="loginLink">
          Already have an account? Click <Link to="/login">here to Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
