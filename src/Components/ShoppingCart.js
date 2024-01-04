import React, {useContext, useEffect} from "react";
import MyCartContext from "../Contexts/MyCartContext";
import ItemCard from "./ItemCard";
const ShoppingCart = () => {
  const {cartItems, setCartItems} = useContext(MyCartContext)
  useEffect(()=>{
    setCartItems(JSON.parse(localStorage.getItem("cartItems")))
    //localStorage.setItem("cartItems", JSON.stringify(cartItems));
  },[])
  return (
    <div className="shoppingCart__page">
      <h1 className="page__header">My Cart</h1>
      {
        (cartItems.length === 0) && <h1>There are no items in your Cart</h1>
      }
      {
        (cartItems.length !== 0) && <div className="shoppingCart__container">
        <div className="items__container">
          {
            cartItems.map((item)=>(
              <ItemCard item={item} itemId={item.id} key={item.id} btnType={"removeBtn"}/>
            ))
          }
        </div>
        <div className="checkout__list_container"></div>
        </div>
      }
    </div>
  );
};

export default ShoppingCart;
