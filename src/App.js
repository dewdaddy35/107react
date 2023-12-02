
import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';
import Catalog from './pages/catalog';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import About from './pages/about';
import Home from './pages/home';
import Admin from './pages/admin';
import Contact from './pages/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <Navbar/>

        <Routes>
        <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/catalog" element={ <Catalog /> } />
          <Route path="/about" element={ <About />} />
          <Route path="/admin" element={ <Admin /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>

          {/*create a footer and import it here*/}
        <Footer/>
           
      </div>
    </BrowserRouter>
  );
}


export default App;
