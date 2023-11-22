import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { usePizzaContext } from './PizzaContext';
import { useNavigate } from "react-router-dom";
import CarritoCompras from './CarritoCompras';


const Home = () => {
    const { pizzas, addToCarrito } = usePizzaContext();
    const navigate = useNavigate();
    const verMas = (pizzaID) =>{
        navigate(`/pizza/${pizzaID}`) 
    }
    return (
        <div className="text-center text-white">
            <div className="row ">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="col-md-2 mb-4">
                        <Card className=''>
                            <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                            <Card.Body>
                                <Card.Title>{pizza.name}</Card.Title>
                            </Card.Body >
                            <ListGroup className="list-group-flush">

                                <ListGroup.Item  style={{ textAlign: 'left' , fontWeight: 'bold'}} >Ingredientes:
                                    <ul className="list-unstyled" style={{ fontWeight: 'normal' }}>
                                        {pizza.ingredients.map((ingredient, index) => (
                                            <li style={{ display: 'flex', justifyContent: 'start'}} key={index}>🍕{ingredient}</li>
                                        ))}
                                    </ul>
                                </ListGroup.Item>
                                <ListGroup.Item style={{fontSize: '20px', fontWeight: 'bold' }}>${pizza.price.toFixed(0)}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <button onClick={() => verMas(pizza.id)} className="btn btn-primary">
                                    Ver mas
                                </button>
                                <button onClick={() => addToCarrito(pizza)} className="btn btn-danger">
                                    Añadir
                                </button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
