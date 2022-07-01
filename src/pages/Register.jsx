import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap';
import { Link } from "react-router-dom"

function Register() {
  return (
    <Container className='mt-4'>
        <h3>Register</h3>
        <Form className='mt-4'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name & Firstname</Form.Label>
                <Form.Control type="text" placeholder="Jhon Doe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="mb-2" type="password" placeholder="Password" />
                <Form.Label >Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
            <Button variant="primary" type="submit">Register</Button> 
            <br/><span className='d-block mt-4'>Or</span>
            <Link to="/Login">Login</Link>
        </Form>
    </Container>
  );
}

export default Register;