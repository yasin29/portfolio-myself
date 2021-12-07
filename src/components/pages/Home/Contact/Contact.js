import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Aos from "aos";
import "aos/dist/aos.css";
import './Contact.css';
import ModalPreview from './ModalPreview';

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    const [modalShow, setModalShow] = React.useState(false);
    const [name, setName] = useState('');
    const sentEmail = e => {
        e.preventDefault();
        setName(e.target.first.value);
        emailjs.sendForm('service_q7z69hp', 'template_liglw3v', e.target, 'user_vPWyssKMcDeGjbAX7GYhU').then(res => {
            console.log(res);
        }).catch(err => console.log(err));
        setModalShow(true);
        e.target.reset()
    }
    return (
        <div id="contact" style={{ scrollMarginTop: '5rem' }}>
            <section className="contact">
                <div style={{ color: 'white', textAlign: 'center' }}>
                    <h1 style={{ fontFamily: `'Lobster', cursive`, fontSize: '100px' }}>Say hi!</h1>
                    <h4>DON'T BE SHY.</h4>
                </div>
                <Container fluid className="py-5">
                    <Row>
                        <Col lg={6} className="mx-auto">
                            <Card>

                                <Card.Body>
                                    <Row>
                                        <Col lg={12}>
                                            <div data-aos="fade-left" className="head text-center text-white">
                                                <h3 data-aos="fade-right">Contact</h3>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Form data-aos="flip-up" className="p-3" onSubmit={sentEmail}>
                                        <Row className="my-5">
                                            <Col lg={6}>
                                                <input type="text" className="effect-1" placeholder="First Name" name="first" required />
                                                <span className="Focus-border">
                                                </span>
                                            </Col>
                                            <Col lg={6}>
                                                <input type="text" className="effect-1" placeholder="Last Name" name="last" />
                                                <span className="Focus-border">
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row className="pb-4">
                                            <Col lg={12}>
                                                <input type="email" className="effect-1" placeholder="Email Address" name="user_email" required />
                                                <span className="Focus-border">
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row className="pt-5">
                                            <Col lg={12}>
                                                <input type="text" className="effect-1" placeholder="Your Message" name="message" required />
                                                <span className="Focus-border">
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col lg={6}>
                                                <p><input type="checkbox" required /> I,m not a Robot.</p>
                                            </Col>
                                            <Col lg={4} className="offset-2">
                                                <input className="btn1" type="submit" value="Send Message" />
                                            </Col>
                                        </Row>
                                    </Form>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <ModalPreview
                    show={modalShow}
                    name={name}
                    onHide={() => setModalShow(false)}
                />
            </section>
        </div>
    );
};

export default Contact;