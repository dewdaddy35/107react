// QuantityPicker.js
import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    if (quantity !== newQuantity) {
      setQuantity(newQuantity);

      props.onQuantityChange(newQuantity);
    }
  };
  function decreaseQuantity() {
    console.log("Deacreasing quantity");
    // quantity = 100; dont do this
    //setquantity(100); this is right
    if (quantity === 1) return;
    handleQuantityChange(quantity - 1);
    //let val = quantity - 1;
    //setQuantity(val);
  }
  function increaseQuatity() {
    console.log("Increasing quantity");
    handleQuantityChange(quantity + 1);
    // let val = quantity + 1;
    // setQuantity(val);
  }

  return (
    <div className="qty-Picker d-inline-flex gap-1">
      <button disabled={quantity === 1} onClick={decreaseQuantity}>
        -
      </button>
      <label>{quantity}</label>
      <button
        type="button"
        class="btn"
        data-bs-toggle="button"
        onClick={increaseQuatity}
      >
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
