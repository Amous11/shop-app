/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function StoreItem({ id, title, price, image }) {
  const {
    cartItems,
    addToCart,
    decreaseItemQuantity,
    removeFromCart,
    getQuantity,
  } = useContext(CartContext);
  const quantity = getQuantity(id);

  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={image}
          height="275px"
          style={{ objectFit: "contain" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-4">{title}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button className="w-100" onClick={() => addToCart(id)}>
                + Add to Cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                  <div className="fs-3">{quantity}</div>
                  <Button
                    onClick={() => {
                      addToCart(id);
                    }}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
StoreItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};
