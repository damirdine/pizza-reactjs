import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import AdressFrom from './AdressFrom';

let PayForm = ()=> {
    return(
        <Form>
            <details>
                <summary>Placing order without account</summary>

                <Form.Group className="mb-3" controlId="formGroupAdress">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                </Form.Group>
                <AdressFrom/>
            </details>
        </Form>
    )
}

export default PayForm