import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Button1 } from '../Button/Button';
import './Header.css';

const Header = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    const homeClick = () => {
        closeMobileMenu();
        scrollToTop();
    }

    window.addEventListener('resize', showButton);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const element = <i className="fab fa-battle-net fa-spin"></i>
    // for hover effect 
    const changeColor = (e) => {
        e.target.style.color = 'cyan';
    }
    const changeBack = (e) => {
        e.target.style.color = 'white';
    }

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'} id="nav">
                <div className='navbar-container'>
                    <Link onMouseOver={changeColor} onMouseLeave={changeBack} style={{ textDecoration: 'none', color: 'white' }} to='/home' className='navbar-logo' onClick={homeClick}>
                        YB  {element}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link

                                to='/home' className='nav-links' onClick={homeClick}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <HashLink
                                smooth={true} duration={500} exact='true' offset={-80}
                                to='/home#projects'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </HashLink>

                        </li>
                        <li className='nav-item'>
                            <label for="drop-1" className='nav-links toggle'>Hire Me</label>
                            <ul>
                                < li className='nav-links'>
                                    <HashLink
                                        smooth={true} duration={500} exact='true' offset={-80}
                                        to='/home#about'
                                        style={{ textDecoration: 'none', color: '#fff' }}
                                        onClick={closeMobileMenu}
                                    >
                                        About Me
                                    </HashLink>
                                </li>
                                <li className='nav-links'><a style={{ textDecoration: 'none', color: '#fff' }} href="https://drive.google.com/uc?export=download&id=1NGmy-zLqVUxiPSDh26ukpZixsP2mzpdK">Download resume</a> <i className="fas fa-download"></i></li>
                            </ul>
                        </li>

                        <li className='nav-item'>
                            <HashLink
                                smooth={true} duration={500} exact='true' offset={-80}
                                to='/home#blogs'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Blogs
                            </HashLink>
                        </li>
                        <li className='nav-item'>
                            <HashLink
                                smooth={true} duration={500} exact='true' offset={-80}
                                to='/home#contact'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </HashLink>
                        </li>

                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button1 buttonStyle='btn--outline'>SIGN UP</Button1>}
                </div>
            </nav >
        </>
    );
};

export default Header;