import Badge from "react-bootstrap/Badge";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { CartItemType } from "../types";
type NavBarProps = {
  cartItems: CartItemType[];
  UserLogged: { user: { fullname: string }; loggedIn: boolean } | null;
};
const NavBar = ({ cartItems, UserLogged }: NavBarProps) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand target="/">
          <Image
            src="images/White_pizza-logo_250x250.jpg"
            style={{
              width: "125px",
            }}
          />
        </Navbar.Brand>
        <Nav>
          {UserLogged?.loggedIn ? (
            <p>{UserLogged.user.fullname}</p>
          ) : (
            <>
              <LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            </>
          )}

          <LinkContainer to="/Cart">
            <Nav.Link>
              Cart{" "}
              <Badge bg="warning" text="dark">
                {cartItems.length}
              </Badge>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
