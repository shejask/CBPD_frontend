import React, { useState } from 'react'
import Link from 'next/link'
import logo from '/public/images/logo.svg'
import chat from '/public/images/icon/bubble-chat.png'
import MobileMenu from '../MobileMenu/MobileMenu';
import Image from 'next/image';

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        // Handle search submission here
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <header className={`header-area ${props.hclass}`}>
            <div id="header-sticky" className="menu-area">
                <div className="container-fluid">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3 col-md-7 col-5">
                                <div className="logo">
                                    <Link onClick={ClickHandler} href="/home"><Image src={logo} alt="logo"/></Link>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-1 col-1 text-right text-xl-right d-none d-lg-block">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul className="nav">
                                            <li className="has-submenu">
                                                <Link onClick={ClickHandler} href="/home">Home</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/home">Home Page 01</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home-2">Home Page 02</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home-3">Home Page 03</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                            <li className="has-submenu"><Link onClick={ClickHandler} href="/about">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/team">Team Page</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/team-single/Jone-Willsone">Team Single</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/pricing">Pricing</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/faq">Faq</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/404">404</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu"><Link onClick={ClickHandler} href="/service">Services</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/service">Services Style 1</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service-s2">Services Style 2</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service-s3">Services Style 3</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service-single/Website-Development">Service Single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu"><Link onClick={ClickHandler} href="/projects">Projects</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/projects">Projects Style 1</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/projects-s2">Projects Style 2</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/projects-s3">Projects Style 3</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/projects-s4">Projects Style 4</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/project-single/Business-Growth-System">Project Single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu">
                                                <Link onClick={ClickHandler} href="/home">Blog</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/blog">Blog Grid</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-style-2">Blog Grid Style 2</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-right-sidebar">Blog right sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                    <li className="third-lavel-menu"><Link onClick={ClickHandler} href="/blog-single/The-Most-Popular-New-Top-Business-Design">Blog
                                                        Single</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link onClick={ClickHandler} href="/blog-single/The-Most-Popular-New-Top-Business-Design">Blog single right sidebar</Link>
                                                            </li>
                                                            <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/The-Most-Popular-New-Top-Business-Design">Blog single left
                                                                sidebar</Link></li>
                                                            <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/The-Most-Popular-New-Top-Business-Design">Blog single
                                                                fullwidth</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-5 text-left">
                                <div className="header-area-right">
                                    <ul>
                                        <li><button className="search-toggle-btn"><i className="icon-23" onClick={() => setMenuState(!menuActive)}></i></button></li>
                                    </ul>
                                    <div className="contact-ft">
                                        <Link onClick={ClickHandler} href="/contact">
                                            <i><Image src={chat} alt="" /></i>
                                            <span>
                                                <small>Chat Us Anytime</small>
                                                <b>(406) 555-0120</b>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">
                                <MobileMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header-search-form ${menuActive ? "active" : ""}`}>
                <button className="close-header-search" onClick={() => setMenuState(!menuActive)}><i className="icon-02"></i></button>
                <form method="post" onSubmit={SubmitHandler}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="search" 
                            value={searchTerm} 
                            onChange={handleSearchChange}
                            placeholder="Search Here" 
                            required="" 
                        />
                        <button type="submit" className="search-btn"><i className="icon-23"></i></button>
                    </div>
                </form>
            </div>
        </header>
    )
}

export default Header;