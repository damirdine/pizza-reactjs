import React,{useEffect} from "react";
import { Container,Row,Col } from "react-bootstrap";
import AllPizza from "../pizza-data.js";
import Pizza from "../components/Pizza";

const Home = ({cartItems,addToCart}) => {
    return (
        <Container>
            <Row gap={3}>
                {
                    AllPizza.map(pizza =>(
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