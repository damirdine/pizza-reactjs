import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap';
import { Link,Navigate } from "react-router-dom"
import AdressFrom from '../components/AdressFrom';

function Register() {
    async function addUser(e){
        let fullname = document.querySelector("#formBasicFullName").value
        let email = document.querySelector("#formBasicEmail").value
        let password = document.querySelector("#formBasicPassword").value
        let confirmPassword = document.querySelector("#formBasicConfirmPassword").value
        let phoneNumber = document.querySelector("#formGroupPhoneNumber").value
        let adress = document.querySelector("#formGroupAdress").value
        let complement = document.querySelector("#formGroupComplement").value
        let postCode = document.querySelector("#formGroupPostCode").value
        let city = document.querySelector("#formGroupCity").value
        e.preventDefault()
        try {
            let res = await fetch("http://localhost:8080/users/adduser", {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "fullname" :fullname,
                "email" : email,
                "password":password,
                "confirmPassword":confirmPassword,
                "phoneNumber":phoneNumber,
                "adress":adress,
                "complement":complement,
                "postCode":postCode,
                "city":city
              })
            });
            if (res.status === 200) {
              let data = await res.json()
              console.log("Some error occured", data);
            } else {
              console.log("Some error occured", res);
            }
          } catch (err) {
            console.log(err);
          }
        // console.log({fullname,email,password,phone_number : phoneNumber,adress : {
        //         adress,
        //         complement,
        //         postcode:postCode,
        //         city,
        //     }
        // })
    }
    return (
        <Container className='mt-4'>
            <h3>Register</h3>
            <Form onSubmit={addUser} className='mt-4' id='registerForm'>
                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" placeholder="Jhon Doe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="mb-2" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label >Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" />
                </Form.Group>
                <details className='mb-3'>
                    <summary className='mb-3'>Add my adress (for your next order)</summary>
                    <AdressFrom/>
                </details>
                <Button variant="warning" type='submit'>Register</Button> 
                <br/><span className='d-block mt-4'>Or</span>
                <Link to="/Login">Login</Link>
            </Form>
        </Container>
  );
}

export default Register;