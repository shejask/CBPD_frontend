import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about/about-img1.jpg'
import abimg2 from '/public/images/about/shape.png'
import abimg3 from '/public/images/about/donate.png'
import abimg4 from '/public/images/about/about-img6.jpg'
import Image from 'next/image'

const ClickHandler = (props) => {
    window.scrollTo(10, 0);
}


const About3 = (props) => {
    return (
        <section className="about-section-s3">
            <div className="container">
                <div className="about-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-6">
                            <div className="about-img-1">
                                <Image src={abimg} alt="" />
                                <div className="shape">
                                    <Image src={abimg2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-6">
                            <div className="about-img-2">
                                <div className="shape">
                                    <Image src={abimg3} alt="" />
                                </div>
                                <div className="about-img-inner">
                                    <Image src={abimg4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-bottom-left">
                                <div className="heading-title">
                                    <small>About Company</small>
                                    <h2>Our Main Gola To Modern <span>Business Solutions</span></h2>
                                </div>
                                <div className="about-bottom-left-text">
                                    <p>Transforming ideas into user-friendly and visually appealing websites
                                        Accounting and Bookkeeping: Services related.</p>
                                    <ul>
                                        <li><i className="icon-21"></i>The Art and Science of Building</li>
                                        <li><i className="icon-21"></i>Mastering the Construction Process</li>
                                        <li><i className="icon-21"></i>Green Construction Practices</li>
                                    </ul>
                                    <div className="icon-wraps">
                                        <div className="icon-wrap">
                                            <div className="icon">
                                                <i className="icon-25"></i>
                                            </div>
                                            <div className="icon-text">
                                                <h4>Website Development</h4>
                                            </div>
                                        </div>
                                        <div className="icon-wrap">
                                            <div className="icon">
                                                <i className="icon-24"></i>
                                            </div>
                                            <div className="icon-text">
                                                <h4>Social Media Management</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <Link onClick={ClickHandler} href="/about">More About Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About3;