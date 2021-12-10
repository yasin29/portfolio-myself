import React, { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";
import "./CardItem.css"

const CardItem = ({ item }) => {
    const { src, text, label, gitClient, liveSite, gitServer, path } = item;
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div data-aos="fade-up" className="maincontainer">
            <div className="back">
                <h3 style={{ display: 'block' }}>{label}</h3>
                <div className="pDiv">{text}
                    {
                        gitServer ? <Row style={{ justifyContent: 'center' }} >
                            <Col xs={5} className="gitLink">
                                <a style={{ textDecoration: 'none' }} href={gitServer} rel="noopener noreferrer" target="_blank"><Button className="d-inline btn-color" >Server-side</Button></a>
                            </Col>
                            <Col xs={{ span: 5 }} className="gitLink">
                                <a style={{ textDecoration: 'none' }} href={gitClient} rel="noopener noreferrer" target="_blank"><Button className="d-inline btn-color" >Client-side</Button></a>
                            </Col>
                        </Row> :
                            <Row >
                                <Col xs={12} className="gitLink">
                                    <a style={{ textDecoration: 'none', margin: 'auto' }} href={gitClient} rel="noopener noreferrer" target="_blank"><Button className="d-inline btn-color" >Client-side GitHub</Button></a>
                                </Col>
                            </Row>
                    }
                    <Row>
                        <Col className="d-flex align-items-center flex-column gitLink my-2">
                            <a style={{ textDecoration: 'none' }} href={liveSite} rel="noopener noreferrer" target="_blank"><Button className="d-inline btn-color">Live Site</Button></a>
                            <a style={{ textDecoration: 'none' }} href={path} rel="noopener noreferrer" target="_blank"><Button className="d-inline" style={{ fontWeight: 'bold', color: 'white' }} variant="outline-dark">Learn More</Button></a>
                        </Col>
                    </Row>
                </div>

            </div>
            <div className="front">
                <div className="image">
                    <img src={src} alt="" />
                    <h3 style={{ backgroundColor: 'wheat' }}>{label}</h3>
                </div>
            </div>
        </div>
    );
};

export default CardItem;