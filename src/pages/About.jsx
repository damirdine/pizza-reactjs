import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const About = () => {
    return(
        <Container className='mt-5'>
            <h1>Qui sommes-nous ?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, commodi optio. Veritatis molestias distinctio placeat.</p>
            <h1>Notre spécialité</h1>
            <Row>
                <Col md={6}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum dignissimos vel, amet error veritatis eaque neque sequi et odio ad exercitationem alias ratione quas soluta ipsa voluptatum optio ullam numquam aliquam! Laudantium eligendi corrupti id commodi nam cupiditate quaerat, veniam vero eius accusantium, eos molestiae numquam velit, et magni!</p>
                </Col>
                <Col md={6}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum dignissimos vel, amet error veritatis eaque neque sequi et odio ad exercitationem alias ratione quas soluta ipsa voluptatum optio ullam numquam aliquam! Laudantium eligendi corrupti id commodi nam cupiditate quaerat, veniam vero eius accusantium, eos molestiae numquam velit, et magni!</p>
                </Col>
            </Row>
            <Row>
                <h1>Le Chef</h1>
                <Col md={3}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum dignissimos vel, amet error veritatis eaque neque sequi et odio ad exercitationem alias ratione quas soluta ipsa voluptatum optio ullam numquam aliquam! Laudantium eligendi corrupti id commodi nam cupiditate quaerat, veniam vero eius accusantium, eos molestiae numquam velit, et magni!</p>
                </Col>
                <Col md={3}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum dignissimos vel, amet error veritatis eaque neque sequi et odio ad exercitationem alias ratione quas soluta ipsa voluptatum optio ullam numquam aliquam! Laudantium eligendi corrupti id commodi nam cupiditate quaerat, veniam vero eius accusantium, eos molestiae numquam velit, et magni!</p>
                </Col>
                <Col md={3}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum dignissimos vel, amet error veritatis eaque neque sequi et odio ad exercitationem alias ratione quas soluta ipsa voluptatum optio ullam numquam aliquam! Laudantium eligendi corrupti id commodi nam cupiditate quaerat, veniam vero eius accusantium, eos molestiae numquam velit, et magni!</p>
                </Col>
                <Col md={3}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum dignissimos vel, amet error veritatis eaque neque sequi et odio ad exercitationem alias ratione quas soluta ipsa voluptatum optio ullam numquam aliquam! Laudantium eligendi corrupti id commodi nam cupiditate quaerat, veniam vero eius accusantium, eos molestiae numquam velit, et magni!</p>
                </Col>
            </Row>
        </Container>
  
    )
}
export default About;