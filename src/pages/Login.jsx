import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <Container className='mt-4'>
        <h3>Login</h3>
        <Form className='mt-4'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accept the terms and conditions " />
                <a className='d-block mt-2' href="/policy">Policy</a>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button> 
            <br/><span className='d-block mt-4'>Or</span>
            <a className='d-block mt-4' href="/Register">Register</a>
        </Form>
    </Container>
  );
}

export default Login;