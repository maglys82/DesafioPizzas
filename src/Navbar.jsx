import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Navegador = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    const containerStyle = {
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2lusOv7WiqA6gWpAaNeaLL643msahqWg0A&usqp=CAU")',
        backgroundSize: 'cover',
        width: '100%',
        height: '200px',
        marginBottom: '20px',
        textAlign: "center"
    };
    const titleStyle = {
        fontSize: '40px',
        color: 'white',
        padding: '10px',
    };

    

    return (
        <>
            <div>
                <Navbar bg="primary" data-bs-theme="dark">
                    <Container>
                        <Nav>
                            <NavLink className={setActiveClass}
                                to="/"
                            >
                                🍕Pizzeria Mamma Mia!!

                            </NavLink >

                            <NavLink className={setActiveClass}
                                to="/pizza"
                            >
                            </NavLink>
                            
                            <NavLink className={setActiveClass}
                                    to="/carrito">

                                <FontAwesomeIcon icon={faShoppingCart} />

                            </NavLink>
                            
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div style={containerStyle}>
                <h1 style={titleStyle}>¡Pizzeria Mamma Mia!</h1>
                <h5 style={titleStyle}>¡Tenemos las Mejores Pizzas que podras Encontrar!</h5>
            </div>
        </>
    );
}

export default Navegador;
