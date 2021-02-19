import React from "react";
import Background from "../UtilityComponents/Background/Background";
import "./Modal.scss";

const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return (
    <>
      <Background toggleModal={toggleModal} hideModal={hideModal} />
      <div className="modal">{children}</div>
    </>
  );
};

export default Modal;
