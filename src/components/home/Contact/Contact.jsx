import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section mt-5">
            <div className='contact-wrapper'>
                <p>TALK TO US TODAY</p>
                <h1>Connekt Now</h1>

                <div className='contact-form'>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="serviceSelect">
                                    <Form.Label>Select Service</Form.Label>
                                    <Form.Select aria-label="Select Service">
                                        <option>Connekt Lite</option>
                                        <option>Connekt Lite</option>
                                        <option>Connekt Lite</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="addressInput">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your address" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="firstNameInput">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your first name" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="lastNameInput">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your last name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="phoneNumberInput">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter your phone number" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="emailInput">
                                    <Form.Label className="text-md-start">Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email address" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={12}>
                                <Form.Group controlId="messageTextarea">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={6} placeholder="Your message" />
                                </Form.Group>
                            </Col>
                        </Row>
                            <div className="text-md-start">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
