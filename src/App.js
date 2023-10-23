import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footers';

function App() {
  return (
    <div className="App">
       <h1></h1>
       <Navbar titulo="Productos" titulo2="categorias" titulo3="Carrito de Compras"/>
       <Footer></Footer>
    </div>
  );
}

export default App;
