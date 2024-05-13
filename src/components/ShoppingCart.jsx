/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Offcanvas, Stack, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";

export function ShoppingCart({ isOpen }) {
  const { cartItems, closeCart, clearCart } = useContext(CartContext);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = JSON.parse(localStorage.getItem("articles")).find(
                  (i) => i.id === cartItem.id
                );
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <Button onClick={() => clearCart()} variant="success">
            Checkout
          </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

ShoppingCart.propTypes = {
  isOpen: PropTypes.bool,
};
