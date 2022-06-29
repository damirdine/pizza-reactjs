import React,{ useState,useEffect} from "react";
import { Card,Button, Row,Col ,Modal,Image} from "react-bootstrap";

const Pizza = ({lapizza,addToCart}) => {
    const [show, setShow] = useState(false);
    const [size, setSize] = useState("small");
    const [quantity, setQuantity] = useState(1);
    const getSize= (e)=> {const size = e.target.value;setSize(size);}
    const getQuantity= (e)=> {const quantity = e.target.value;setQuantity(quantity);}

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getcartItem = () => {
        let cartItem={name : lapizza.name,size: size,quantity : parseInt(quantity)}
        return cartItem
    }
    return (
        <>
        <Card className="mb-4" >
            <Card.Img onClick={handleShow} variant="top" src={lapizza.image} />
            <Card.Body>
                <Card.Title onClick={handleShow}>{lapizza.name}</Card.Title>
                <hr />
                <Card.Text>
                <Row>
                    <Col md={6}>
                        <h6>Taille : <br/>
                            <select name="size" value={size}
                                onChange={getSize}>
                                {
                                    lapizza.varients.map(size =>(<option value={size}>{size}</option>))
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
                            <p>Prix : {lapizza.prices[0][size] * quantity} €</p>
                        </Col>
                        <Col md={6}>
                            <Button variant="warning" onClick={()=> {addToCart(getcartItem())}}>Add to Cart</Button>
                        </Col>
                    </Row>
            </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{lapizza.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={lapizza.image} style={{
                    width:"100%",
                }}/>
                <h5>Description</h5>
                <p>{lapizza.description}</p>
            </Modal.Body>
        </Modal>
        </>
    )
}
export default Pizza
