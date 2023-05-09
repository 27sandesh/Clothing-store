import React, { useContext } from "react";
import DataContext from "../Store/Data-context";
import { Image } from "react-bootstrap";
const CartItem = (props) => {
  const ctx = useContext(DataContext);
  function amountAdder() {
    ctx.removeItem("add", props.index);
  }
  function amountDeleter() {
    ctx.removeItem("delete", props.index);
  }
  return (
    <ul>
      <span>
        <img src={props.e.imageUrl} alt={props.alt} />
      </span>
      <h2>{props.e.title}</h2>
      <span>{`$${props.e.price.toFixed(2)}`}</span>
      <h2>X</h2>
      <span>{`${props.e.amount}`}</span>

      <div>
        <button onClick={amountAdder}>+</button>
        <button onClick={amountDeleter}>-</button>
      </div>
    </ul>
  );
};
export default CartItem;
