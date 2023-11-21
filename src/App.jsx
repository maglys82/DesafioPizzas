import React from 'react';
import CatalogoPizzas from './CatalagoPizzas';
import { PizzaProvider } from './PizzaContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <PizzaProvider>
      <div>
        <CatalogoPizzas />
      </div>
    </PizzaProvider>
  );
};

export default App;