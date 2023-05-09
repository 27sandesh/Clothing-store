import React from "react";
import Cloths from "./Cloth";
import { Container, Row, Button } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ClothItem = () => {
  const productLst = productsArr.map((e) => (
    <Cloths
      key={e.title}
      title={e.title}
      description={e.description}
      price={e.price}
      imageUrl={e.imageUrl}
    />
  ));
  return (
    <section>
      <Container>
        <Row>{productLst}</Row>
      </Container>
    </section>
  );
};

export default ClothItem;
