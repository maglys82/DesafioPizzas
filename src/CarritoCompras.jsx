

import React, { useEffect } from 'react';
import { usePizzaContext } from './PizzaContext';
import { Container } from 'react-bootstrap';

const CarritoCompras = () => {
    const { carrito, removeFromCart } = usePizzaContext();

    const handleRemove = (pizzaIndex) => {
        removeFromCart(pizzaIndex);
    };
    return (
        <Container>

            <h2>Detalles del Pedido</h2>
            <table className="table">
                <thead>
                    <tr style={{ fontWeight: 'bold' }}>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((pizza,index) => (
                        <tr key={index}>
                            <td>
                                <img src={pizza.img} alt={pizza.name} style={{ width: '100px', height: '50px' }} />
                            </td>
                            <td>{pizza.name}</td>
                            <td>${pizza.price.toFixed(0)}</td>

                            <td>
                                <button onClick={() => handleRemove(index)} className="btn btn-danger">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default CarritoCompras;

