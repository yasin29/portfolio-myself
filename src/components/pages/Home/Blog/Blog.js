import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";
import './Blog.css'

const Blog = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div id="blogs" style={{ scrollMarginTop: '4rem' }}>
            <Container fluid style={{ padding: '4rem', background: '#fff' }}>
                <h1 data-aos="fade-right" style={{ textAlign: 'center', fontWeight: 'bold' }}>Blogs</h1>
                <div data-aos="fade-left" className="about-border"></div>

                <section className="blogSection">
                    <h2>Under constructions</h2>
                </section>
                {/* <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">
                        A BATTLE YOU CAN NEVER WIN.
                        <br />Where humanity is heading?
                        <a href="https://t.co/gwmz4eSRpX">https://t.co/gwmz4eSRpX</a>
                    </p>&mdash; Yasin Billah (@BillahYasin)
                    <a href="https://twitter.com/BillahYasin/status/1462596189769977861?ref_src=twsrc%5Etfw">November 22, 2021</a></blockquote>
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
            </Container>
        </div>
    );
};

export default Blog;