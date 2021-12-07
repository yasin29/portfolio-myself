import React from 'react';

import { Link } from 'react-router-dom';
import './Footer.css'
import NewsLetterSubscribe from './NewsLetterSubscribe';

const Footer = () => {
    return (
        <div className='footer-container d-flex flex-column justify-content-center align-items-center'>
            <NewsLetterSubscribe></NewsLetterSubscribe>
            {/* <div className="footer-links w-100 d-flex justify-content-center">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>
                            About Us
                        </h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div> */}
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            YB
                            <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>Yasin Billah © 2020</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to={{ pathname: "https://www.facebook.com/yasin.billah/" }}
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link reddit'
                            to={{ pathname: "https://www.reddit.com/user/Yasin_Billah" }}
                            target='_blank'
                            aria-label='Reddit'
                        >
                            <i className='fab fa-reddit' />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to={{ pathname: "https://www.youtube.com/channel/UCaqelmVnnZdUiA58NdRIddw/featured" }}
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to={{ pathname: "https://twitter.com/BillahYasin" }}
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                            className='social-icon-link linkedin'
                            to={{ pathname: "https://www.linkedin.com/in/yasin-billah/" }}
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;