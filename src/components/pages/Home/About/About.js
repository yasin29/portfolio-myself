import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";
import './About.css'
const About = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    console.log(window.self);
    return (
        <div id="about" style={{ scrollMarginTop: '5rem' }}>
            <Container fluid className="p-3" style={{
                background: '#21201f'
            }}>
                <h1 data-aos="fade-right" style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>About Me</h1>
                <div data-aos="fade-left" className="about-border"></div>
                <Row className="mb-3">
                    <Col data-aos="fade-down-right" md={6} className="d-flex align-items-center justify-content-center flex-column mb-3">
                        <div
                            className="badge-base LI-profile-badge" data-locale="en_US"
                            data-size="large"
                            data-theme="dark"
                            data-type="HORIZONTAL"
                            data-vanity="yasin-billah"
                            data-version="v1">
                        </div>
                        <Button variant="secondary" className="w-50 mt-3" onClick={() => setShow(true)}>
                            Resume</Button>
                        <Modal
                            size="lg"
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                    RESUME
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ margin: 'auto' }}>
                                <iframe title="Resume" src="https://drive.google.com/file/d/1T4gvTKMtMUlubgKkMNJ9cHEFrhilCTI8/preview" width="100%" height="480" allow="autoplay"></iframe>
                            </Modal.Body>
                        </Modal>
                    </Col>
                    <Col data-aos="fade-down-left" md={6} className="d-flex justify-content-center flex-column">
                        <div style={{ color: 'white', textAlign: 'justify' }}>
                            <h1 style={{ fontFamily: `'Lobster', cursive` }}>Who am I?</h1>
                        </div>
                        <div className="scroll-box">
                            I am the kind of person who never gives up until the end. I always live on hope and this hope motives me to keep going on the darkest phase with all struggles and obstacles. Even If there is no hope, I always try to make a reason to create hope and live life again. Whenever I find my motives into anything, there is no stopping me from going deep into it. These motives drive me to enlighten myself to gain knowledge, to explore, to face challenges with sheer determination. I am never afraid of my mistakes because these mistakes teach me more things than any other thing in my life. Whatever my preparation or confidence level is, I never escape, I always appear to face my fate. I might as well fail but at least I’ll learn something.
                            As an IT graduate, it’s understandable that I have a good base on software and networking. And also as a tech-savvy person from my childhood, I have always loved to explore new tech upgrades, find out new software features, new tech releases, and of course love to play games. But throughout the times, I never was an expert on something of technology. Like typical jack of all trades master of none. During covid-19 quarantine time, for the search of ace, I figured out web development is something that fascinates me, and also I just love what Machine learning is doing in this data science revolution. So I started to work on my undergrad thesis about a machine-learning-related topic and also started to become a self-taught web developer. Now I am confident with Front-end web development. I specialize in javascript and have 5 full-stack project experiences with HTML, CSS, bootstrap, react.js, MySQL, MongoDB, Python, Django REST Framework. I have done my undergrad thesis on sentiment analysis and looking forward to learning more and working with ML, DL.

                            I have had my own start-up business since 2017. I’m also working with my father on his Interior-design business for the last two years. I organized one national and one International fest during my Notre Dame College days as a general secretary. In my university life, I just went on another level. Directly organized two departmental programs (freshers and farewell) with lots mini-program like inter-department futsal competitions and for the BUP infotech club, I directly organized two Inter-university tech fests as a general secretary. Organizing and leadership skills come to me naturally. I love to organize things and make plans. Always try to find the best output from negotiations. Like to work with the team and have my control over little things which ultimately give the best output collectively. As a hobby, I just love football and am so passionate about it. I like to explore topics about geopolitics. Love to explore the mystery and power of mathematics and physics.

                            I always love what I do and always do what I love. This makes me happy and always believe the best time for a new beginning is now, it’s never too late. Have fun.

                        </div>
                    </Col>
                </Row>
                <Row style={{ color: 'white', textAlign: 'justify', margin: 'auto' }}>
                    <Col data-aos="fade-down-right" md={12} className="d-flex align-items-center justify-content-center flex-column mb-3">
                        <h1 style={{ fontFamily: `'Lobster', cursive` }}>Field of Interest</h1>
                    </Col>
                    <Col data-aos="fade-down-left" md={12} className="d-flex justify-content-center flex-column">
                        <ul className="list">
                            <li><a href="#0">① <span>Web Development</span></a></li>
                            <li><a href="#0">② <span>Data Science</span></a></li>
                            <li><a href="#0">③ <span>Machine Learning</span></a></li>
                            <li><a href="#0">④ <span>Blockchain</span></a></li>
                            <li><a href="#0">⑤ <span>Business Development</span></a></li>
                            <li><a href="#0">⑥ <span>Digital Marketing</span></a></li>
                        </ul>
                    </Col>
                </Row>
                <Row style={{ color: 'white', textAlign: 'justify', margin: 'auto' }}>
                    <Col data-aos="fade-down-right" md={12} className="d-flex align-items-center justify-content-center flex-column mb-3">
                        <h1 style={{ fontFamily: `'Lobster', cursive` }}>Skills</h1>
                    </Col>
                    <Col data-aos="fade-down-left" md={12} className="d-flex justify-content-center mx-auto">
                        <div>
                            <div className="social" >
                                <div className="front">
                                    <i className="fab fa-html5"> HTML</i>
                                </div>
                                <div className="back">
                                    <i className="fab fa-html5"></i>

                                </div>
                            </div>

                            <div className="social social-css">
                                <div className="front">
                                    <i className="fab fa-css3-alt"> CSS</i>
                                </div>
                                <div className="back">
                                    <i className="fab fa-css3-alt"></i>
                                </div>
                            </div>

                            <div className="social social-github">
                                <div className="front">
                                    <i className="fa fa-github"> GitHub</i>
                                </div>
                                <div className="back">
                                    <i className="fa fa-github"></i>
                                </div>
                            </div>

                            <div className="social social-bootstrap">
                                <div className="front">
                                    <i className="fab fa-bootstrap"> Bootstrap</i>
                                </div>
                                <div className="back">
                                    <i className="fab fa-bootstrap"></i>
                                </div>
                            </div>

                            <div className="social social-javascript" >
                                <div className="front">
                                    <i className="fab fa-js"> JavaScript</i>
                                </div>
                                <div className="back">
                                    <i className="fab fa-js"></i>
                                </div>
                            </div>

                            <div className="social social-react">
                                <div className="front">
                                    <i className="fab fa-react"> React</i>
                                </div>
                                <div className="back">
                                    <i className="fab fa-react"></i>
                                </div>
                            </div>

                            <div className="social social-nodejs" >
                                <div className="front">
                                    <i className="fab fa-node"> Node JS</i>
                                </div>
                                <div className="back">
                                    <i className="fab fa-node"></i>
                                </div>
                            </div>

                            <div className="social social-python" >
                                <div className="front">
                                    <i className="fab fa-python"> Python</i>
                                </div>
                                <div className="back">
                                    <i className="fab fa-python"></i>
                                </div>
                            </div>

                            <div className="social social-wordpress">
                                <div className="front">
                                    <i className="fab fa-wordpress"> Wordpress</i>
                                </div>
                                <div className="back">
                                    <i className="fab fa-wordpress"></i>
                                </div>
                            </div>
                            {/* ----  */}
                            <div className="social social-react">
                                <div className="front">
                                    <i className="far fa-file-word"> MS-Word</i>
                                </div>
                                <div className="back">
                                    <i className="far fa-file-word"></i>
                                </div>
                            </div>

                            <div className="social social-nodejs" >
                                <div className="front">
                                    <i className="fas fa-file-excel"> Excel</i>
                                </div>
                                <div className="back">
                                    <i className="fas fa-file-excel"></i>
                                </div>
                            </div>

                            <div className="social social-python" >
                                <div className="front">
                                    <i className="fas fa-file-powerpoint"> PowerPoint</i>
                                </div>
                                <div className="back">
                                    <i className="fas fa-file-powerpoint"></i>
                                </div>
                            </div>

                            <div className="social social-wordpress">
                                <div className="front">
                                    <i className="fas fa-camera-retro"> Photography</i>
                                </div>
                                <div className="back">
                                    <i className="fas fa-camera-retro"></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default About;