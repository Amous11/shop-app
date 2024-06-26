/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useContext(CartContext);
  const item = JSON.parse(localStorage.getItem("articles")).find(
    (i) => i.id === id
  );

  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        style={{ width: "75px", height: "100px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.title}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontsize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontsize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(id)}
        >
          {" "}
          &times;
        </Button>
      </div>
    </Stack>
  );
}
CartItem.propTypes = {
  id: PropTypes.number,
  quantity: PropTypes.number,
};
