import Form from 'react-bootstrap/Form';
import AdressFrom from './AdressFrom';

const PayForm = ()=> {
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