import React,{useState,useEffect} from "react";
import { Container, Row,Button,Modal } from "react-bootstrap";
import CartItem from "../components/CartItem";
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
                    <CartItem item={item} deleteFromCart={deleteFromCart} setEffecter={setEffecter}/>
                ))}
            </Row>
            
            {cartItems.length >0 && (
                <>
                    <h3>Total : {totalCart} €</h3>
                    <Row>
                        <Button variant="primary" onClick={handleShow}>Commander</Button>
                    </Row>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </Container>
    )
}
export default Cart