// CatalogPage.jsx
import './catalog.css';
import React from 'react';
import Product from '../components/product';
import Navbar from '../components/navbar';
import QuantityPicker from '../components/quantityPicker';
//UseEffect react hook
import { useEffect , useState } from 'react';
//import "../services/dataService";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import DataService from '../services/dataService';

 function Catalog(){
  const[products, setProducts]=useState([]);
  useEffect(function(){
    //the code that i have here will be executed, or updated everytime
    // that something changes
    console.log("components is loaded")
    loadCatalog();
  },[]);

  function loadCatalog(){
    let service = new DataService();
    let prods = service.getProducts();
    setProducts(prods);
    console.log(prods);
    


  }
  return (
    <div className='catalog-container'>
      <h1>Check out our {products.length} new products</h1>
      
      
      {/* do you remember arrow function? =>*/}
      {products.map( aProduct => <Product data={aProduct}/>)}


      
      {/*create a footer and import it here*/}
         </div>
  );
};

export default Catalog;
