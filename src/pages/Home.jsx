import React from "react";
import AllPizza from "../pizza-data.js";
import { Container,Row,Col } from "react-bootstrap";
import Pizza from "../components/Pizza";

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