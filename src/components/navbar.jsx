//here goes import

import "./navbar.css";
import GlobalContext from "../store/globalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
//here goes the logic

function Navbar() {
  const user = useContext(GlobalContext).user;
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            <button className="btn btn-dark" type="submit">
              {user.name}
            </button>
            <Link className="nav-link active" to="/cart">
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
