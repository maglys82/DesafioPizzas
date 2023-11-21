import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Container from 'react-bootstrap/Container';


function Home() {
    const containerStyle = {
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2lusOv7WiqA6gWpAaNeaLL643msahqWg0A&usqp=CAU")',
        backgroundSize: 'cover',
        width: '100%',
        height: '200px',
        marginBottom: '20px',

    };
    const titleStyle = {
        fontSize: '40px',
        color: 'white',
        margin: '20px', 
        padding: '10px',
      };
    
    

    return (
        <>
            <div>
                <Navbar bg="primary" data-bs-theme="dark">
                    <Container>
                        <Nav>
                            <Nav.Link  className="text-white" >🍕Pizza Mamma Mia!!</Nav.Link>
                            <Nav.Link  className="text-white">$</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div style={containerStyle}>
                <h1 style={titleStyle }>¡Pizzeria Mamma Mia!</h1>
                <h5>¡Tenemos las Mejores Pizzas que podras Encontrar!</h5>
            </div>

            <div>

            </div>
        </>
    );
}

export default Home;
