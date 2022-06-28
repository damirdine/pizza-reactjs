import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import AllPizza from "../pizza-data.js";
import Pizza from "../components/Pizza";

const Home = ({cartItemsCount,setCartItemsCount}) => {
    return (
        <Container>
            <Row gap={3}>
                {
                    AllPizza.map(pizza =>(
                        <Col md={4}>
                            <Pizza lapizza={pizza} cartItemsCount={cartItemsCount} setCartItemsCount={setCartItemsCount}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
export default Home;