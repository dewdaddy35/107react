import { useState } from "react";
import "./admin.css";

function Admin() {
  const initialProductState = {
    title: "",
    category: "",
    image: "",
    price: "",
  };
  const initialCouponState = {
    code: "",
    discount: "",
  };

  const [product, setProduct] = useState(initialProductState);
  const [coupon, setCoupon] = useState(initialCouponState);

  function handleProductForm(e) {
    let text = e.target.value;
    let name = e.target.name;

    //create a copy
    let copy = { ...product }; // ... is the spread operetor
    // modify the copy
    copy[name] = text;
    // set the copy
    setProduct(copy);
  }

  function handleCouponForm(e) {
    let text = e.target.value;
    let name = e.target.name;

    let copy = { ...coupon }; // ... is the spread operetor
    // modify the copy
    copy[name] = text;
    // set the copy
    setCoupon(copy);
  }
  function saveProduct() {
    console.log("Saving product", product);
    setProduct(initialProductState);
  }
  function saveCoupon() {
    console.log("Saving coupon", coupon);
    setCoupon(initialCouponState);
  }

  return (
    <div className="admin">
      <h3>Store Administration</h3>
      <div className="parent">
        <section className="products">
          <div className="form">
            <h3>Register Products</h3>
          </div>
          <div>
            <div>
              <label className="form-label">Title</label>
              <input
                onChange={handleProductForm}
                value={product.title}
                name="title"
                type="text"
                className="form-control"
              />
            </div>

            <div>
              <label className="form-label">Category</label>
              <input
                onChange={handleProductForm}
                value={product.category}
                name="category"
                type="text"
                className="form-control"
              />
            </div>
            <div className="field">
              <label className="form-label">Image</label>
              <input
                onChange={handleProductForm}
                value={product.image}
                name="image"
                type="text"
                className="form-control"
              />
            </div>

            <div>
              <label className="form-label">Price</label>
              <input
                onChange={handleProductForm}
                value={product.price}
                name="price"
                type="text"
                className="form-control"
              />
            </div>

            <div className=".admin .btn">
              <button
                onClick={saveProduct}
                type="button"
                className="btn btn-primary"
              >
                Save Product
              </button>
            </div>
          </div>
        </section>
        <section className="coupons">
          Coupons
          <div>
            <label className="field">Code</label>
            <input
              onChange={handleCouponForm}
              value={coupon.code}
              name="code"
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label className="field">Discount</label>
            <input
              onChange={handleCouponForm}
              value={coupon.discount}
              name="discount"
              type="email"
              className="form-control"
            />
          </div>
          <div>
            <button
              onClick={saveCoupon}
              type="button"
              className="btn btn-primary"
            >
              Save Coupon
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Admin;
