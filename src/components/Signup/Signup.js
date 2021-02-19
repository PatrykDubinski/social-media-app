import React, { useState } from "react";
import "./Signup.scss";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import Input from "../UtilityComponents/Input/Input";
import Button from "../UtilityComponents/Button/Button";

const Signup = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup">
      <div className="signupTop">
        <h2>Register your account</h2>
      </div>
      <form onSubmit={(e) => handleRegister(e)} className="registerForm">
        <div className="row">
          <Input
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Surname..."
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="row">
          <Input
            placeholder="Email..."
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="row">
          <Input
            placeholder="Confirm Password..."
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
          Already have an account? Click here to Log In
        </p>
      </div>
    </div>
  );
};

export default Signup;
