import { useState } from "react";
import { Card, Button, Row, Col, Modal, Image } from "react-bootstrap";
import { CartItemType, PizzaSizeType, PizzaType } from "../types";

type PizzaItem = Omit<CartItemType, "price">;
type PizzaProps = {
  lapizza: PizzaType;
  addToCart: (item: PizzaItem) => void;
};
const Pizza = ({ lapizza, addToCart }: PizzaProps) => {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState<PizzaSizeType>("small");
  const [quantity, setQuantity] = useState(1);
  const getSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const size = e.target.value as PizzaSizeType ;
    setSize(size);
  };
  const getQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = e.target.value;
    setQuantity(parseInt(quantity));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getcartItem = (): PizzaItem => {
    const cartItem = {
      name: lapizza.name,
      size: size,
      quantity: quantity,
    };
    return cartItem as PizzaItem;
  };
  const priceBySizeAndQuantity = lapizza.prices[0][size] * quantity;
  return (
    <>
      <Card className="mb-4">
        <Card.Img onClick={handleShow} variant="top" src={lapizza.image} />
        <Card.Body>
          <Card.Title onClick={handleShow}>{lapizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>
                  Size : <br />
                  <select name="size" value={size} onChange={getSize}>
                    {lapizza.varients.map((size) => (
                      <option value={size}>{size}</option>
                    ))}
                  </select>
                </h6>
              </Col>
              <Col md={6}>
                <h6>
                  Quantity : <br />
                  <select
                    name="quantity"
                    value={quantity}
                    onChange={getQuantity}
                  >
                    {[...Array(10).keys()].map((_v, i) => (
                      <option value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </h6>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>
              <p>Price : {priceBySizeAndQuantity} €</p>
            </Col>
            <Col md={6}>
              <Button
                variant="warning"
                onClick={() => {
                  addToCart(getcartItem());
                }}
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{lapizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={lapizza.image}
            style={{
              width: "100%",
            }}
          />
          <h5>Description</h5>
          <p>{lapizza.description}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Pizza;
