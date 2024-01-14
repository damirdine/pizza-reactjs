import React from "react";
import { Navbar,Nav,Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import {MdLocalOffer} from 'react-icons/md';

const TopBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <h6 className="text-warning">
                    <MdLocalOffer className="text-warning mx-4"></MdLocalOffer>
                    Livraison gratuite à domicile pour toute commande superieur à 50€
                </h6>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto d-flex">
                    <LinkContainer to="/" activeClassName>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="about" activeClassName>
                        <Nav.Link>About us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="contact" activeClassName>
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="policy" activeClassName>
                        <Nav.Link>CGV</Nav.Link>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default TopBar;