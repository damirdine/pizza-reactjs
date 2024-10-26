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
      <Row gap={3} key="home-row">
        {pizzaData?.map((pizza) => (
          <Col md={4}>
            <Pizza
              lapizza={{ ...pizza, image: `.${pizza.image}` }}
              addToCart={addToCart}
              key={pizza.name}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Home;
