import { useState, useEffect } from "react";
import { Container, Row, Button, Modal } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import GuestForm from "../components/GuestForm";
import LoginForm from "../components/LoginForm";
import { CartItemType, PizzaType } from "../types";

type CartProps = {
  pizzaData: PizzaType[];
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};

const Cart = ({ pizzaData, cartItems, setCartItems }: CartProps) => {
  const deleteFromCart = (name: string) => {
    setCartItems((products) => products.filter((el) => el.name !== name));
  };
  const updateQuantity = (name: string, num: number) => {
    setCartItems((products) => {
      const item = products.find((el) => el.name === name);
      if (item) {
        item.quantity = item.quantity >= 1 && num > 0 ? item.quantity + num : 1;
      }
      return [...products];
    });
  };

  const [totalCart, setTotalCart] = useState(0);
  const [show, setShow] = useState(false);

  const getPrice = (CartItem: CartItemType) => {
    const prices = pizzaData.find(
      (pizza) => pizza.name === CartItem.name
    )?.prices[0];
    if (prices && CartItem.size in prices) {
      CartItem.price = prices[CartItem.size];
    }
  };
  cartItems.map(getPrice);

  useEffect(() => {
    return setTotalCart(
      cartItems.reduce(
        (totalCart: number, item:CartItemType) => totalCart + item?.price * item.quantity,
        0
      )
    );
  }, [cartItems]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const makeOrder = () => {
    console.log("order make");
    setShow(false);
    <Navigate to="/Order" />;
  };
  return (
    <Container className="mt-4">
      <h1 className="mb-4">Cart</h1>
      {cartItems.length === 0 && (
        <h3 gap={3} className="text-center">
          Panier vide
        </h3>
      )}
      <Row className="mb-3">
        {cartItems.map((item: any) => (
          <CartItem
            className="mb-3"
            item={item}
            deleteFromCart={deleteFromCart}
            updateQuantity={updateQuantity}
          />
        ))}
      </Row>

      {cartItems.length > 0 && (
        <>
          <h3>Total : {totalCart} €</h3>
          <Row>
            <Button variant="warning" onClick={handleShow}>
              Placing my order
            </Button>
          </Row>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Order info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>Login</h3>
              <LoginForm setUserLogged={undefined} />
              <span className="d-block my-2">Or</span>
              <GuestForm />
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
  );
};
export default Cart;
