import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

export function Checkout(props) {
  return (
    <>
      <h1>Checkout</h1>
      <div
        style={{
          position: "relative",
          background: "white",
          border: "1px solid grey",
          padding: "2rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
        }}
      >
        <Form></Form>
      </div>
    </>
  );
}

Checkout.propTypes = {};
