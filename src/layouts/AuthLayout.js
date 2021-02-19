import React from "react";
import Footer from "../components/Footer/Footer";

const AuthLayout = ({ children }) => {
  return (
    <div className="fullHeight authLayout">
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
