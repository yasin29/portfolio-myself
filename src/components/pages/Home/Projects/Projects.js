import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import CardItem from './CardItem/CardItem';
import Aos from "aos";
import "aos/dist/aos.css";
import './Projects.css'

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const items = [
        {
            src: 'https://i.ibb.co/WHDTmZ9/smartmockups-kwmsm795.jpg',
            text: 'An Online-Booking-based Electric vehicles ordering website using react router,Material UI, mongoDB',
            label: 'ELECTRO BOOM',
            path: '/services',
            gitClient: 'https://github.com/yasin29/ev-car-website-client-side.git',
            gitServer: 'https://github.com/yasin29/ev-car-website-server-side.git',
            liveSite: 'https://electro-boom.web.app/'
        },
        {
            src: 'https://i.ibb.co/SJZy9x0/smartmockups-kwn3yjhj.jpg',
            text: ' An Online-Booking-based Resort booking website using react router, mongodb and firebase',
            label: 'Markas Beel Resort',
            path: '/services',
            gitClient: 'https://github.com/yasin29/tourism-website-client-side.git',
            gitServer: 'https://github.com/yasin29/tourism-website-server-side.git',
            liveSite: 'https://markas-resort.web.app/'
        }
    ]
    const items2 = [
        {
            src: 'https://i.ibb.co/h20xMgr/smartmockups-kwn48tv4.jpg',
            text: 'An Online-based Gym Instructions and Programs website using react router and firebase',
            label: 'Xclusive Gym',
            path: '/services',
            gitClient: 'https://github.com/yasin29/An-Online-based-Gym-Instructions-and-Programs-website.git',
            liveSite: 'https://gym-website-bd358.web.app/'
        },
        {
            src: 'https://i.ibb.co/N1d61hm/smartmockups-kwn4a076.jpg',
            text: 'InfoTech Career-path Online Learning Platform using react router',
            label: 'InfoTech Career',
            path: '/services',
            gitClient: 'https://github.com/yasin29/Online-Learning-Platform-using-react-router.git',
            liveSite: 'https://info-tech-career-path-yasin29.netlify.app/home'
        },
        {
            src: 'https://i.ibb.co/rbQnKCC/smartmockups-kwn4aw4p.jpg',
            text: 'InfoTech Club Full Stack Web Development Learning path',
            label: 'InfoTech Club',
            path: '/services',
            gitClient: 'https://github.com/yasin29/Full-Stack-Web-Development-Learning-path-website-using-React.git',
            liveSite: 'https://yasin29-full-stack-learning-path.netlify.app/'
        }
    ]
    return (
        <div id="projects" style={{ scrollMarginTop: '5rem' }}>
            <Container fluid className="p-3" style={{ background: '#fff', backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/c1d79e46701013.586d242e2a0b5.gif)`, backgroundSize: 'cover' }}>
                <h1 data-aos="fade-right" style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Projects</h1>
                <div data-aos="fade-left" className="about-border"></div>
                <Row style={{ justifyContent: 'center' }} xs={1} lg={2} className="g-4 mb-4 p-md-5 m-md-2" >
                    {
                        items.map(item =>
                            <CardItem
                                item={item}
                                key={item.src}
                            ></CardItem>
                        )
                    }
                </Row>
                <Row style={{ justifyContent: 'center' }} xs={1} lg={3} className="g-4" >
                    {
                        items2.map(item =>
                            <CardItem
                                item={item}
                                key={item.src}
                            ></CardItem>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Projects;