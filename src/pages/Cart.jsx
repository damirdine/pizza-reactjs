import React from "react";
import { Container, Row } from "react-bootstrap";
import CartItem from "../components/CartItem"

const MyPizzaList = () => {
    fetch("http://localhost:8080/pizzas")
    .then((res)=>(res.json()))
    .then((json)=>json)
    .catch((err)=>(console.log(err)))
}


let Cart = () =>{
    return(
        <Container>
            <Row gap={3}>
               <h1>hello</h1>
            </Row>
        </Container>
    )
}
export default Cart