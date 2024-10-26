import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <Container className="mt-4">
      <h3>Login</h3>
      <LoginForm />
      <br />
      <span className="d-block mt-4">Or</span>
      <Link to="/Register">Register</Link>
    </Container>
  );
}

export default Login;
