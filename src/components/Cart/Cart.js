import { useContext, useState } from "react";
import DataContext from "../Store/Data-context";
import CartItem from "./CartItem";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = (props) => {
  const ctx = useContext(DataContext);
  let price = 0;
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal((prev) => !prev);
  }

  const CartItems = (
    <div>
      {console.log("cart", ctx.cartItemList)}
      {ctx.cartItemList ? (
        ctx.cartItemList.map((e, index) => {
          price = price + e.price * e.amount;
          return (
            <CartItem key={`${e.title}_cart`} e={e} index={index}></CartItem>
          );
        })
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );

  return (
    <div>
      <Button variant="primary" onClick={toggleModal}>
        Open Cart
      </Button>
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>{CartItems}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
