import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdressFrom from "../components/AdressFrom";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    adress: "",
    complement: "",
    postCode: "",
    city: "",
  });

  type FormDataType = typeof formData;
  type FormDataKey = keyof FormDataType;
  
  const updateField = (key: FormDataKey, value: string) =>
    setFormData((formData) => {
      if (Object.keys(formData).includes(key)) {
        formData[key] = value;
      }
      return { ...formData };
    });
  async function addUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        const { data } = await res.json();
        console.log(data);
      } else {
        console.log("Some error occured", res);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Container className="mt-4">
      <h3>Register</h3>
      <Form onSubmit={addUser} className="mt-4" id="registerForm">
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Jhon Doe"
            name="fullname"
            onChange={(e) => {
              updateField("fullname", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              updateField("email", e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="mb-2"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              updateField("password", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            onChange={(e) => {
              updateField("confirmPassword", e.target.value);
            }}
          />
        </Form.Group>
        <details className="mb-3">
          <summary className="mb-3">
            Add my adress (for your next order)
          </summary>
          <AdressFrom />
        </details>
        <Button variant="warning" type="submit">
          Register
        </Button>
        <br />
        <span className="d-block mt-4">Or</span>
        <Link to="/Login">Login</Link>
      </Form>
    </Container>
  );
}

export default Register;
