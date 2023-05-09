import React, { useContext } from "react";
import DataContext, { DataContextProvider } from "../Store/Data-context";
import { Card, Button } from "react-bootstrap";
const Cloths = (props) => {
  const ctx = useContext(DataContext);

  function addHandler(e) {
    e.preventDefault();

    ctx.onAdd({
      id: props.title,
      title: props.title,
      price: props.price,
      amount: 1, // Update the amount directly to 1
      imageUrl: props.imageUrl,
    });
    console.log("cloths", ctx.onAdd.amount);
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">{props.price}</Button>
        <Button variant="primary" onClick={addHandler}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cloths;
