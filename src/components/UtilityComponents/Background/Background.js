import React from "react";
import "./Background.scss";

const Background = ({ hideModal, toggleModal }) => {
  return (
    !hideModal && <div onClick={() => toggleModal()} className="background" />
  );
};

export default Background;
