//here goes import

import "./navbar.css";
import GlobalContext from "../store/globalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
//here goes the logic

function Navbar() {
  const user = useContext(GlobalContext).user;
  const cart = useContext(GlobalContext).cart;

  function getNumOfProducts() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }
    return total;
  }
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse position-absolute end-0 right-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <li className="cart-b">
            <button className="btn btn-outline-light btn-lg" type="submit">
              <i className="fa-solid fa-user"></i>
              {user.name}
            </button>
            <Link
              type="button"
              className="btn btn-outline-light btn-lg"
              to="/cart"
            >
              {getNumOfProducts()}
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}

//here goes the export
export default Navbar;
