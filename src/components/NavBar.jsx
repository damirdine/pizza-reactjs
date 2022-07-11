import React,{useEffect, useState} from "react";
import Badge from 'react-bootstrap/Badge';
import {Navbar, Nav, Container, Image,Dropdown} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const NavBar = ({cartItems,}) => {
    const [user,setUser] = useState()
    useEffect(async()=>{
        try {
            let res = await fetch("http://localhost:8080/users/login", {
              method: "GET",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            });
            if (res.status === 200) {
              let data = await res.json()
              if(data.loggedIn){
                setUser(data.user)
              };
            } else {
              console.log("Some error occured", res);
            }
        } catch (err) {
        console.log(err);
        }
    })
    return(
        <Navbar>
            <Container>
                <Navbar.Brand to="/">
                    <Image src="images/White_pizza-logo_250x250.jpg" style={{
                        width:'125px',
                    }}/>
                </Navbar.Brand>
                <Nav> 
                        <>
                            <LinkContainer to="/Login" activeClassName>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Register" activeClassName>
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer>
                        </>
                   {/* {user.loggedIn && <p>user.user.fullname</p>} */}

                    <LinkContainer to="/Cart" activeClassName>
                        <Nav.Link>Cart <Badge bg="warning" text="dark">{cartItems.length}</Badge></Nav.Link>
                    </LinkContainer>
                    
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar