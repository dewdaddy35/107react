//Product.js

import "./product.css";
import QuantityPicker from "../components/quantityPicker";
import "../services/dataService";
import { useEffect, useState } from "react";
//create a useEffect function without the catalog
//just console.log that say "hello i am a Product"
function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
  const total = (props.data.price * quantity).toFixed(2);
  useEffect(function () {
    console.log("hello i am a product");
  }, []);
  function addToCart() {
    console.log(props.data.title);
  }
  return (
    <div className="product">
      <img className="img" src={"/logo/" + props.data.image}></img>
      <h5 className="h5">{props.data.title}</h5>

      <div className="prices">
        <label className="label">Price: ${props.data.price}</label>

        <label className="label">Total: ${total}</label>
      </div>

      <button onClick={addToCart} className="product button">
        <i class="fa-solid fa-cart-shopping"></i>
        Add
      </button>

      <QuantityPicker onQuantityChange={handleQuantityChange} />
    </div>
  );
}

export default Product;
