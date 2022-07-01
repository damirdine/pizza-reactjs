import { Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <Container className='mt-4'>
        <h3>Login</h3>
        <Form className='mt-4'>
            <LoginForm/>
            <br/><span className='d-block mt-4'>Or</span>
            <Link to="/Register">Register</Link>
        </Form>
    </Container>
  );
}

export default Login;