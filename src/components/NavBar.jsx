import React,{useEffect, useState} from "react";
import {Navbar, Nav, Container, Image} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {

    return(
        <Navbar>
            <Container>
                <Navbar.Brand to="/">
                    <Image src="images/White_pizza-logo_250x250.jpg" style={{
                        width:'125px',
                    }}/>
                </Navbar.Brand>
                <Nav>
                    <LinkContainer to="/Login" activeClassName>
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Cart" activeClassName>
                        <Nav.Link>Panier ({nbrOfCartItem})</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar