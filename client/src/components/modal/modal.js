import React, { Fragment } from "react";

const style = {
  container: {
    position: "fixed",
    top: "50%",
    left: "50%",
    background: "white",
    border: "1px solid #ccc",
    borderRadius: 8,
    padding: 20,
    maxWidth: 300,
    transform: "translate(-50%, -50%)"
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    height: 10,
    width: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  h1: {
    fontSize: "1.2rem"
  }
};

const Modal = props => (
  <Fragment>
    {props.opened ? (
      <div style={style.container}>
        {props.children}
      </div>
    ) : null}
  </Fragment>
);

export default Modal;