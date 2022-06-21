import React from 'react';
import {Container,Row,Col,Table,Image} from 'react-bootstrap';
import {FiPhoneCall} from 'react-icons/fi';
import {ImMobile} from 'react-icons/im';
import {AiOutlineMail, AoOutlineMail} from 'react-icons/ai'

const Contact = () => {
    return(
        <Container className='mt-5'>
            <Row>
                <Col md={6}>
                    <h1>Pizza Delicious</h1>
                    <h2>Notre adresse:</h2>
                    <p>103 rue de la rue,</p>
                    <p>75021 Paris</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita incidunt velit nemo aliquam! Ullam numquam ipsam impedit sit. </p>
                    <Table striped bordered hover>
                    <thead className='text-center bg-warning'>
                        <td className='font-weight-bold' colSpan={4}>-- Nos Coordonées --</td>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                        <td><FiPhoneCall/></td>
                        <td>Téléphone</td>
                        <td colSpan={2}>01 09 83 20 20</td>
                        </tr>
                        <tr className="text-center">
                        <td><ImMobile/></td>
                        <td>Portable</td>
                        <td colSpan={2}>01 09 83 20 20</td>
                        </tr>
                        <tr className="text-center">
                        <td><AiOutlineMail/></td>
                        <td>Mail</td>
                        <td text="center">contact@twitter.fr</td>
                        </tr>
                    </tbody>
                    </Table>
                </Col>
                <Col md={6}>
                    <Image src='./images/farmhouse.jpg' style={{
                        width:"100%",
                        height:"100%",
                        objectFit:"cover"
                    }}/>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact