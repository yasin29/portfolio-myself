import React, { useState } from 'react';
import Particles from "react-tsparticles";
import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import '../../../../App.css';
import './Banner.css'
const Banner = () => {
    const [show, setShow] = useState(false);

    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <div className='hero-container'>
            <Particles
                className={show && "noneParticles"}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 50,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 100,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 150,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <video src='/videos/video-4.mp4' autoPlay loop muted />
            <h1>HELLO, I am Yasin Billah</h1>
            <p>Front-End Web Developer</p>
            <div className='hero-btns'>
                <HashLink
                    smooth={true} duration={500} exact='true' offset={-80}
                    to='/home#about'
                >
                    <Button
                        variant="outline-dark"
                        style={{ border: '2px solid white', color: 'white' }}
                    >
                        Learn About Me
                    </Button>
                </HashLink>
                <Button>
                    <a style={{ color: 'white', textDecoration: 'none' }} href="https://drive.google.com/uc?export=download&id=1NGmy-zLqVUxiPSDh26ukpZixsP2mzpdK">Resume</a> <i className="fas fa-download"></i>
                </Button>
            </div>
        </div>
    );
};

export default Banner;