import React from "react";
import {Navbar, Nav, Container, Image} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand to="/">
                    <Image src="images/Black_pizza-logo250x250.jpg" style={{
                        width:'50%',
                    }}/>
                </Navbar.Brand>
                <Nav>
                    <LinkContainer to="/login" activeClassName>
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/panier" activeClassName>
                        <Nav.Link>Panier</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar