import { useState } from "react";
import { Button, Image, ListGroup } from "react-bootstrap";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const removeItem = (index) => {
    const updatedCartElements = [...cartElements];
    updatedCartElements.splice(index, 1);
    setCartElements(updatedCartElements);
  };

  return (
    <>
      <Button variant="primary" onClick={toggleCart}>
        Cart
      </Button>
      {showCart && (
        <div>
          <h3>Cart Items:</h3>
          <ListGroup>
            {cartElements.map((item, index) => (
              <ListGroup.Item key={index}>
                <Image src={item.imageUrl} alt={item.title} fluid />
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <Button variant="danger" onClick={() => removeItem(index)}>
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </>
  );
};
export default Cart;
