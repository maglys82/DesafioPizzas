import React from 'react';
import Home from './Home';
import { PizzaProvider } from './PizzaContext';
import PizzaDetalle from './PizzaDetalle';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';

const App = () => {
  return (
    <PizzaProvider>
      <div>
      <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/pizza/:id"
            element={<PizzaDetalle />}
          />
        </Routes>
      </div>
    </PizzaProvider>
  );
};

export default App;