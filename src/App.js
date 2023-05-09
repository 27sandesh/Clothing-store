import Header from "./components/Header/Header";
import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Item from "./components/Layout/Item";
import Cart from "./components/Cart/Cart";
import { DataContextProvider } from "./components/Store/Data-context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  const [showCart, setShowCart] = useState(false);

  function toggleCartHandler() {
    setShowCart((prev) => !prev);
  }

  return (
    <DataContextProvider>
      <Router>
        <Header name={"GENRICS"} toggleCartHandler={toggleCartHandler} />
        {showCart && <Cart onClick={toggleCartHandler} />}

        <main>
          <Route path="/Store" component={Item}></Route>
        </main>
        <main>
          <Route path="/" component={Home}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact-us" component={Contact}></Route>
        </main>
      </Router>
    </DataContextProvider>
  );
}

export default App;
