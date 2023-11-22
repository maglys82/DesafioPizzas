

import React from 'react';
import { usePizzaContext } from './PizzaContext';

const CarritoCompras = () => {
    const { carrito, removeFromCart } = usePizzaContext();

    const handleRemove = (pizzaId) => {
        removeFromCart(pizzaId);
    };

    return (
        
        <table className="table">
            <thead>
                <tr>Detalles del Pedido
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                    
                </tr>
            </thead>
            <tbody>
                {carrito.map((pizza) => (
                    <tr key={pizza.id}>
                        <td>
                            <img src={pizza.img} alt={pizza.name} style={{ width: '100px', height: '50px' }} />
                        </td>
                        <td>{pizza.name}</td>
                        <td>${pizza.price.toFixed(0)}</td>
                        
                        <td>
                            <button onClick={() => handleRemove(pizza.id)} className="btn btn-danger">
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CarritoCompras;

