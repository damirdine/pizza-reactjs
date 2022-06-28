import React from "react";
import { Container, Row } from "react-bootstrap";
import CartItem from "../components/CartItem"

const MyPizzaList = () => {
    fetch("http://localhost:8080/pizzas")
    .then((res)=>(res.json()))
    .then((json)=>json)
    .catch((err)=>(console.log(err)))
}


let Cart = ({cartItems}) =>{
    console.log(cartItems)
    return(
        <Container>
            <h2>Panier</h2>
            {cartItems.length === 0 && (
                <h3 gap={3} className="text-center">
                    Panier vide
                </h3>
            )}
            {cartItems.map((item) => (
                <Row>
                    <h3>{item.name}</h3>
                    <h3>{item.size}</h3>
                    <h3>{item.quantity}</h3>
                </Row>    
            ))}
            
        </Container>
    )
}
export default Cart