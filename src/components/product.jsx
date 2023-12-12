//Product.js

import "./product.css";

import QuantityPicker from "../components/quantityPicker";
import "../services/dataService";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../store/globalContext";
//create a useEffect function without the catalog
//just console.log that say "hello i am a Product"
function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  let addProductToCart = useContext(GlobalContext).addProductToCart;

  const total = (props.data.price * quantity).toFixed(2);
  useEffect(function () {}, []);
  function addToCart() {
    let prod = { ...props.data };
    prod.quantity = quantity;

    addProductToCart(prod);
  }
  return (
    <div className="product">
      <img className="img" src={"/logo/" + props.data.image}></img>
      <h5 className="h5">{props.data.title}</h5>

      <div className="prices">
        <label className="label">Price: ${props.data.price}</label>

        <label className="label">Total: ${total}</label>
      </div>

      <QuantityPicker onQuantityChange={handleQuantityChange} />
      <button onClick={addToCart} className="product button">
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  );
}

export default Product;
