import React from "react";
import { Navbar,Nav,Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";

const topBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <h6 className="text-light">Dymmy Data</h6>
                <Nav className="ms-auto d-flex">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="about">
                        <Nav.Link>About us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="Policy">
                        <Nav.Link>Terms and Policy</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
};

export default topBar;