import React, { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";
import "./CardItem.css"

const CardItem = ({ item }) => {
    const { src, text, label, gitClient, liveSite, gitServer, path } = item;
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <Col data-aos="fade-up" className="cards__item__link">
                <Card className="card">
                    <div className="cards__item__img" style={{ backgroundImage: `url(${src})` }}></div>
                    <div className="card-img-overlay d-flex flex-column justify-content-flex-start justify-content-md-center align-items-center">
                        <h5 className="card-title font-weight-bold">{label}</h5>
                        {
                            gitServer ? <Row className="g-4">
                                <Col md={5} className="gitLink">
                                    <a href={gitServer} rel="noopener noreferrer" target="_blank"><Button className="d-inline btn-color" >Server-side GitHub</Button></a>
                                </Col>
                                <Col md={{ span: 5, offset: 2 }} className="gitLink">
                                    <a href={gitClient} rel="noopener noreferrer" target="_blank"><Button className="d-inline btn-color" >Client-side GitHub</Button></a>
                                </Col>
                            </Row> :
                                <Row className="g-4">
                                    <Col className="gitLink">
                                        <a href={gitClient} rel="noopener noreferrer" target="_blank"><Button className="d-inline btn-color" >Client-side GitHub</Button></a>
                                    </Col>
                                </Row>
                        }
                        <Row>
                            <Col className="d-flex align-items-center flex-column gitLink my-2">
                                <a href={liveSite} rel="noopener noreferrer" target="_blank"><Button className="d-inline btn-color">Live Site</Button></a>
                                <a href={path} rel="noopener noreferrer" target="_blank"><Button className="d-inline" style={{ fontWeight: 'bold' }} variant="outline-dark">Learn More</Button></a>
                            </Col>
                        </Row>

                    </div>
                    <Card.Body className='cards__item__info'>
                        <p className='cards__item__text'>{text}
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default CardItem;