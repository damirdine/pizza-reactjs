import { Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

let LoginForm = () => {
    function loggin (e) {
        e.preventDefault()
        console.log('hello')
    }
    return (
        <Form onSubmit={loggin} id='LoginForm'>
            <Form.Group  className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="warning" type="submit">
                Login
            </Button>
        </Form>
    )
}

export default LoginForm