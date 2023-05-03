import React from "react";
import { Container } from "react-bootstrap";

const Header = (props) => {
  return (
    <Container>
      <div>{props.name}</div>
    </Container>
  );
};

export default Header;
