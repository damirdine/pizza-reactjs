import React,{useEffect, useState} from "react";
import { Card,Button, Row,Col ,Modal,Image} from "react-bootstrap";

const Pizza = (props) => {
    const [show, setShow] = useState(false);
    const [size, setSize] = useState("small");
    const [quantity, setQuantity] = useState(1);

    const [nbrOfCartItem, setCartItem] = useState(0);
    const [CartList, setCartList] = useState([]);

    const getSize= (e)=> {const size = e.target.value;setSize(size);}
    const getQuantity= (e)=> {const quantity = e.target.value;setQuantity(quantity);}

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let AddToCart = () => {
   
        setCartItem(nbrOfCartItem+1)
        console.log(nbrOfCartItem)
        //sessionStorage.setItem('Cart', JSON.stringify(Cart));
    }
    useEffect(()=>{
        document.title = nbrOfCartItem
    },[])
    return (
        <>
        <Card className="mb-4" >
            <Card.Img onClick={handleShow} variant="top" src={props.lapizza.image} />
            <Card.Body>
                <Card.Title onClick={handleShow}>{props.lapizza.name}</Card.Title>
                <hr />
                <Card.Text>
                <Row>
                    <Col md={6}>
                        <h6>Taille : <br/>
                            <select name="size" value={size}
                                onChange={getSize}>
                                {
                                    props.lapizza.varients.map(size =>(<option value={size}>{size}</option>))
                                }
                            </select>
                        </h6>
                    </Col>
                    <Col md={6}>
                        <h6>Quantié : <br/>
                            <select name="quantity" value={quantity} onChange={getQuantity}>
                                {
                                    [...Array(10).keys()].map((v,i)=> (<option value={i+1}>{i+1}</option>))
                                }
                            </select>
                        </h6>
                    </Col>
                    </Row>
                </Card.Text>
                    <Row>
                        <Col md={6}>
                            <p>Prix : {props.lapizza.prices[0][size] * quantity} €</p>
                        </Col>
                        <Col md={6}>
                            <Button variant="warning" onClick={AddToCart}>Add to Cart</Button>
                        </Col>
                    </Row>
            </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.lapizza.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={props.lapizza.image} style={{
                    width:"100%",
                }}/>
                <h5>Description</h5>
                <p>{props.lapizza.description}</p>
            </Modal.Body>
        </Modal>
        </>
    )
}
export default Pizza
