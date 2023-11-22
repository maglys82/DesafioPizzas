
import { useParams } from "react-router-dom";
import { usePizzaContext } from "./PizzaContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";


function PizzaDetalle() {
    const { id } = useParams();
    const { pizzas, addToCarrito } = usePizzaContext();
    const result = pizzas.filter((pizza) => id == pizza.id);
    const pizza = result[0];
    return (
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img src={pizza.img} />
                    <Card.Body >
                        <Card.Title >{pizza.name}</Card.Title>
                        <Card.Text>
                            {pizza.desc}
                        </Card.Text>
                        <p>Ingredientes:</p>
                        <ul className="list-unstyled" style={{ fontWeight: 'normal' }}>
                            {pizza.ingredients.map((ingredient, index) => (
                                <li style={{ display: 'flex', justifyContent: 'start' }} key={index}>🍕{ingredient}</li>
                            ))}
                        </ul>
                        <Button onClick={()=>{addToCarrito(pizza)}} variant="primary">Añadir</Button>
                    </Card.Body>
                </Card>
        </Container>





    )
}
export default PizzaDetalle;