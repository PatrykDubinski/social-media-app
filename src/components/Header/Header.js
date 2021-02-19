import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOutUserStart } from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <nav>
        <ul>
          {currentUser && [
            <li key={1}>
              <Link to="/">Home</Link>
            </li>,
            <li key={2}>
              <Link to="/account">My Account</Link>
            </li>,
            <li key={3}>
              <span onClick={() => signOut()}>Logout</span>
            </li>,
          ]}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
