import React,{useState,useEffect} from "react";
import { Container, Row,Button,Modal } from "react-bootstrap";
import CartItem from "../components/CartItem";
import GuestForm from "../components/GuestForm";
import LoginForm from "../components/LoginForm";
let Cart = ({pizzaData,cartItems,deleteFromCart}) =>{
    const [effecter,setEffecter] = useState(0);
    const [totalCart,setTotalCart] = useState(0);
    const [show, setShow] = useState(false);

    const getPrice = (CartItem) => {
        CartItem.price = pizzaData.find((pizza)=> pizza.name === CartItem.name).prices[0][CartItem.size]
    }
    cartItems.map((CartItem)=> {getPrice(CartItem)})

    useEffect(()=>{
        setTotalCart(0)
        setTotalCart(cartItems.reduce((totalCart,item)=> totalCart+(item.price*item.quantity),0))
        setEffecter(0)
    },[effecter==1,cartItems])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const makeOrder = () => {
        console.log("order make")
        setShow(false);
    }
    return(
        <Container className="mt-4">
            <h1 className="mb-4">Cart</h1>
            {cartItems.length === 0 && (
                <h3 gap={3} className="text-center">
                    Panier vide
                </h3>
            )}
            <Row className="mb-3">
                {cartItems.map((item) => (
                    <CartItem className="mb-3" item={item} deleteFromCart={deleteFromCart} setEffecter={setEffecter}/>
                ))}
            </Row>
            
            {cartItems.length >0 && (
                <>
                    <h3>Total : {totalCart} €</h3>
                    <Row>
                        <Button variant="warning" onClick={handleShow}>Placing my order</Button>
                    </Row>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Order info</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h3>Login</h3>
                            <LoginForm/>
                            <span className="d-block my-2">Or</span>
                            <GuestForm/>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="warning" onClick={makeOrder}>
                            Order
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </Container>
    )
}
export default Cart