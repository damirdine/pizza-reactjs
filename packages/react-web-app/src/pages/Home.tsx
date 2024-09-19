import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Pizza from "../components/Pizza";

const Home = ({cartItems,addToCart,pizzaData}) => {
    return (
        <Container>
            <Row gap={3}>
                {
                    pizzaData?.map(pizza =>(
                        <Col md={4}>
                            <Pizza lapizza={pizza} cartItems={cartItems} addToCart={addToCart}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
export default Home;