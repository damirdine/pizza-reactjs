import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap';
import { Link } from "react-router-dom"

let PayForm = ()=> {
    return(
        <Form>
            <details>
                <summary>Placing order without account</summary>

                <Form.Group className="mb-3" controlId="formGroupAdress">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupAdress">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="+877 878 788" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupAdress">
                    <Form.Label>Adress</Form.Label>
                    <Form.Control type="text" placeholder="7 rue du bois" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Adress Complement</Form.Label>
                    <Form.Control type="text" placeholder="Bat1 Apt 4" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Code Postal</Form.Label>
                    <Form.Control type="number" placeholder="76000" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Rouen" />
                </Form.Group>
            </details>
        </Form>
    )
}

export default PayForm