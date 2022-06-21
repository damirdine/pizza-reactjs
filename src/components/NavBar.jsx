import React from "react";
import {Navbar, Nav, Container, Image} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
    return(
        <NavBar>
            <Container>
                <Navbar.Brand to="/">
                    <Image src="images/logo.jpg"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <LinkContainer to="/login" activeClassName>
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/panier" activeClassName>
                        <Nav.Link>Panier</Nav.Link>
                    </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </NavBar>
    )
}

export default NavBar