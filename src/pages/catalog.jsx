// CatalogPage.jsx
import "./catalog.css";
import React from "react";
import Product from "../components/product";
import Navbar from "../components/navbar";
import QuantityPicker from "../components/quantityPicker";
import Footer from "../components/footer";
//UseEffect react hook
import { useEffect, useState } from "react";
//import "../services/dataService";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import DataService from "../services/dataService";

function Catalog() {
  const [products, setProducts] = useState([]); //this is global
  const [categories, setCategories] = useState([]); //we are waiting serveral categories
  const [prodsToDisplay, setProdsToDisplay] = useState([]);

  useEffect(function () {
    //the code that i have here will be executed, or updated everytime
    // that something changes
    console.log("components is loaded");
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let prods = service.getProducts();
    let categ = ["Shoes", "Hats", "Clothing"];
    setCategories(categ);
    setProducts(prods);
    setProdsToDisplay(prods);
    console.log(prods);
  }
  function filter(category) {
    console.log(category);
    let list = [];
    //find the products that match the category and add it to the list
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        list.push(prod);
      }
    }
    setProdsToDisplay(list);
    console.log(list);
  }
  function clearFilters() {
    setProdsToDisplay(products);
  }
  return (
    <div className="catalog page">
      <h1>Check out our {products.length} new products</h1>

      {/* do you remember arrow function? =>*/}
      <button onClick={clearFilters} className="btn btn-sm btn-warning">
        All
      </button>
      {categories.map((arrowCategories) => (
        <button
          onClick={() => filter(arrowCategories)}
          className="btn btn-sm btn-warning btn-filter"
        >
          {arrowCategories}
        </button>
      ))}
      <br></br>

      {prodsToDisplay.map((arrowProduct) => (
        <Product key={arrowProduct._id} data={arrowProduct} />
      ))}

      {/*create a footer and import it here*/}
    </div>
  );
}

export default Catalog;
