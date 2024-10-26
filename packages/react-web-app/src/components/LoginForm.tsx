import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

let LoginForm = ({setUserLogged}) => {
    async function loggin (e) {
        e.preventDefault()
        let email = document.querySelector("#formBasicEmail").value
        let password = document.querySelector("#formBasicPassword").value
        try {
          const res = await fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "email" : email,
              "password":password,
            }),
            credentials: "include"
          });
          if (res.status === 200) {
            const data = await res.json()
            console.log(data);
          } else {
            console.log("Some error occured", res);
          }
        } catch (err) {
          console.log(err);
        }
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