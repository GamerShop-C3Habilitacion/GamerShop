import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import React, { useState } from "react";

import Home from "./home/pages/Home";
import Carrito from "./carrito/Pages/Carrito";
import Header from './shared/Header';
import CrearProducto from './gestion_productos/pages/CrearProducto';
import Venta from './componetes/Venta';

function App() {

  const [logged, setLogged] = useState(false);
  const [carrito, setCarrito] = useState([]);

  return (
    <Router>
      <Header 
      isLoggedIn={logged} 
      login={setLogged}
      cantCarrito={carrito.reduce(
        (total, producto) => total+producto.cantidad,0)} />
      <Switch>
        <Route path="/" exact>
          <Home 
          isLoggedIn={logged}
          carrito = {carrito}
          setCarrito = {setCarrito}
          />
        </Route>
        <Route path="/Carrito" exact>
          <Carrito carrito = {carrito} setCarrito={setCarrito}/>
        </Route>
        <Route path="/CrearProducto">
          <CrearProducto/>
        </Route>
        <Route path="/Venta">
          <Venta/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;