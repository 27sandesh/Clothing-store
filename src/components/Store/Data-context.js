import React, { useState } from "react";

const DataContext = React.createContext({
  onAdd: () => {},
  removeItem: () => {},
  noOfItems: 0,
  removeItem: (id) => {},
  togglecart: () => {},
  showCart: true,
});

export default DataContext;

export const DataContextProvider = (props) => {
  const [noOfItems, setnoOfItems] = useState(0);
  const [cartItemList, setCartItemList] = useState([]);
  const [InCartList, setInCartId] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const onAdd = (item) => {
    if (InCartList.indexOf(item.id) !== -1) {
      const list = [...cartItemList];
      list[InCartList.indexOf(item.id)].amount += parseInt(item.amount);
      setCartItemList(list);
    } else {
      setInCartId([...InCartList, item.id]);
      setCartItemList([...cartItemList, item]);
    }
  };

  const removeItem = (action, id) => {
    const preCartItem = [...cartItemList];
    const preInCart = [...InCartList];

    if (action === "add") {
      preCartItem[id].amount += 1;
      setCartItemList(preCartItem);
      setnoOfItems((noOfItems) => noOfItems + 1);
    } else {
      if (preCartItem[id].amount === 1) {
        preInCart.splice(id, 1);
        preCartItem.splice(id, 1);
        setInCartId(preInCart);
        setCartItemList(preCartItem);
        setnoOfItems((noOfItems) => noOfItems - 1);
      }
    }
  };

  function toggleCartHandler() {
    setShowCart((prev) => !prev);
  }

  return (
    <DataContext.Provider
      value={{
        onAdd: onAdd,
        removeItem: removeItem,
        cartItemList: cartItemList,
        noOfItems: noOfItems,
        togglecart: toggleCartHandler,
        showCart: showCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
