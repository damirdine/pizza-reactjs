import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import AllPizza from "../pizza-data.js";
import Pizza from "../components/Pizza";
const pizzaBackend = "http://localhost:8080/pizzas"
const Home = () => {
    return (
        <Container>
            <Row gap={3}>
                {
                    AllPizza.map(pizza =>(
                        <Col md={4}>
                            <Pizza lapizza={pizza}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
export default Home;