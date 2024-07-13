import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <>
      <section id='contact'>
        <Container>
          <Form>
            <Row>
              <Col lg={4} md={12} className='block-title'>
                <h2>Contact Us</h2>
                <p>Email address : info@dentalid.app</p>
              </Col>
              <Col lg={4} md={12}>
                <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='number'>
                  <Form.Label>Number</Form.Label>
                  <Form.Control type='text' placeholder='+923123456789' />
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type='email' />
                </Form.Group>
              </Col>
              <Col lg={4} md={12} className='message'>
                <Form.Group controlId='message'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as='textarea' rows='4' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Send Message
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
