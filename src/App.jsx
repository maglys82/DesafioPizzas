import React from 'react';
import Home from './Home';
import { PizzaProvider } from './PizzaContext';
import PizzaDetalle from './PizzaDetalle';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Navbar';
import CarritoCompras from './CarritoCompras';

const App = () => {
  return (
    <PizzaProvider>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/Home"
            element={<Home />}
          />
          <Route
            path="/pizza/:id"
            element={<PizzaDetalle />}
          />

          <Route
            path="/carrito/"
            element={<CarritoCompras />}
          />
          <Route exact path="/*" element={<Navigate to="/Home" />} />
        </Routes>
      </div>
    </PizzaProvider>
  );
};

export default App;