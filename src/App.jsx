import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Productos from './screen/Productos';
import Inicio from './screen/Inicio';
import Nosotros from './screen/Nosotros';
import ErrorPagina from './screen/ErrorPagina';
import Footer from './components/Footer';
import ProductDetails from './screen/ProductDetails';
import Carrito from './screen/Carrito';


function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos/:id" element={<ProductDetails />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<ErrorPagina />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
