import React,{useState} from "react";
import { Card,Button, Row,Col ,Modal,Image} from "react-bootstrap";

const Pizza = (props) => {
    const [show, setShow] = useState(false);
    const [taille, setTaille] = useState('small');
    const [quantite, setQuantite] = useState(1);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



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
                        <h6>Taille :
                            <select name="tailles" value={[taille]}>
                                {
                                    props.lapizza.varients.map(taille =>(<option onclick={setTaille} value={taille=[taille]}>{taille}</option>))
                                }
                            </select>
                        </h6>
                    </Col>
                    <Col md={6}>
                        <h6>Quantié : <br/>
                            <select name="quantite">
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
                            <p>Prix : {props.lapizza.prices[0].small} €</p>
                        </Col>
                        <Col md={6}>
                            <Button variant="warning">Add to Cart</Button>
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
