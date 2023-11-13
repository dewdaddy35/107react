
import './App.css';

import Navbar from './components/navbar';
import Product from './components/product';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';
import Catalog from './pages/catalog';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";



function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Catalog/>
    {/*create a footer and import it here*/}
      
      <Footer/>
      
      
    </div>
  );
}


export default App;
