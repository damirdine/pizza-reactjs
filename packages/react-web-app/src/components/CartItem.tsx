import { Row, Col } from "react-bootstrap";
import { CartItemType } from "../types";

type CartItemProps = {
  item: CartItemType;
  deleteFromCart: (name: string) => void;
  updateQuantity: (name: string, num: number) => void;
};
const CartItem = ({ item, deleteFromCart, updateQuantity }: CartItemProps) => {
  return (
    <>
      <Row>
        <Col md={4}>
          <h3>{item.name}</h3>
          <h3>{item.size}</h3>
          <h3>
            {item.quantity} x {item.price} €
          </h3>
        </Col>
        <div>
          <button
            onClick={() => {
              updateQuantity(item.name, 1);
            }}
          >
            +
          </button>
          <input
            id={item.name + "-" + item.size}
            type="hidden"
            value={item.quantity}
            min="1"
          />
          <button
            onClick={() => {
              updateQuantity(item.name, -1);
            }}
          >
            -
          </button>
        </div>
        <button
          onClick={() => {
            deleteFromCart(item.name);
          }}
        >
          x
        </button>
      </Row>
    </>
  );
};

export default CartItem;
