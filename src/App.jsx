import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Crear from './components/Crear';
import Login from './components/Login';
import Landing from './components/Landing';
import VistaProducto from './components/VistaProducto.jsx';
import VistaCompra from "./components/VistaCompra.jsx";
import Boton from './components/Boton';
import Cuenta from './components/Cuenta';
import VistaFact from './components/VistaFact';
import PerfilUsuario from './PerfilUsuario.jsx';


function App() {

  return (
  <Router>
    <main className="flex-grow">
      
        <Routes>
          <Route path="/Crear" element={<Crear />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/productos/:id" element={<VistaProducto />} />
          <Route path="/Boton" element={<Boton />} />
          <Route path="/Cuenta" element={<Cuenta />} />
          <Route path="/VistaCompra" element={<VistaCompra />} />
          <Route path="/VistaFact" element={<VistaFact />} />
          <Route path="/PerfilUsuario" element={<PerfilUsuario />} />
        </Routes>
      </main>
  </Router>
  );
}


export default App;
