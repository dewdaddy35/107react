import "./cart.css";
import { useContext } from "react";
import GlobalContext from "../store/globalContext";

function Cart() {
  const cart = useContext(GlobalContext).cart;

  function getNumOfProducts() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }
    return total;
  }

  function getTotalPrice() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total.toFixed(2);
  }
  return (
    <div className="cart page">
      <h1>What Wear do you have in your Cart ?</h1>
      <h4>You have {getNumOfProducts()} number of products waiting for you</h4>

      <div className="parent">
        <div className="prods">
          {cart.map((prod) => (
            <div class="prod-cart form-control-md" key={prod.id}>
              <img src={"/logo/" + prod.image} alt=""></img>

              <div className="form-control-lg">
                <h5>{prod.title}</h5>
                <h7>{prod.category}</h7>
              </div>

              <label className="label">{prod.price.toFixed(2)}</label>
              <label className="label">{prod.quantity}</label>
              <label className="total">
                {(prod.price * prod.quantity).toFixed(2)}
              </label>

              <button className="btn btn-sm btn-outline-danger">Remove</button>
            </div>
          ))}
        </div>
        <div className="side">
          <h3>Total</h3>
          <h1>${getTotalPrice()}</h1>
          <div className="discount-form input-group mb-3">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Discount Code"
            />
            <button
              className="btn btn-outline-warning btn=sm"
              type="button"
              id="button-addon2"
            >
              Apply
            </button>
          </div>
          <div className="d-grid gap-2 col-3 mx-auto">
            <button className="btn btn-secondary mt-2">Submit Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
