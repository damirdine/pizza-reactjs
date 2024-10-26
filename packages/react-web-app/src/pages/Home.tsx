import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";
import { CartItemType, PizzaType } from "../types";

type HomeProps = {
  addToCart: (product: CartItemType) => void;
  pizzaData: PizzaType[];
};

const Home = ({ addToCart, pizzaData }: HomeProps) => {
  return (
    <Container>
      <Row gap={3}>
        {pizzaData?.map((pizza) => (
          <Col md={4}>
            <Pizza lapizza={pizza} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Home;
