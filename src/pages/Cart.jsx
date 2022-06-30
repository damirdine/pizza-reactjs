import React,{useState,useEffect} from "react";
import { Container, Row } from "react-bootstrap";
import CartItem from "../components/CartItem";
let Cart = ({pizzaData,cartItems,deleteFromCart,setCartItems,increaseQuantity,decreaseQuantity}) =>{
    const [totalCart,setTotalCart] = useState(0);
    const getPrice = (CartItem) => {
        CartItem.price = pizzaData.find((pizza)=> pizza.name === CartItem.name).prices[0][CartItem.size]
    }
    cartItems.map((CartItem)=> {getPrice(CartItem)})
    console.log(cartItems)
    return(
        <Container>
            <h2>Panier</h2>
            {cartItems.length === 0 && (
                <h3 gap={3} className="text-center">
                    Panier vide
                </h3>
            )}
            <Row gap={5}>
                {cartItems.map((item) => (
                    <CartItem item={item} price={null}deleteFromCart={deleteFromCart}/>
                ))}
            </Row>
            <h3>Total : {cartItems.length} €</h3>
        </Container>
    )
}
export default Cart