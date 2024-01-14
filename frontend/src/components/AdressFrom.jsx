import React from "react";
import Form from 'react-bootstrap/Form';

function AdressFrom (){
    return (
        <>
                <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="+877 878 788" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupAdress">
                    <Form.Label>Adress</Form.Label>
                    <Form.Control type="text" placeholder="7 rue du bois" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupComplement">
                    <Form.Label>Adress Complement</Form.Label>
                    <Form.Control type="text" placeholder="Bat1 Apt 4" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPostCode">
                    <Form.Label>Code Postal</Form.Label>
                    <Form.Control type="number" placeholder="76000" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Rouen" />
                </Form.Group>
        </>
    )
}
export default AdressFrom