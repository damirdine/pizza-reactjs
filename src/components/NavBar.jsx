import React,{useEffect, useState} from "react";
import Badge from 'react-bootstrap/Badge';
import {Navbar, Nav, Container, Image,Dropdown} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const NavBar = ({cartItems,UserLogged}) => {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand to="/">
                    <Image src="images/White_pizza-logo_250x250.jpg" style={{
                        width:'125px',
                    }}/>
                </Navbar.Brand>
                <Nav>
                   {UserLogged?.loggedIn
                    ?   (
                            <p>{UserLogged.user.fullname}</p>
                        ) 
                    :   (
                        <>
                            <LinkContainer to="/Login" activeClassName>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Register" activeClassName>
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer>
                        </>)
                    }

                    <LinkContainer to="/Cart" activeClassName>
                        <Nav.Link>Cart <Badge bg="warning" text="dark">{cartItems.length}</Badge></Nav.Link>
                    </LinkContainer>
                    
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar