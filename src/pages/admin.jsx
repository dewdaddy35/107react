import { useState } from "react";
import "./admin.css";
function Admin() {
  const initialProductState = {
    title: "",
    category: "",
    image: "",
    price: "",
  };
  const [allProducts, setAllProducts] = useState([]);
  const [allCoupons, setAllCoupons] = useState([]);
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
    console.log(product);
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }
  function saveCoupon() {
    console.log(coupon);
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  return (
    <div className="admin">
      <h3>Store Administration</h3>
      <div className="parent">
        <section className="products">
          <div className="form-control">
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
                <i className="fa-regular fa-floppy-disk mx-1"></i>
                Save Product
              </button>
            </div>
            {allProducts.map((prod) => (
              <div key={prod.title} className="parent-p">
                <img
                  className="prod img"
                  src={"/logo/" + prod.image}
                  alt=""
                ></img>
                <label className="lbl-title">{prod.title}</label>
                <label className="lbl-title">${prod.price}</label>
              </div>
            ))}
          </div>
        </section>
        <section className="coupons">
          <h3> Coupons</h3>

          <div className="field">
            <label className="form-label">Code</label>
            <input
              onChange={handleCouponForm}
              value={coupon.code}
              name="code"
              type="text"
              className="form-control"
            />
          </div>
          <div className="field">
            <label className="form-label">Discount</label>
            <input
              onChange={handleCouponForm}
              value={coupon.discount}
              name="discount"
              type="email"
              className="form-control"
            />
          </div>
          <div className="field">
            <button
              onClick={saveCoupon}
              type="button"
              className="btn btn-primary"
            >
              <i className="fa-regular fa-floppy-disk mx-1"></i>
              Save Coupon
            </button>
          </div>
          {/*display code*/}
          {allCoupons.map((cp) => (
            <div key={cp.code} className="item">
              <label>{cp.code}</label>
              <label>{cp.discount}</label>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Admin;
