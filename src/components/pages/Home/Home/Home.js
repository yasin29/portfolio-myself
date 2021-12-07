import React from 'react';
import { GoTop } from '../../../ScrollToTop/GoTop';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div style={{ overflowX: 'hidden', scrollPaddingTop: '4rem' }}>
            <Banner></Banner>
            <Projects></Projects>
            <About></About>
            <Blog></Blog>
            <Contact></Contact>
            <GoTop />
        </div>
    );
};

export default Home;