import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Item from "./components/Layout/Item";
import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <Fragment>
      <header>
        <Header name={"GENRICS"}></Header>
        <Cart />
      </header>
      <main>
        <Item />
      </main>
    </Fragment>
  );
}

export default App;
