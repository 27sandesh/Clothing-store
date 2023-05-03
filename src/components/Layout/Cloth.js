import React from "react";
import { Card, Button } from "react-bootstrap";

const Cloths = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">{props.price}</Button>
      </Card.Body>
    </Card>
  );
};

export default Cloths;
