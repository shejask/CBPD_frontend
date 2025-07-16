import React from 'react'
import abimg from '/public/images/about/about-img1.jpg'
import abimg2 from '/public/images/about/about-img2.jpg'
import shape from '/public/images/about/shape.png'
import Link from 'next/link'
import Image from 'next/image'


const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="about-img-1">
                                <Image src={abimg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-img-2">
                                <Image src={abimg2} alt="" />
                                <div className="shape">
                                    <Image src={shape} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-text">
                                <div className="about-icon-wrap">
                                    <i className="icon-26"></i>
                                    <div className="about-icon-text">
                                        <h4>298+</h4>
                                        <small>Awards Won</small>
                                    </div>
                                </div>
                                <span>Transforming ideas into user-friendly and visually appealing websites Accounting
                                    and Bookkeeping.</span>
                                <p>Transforming ideas into user-friendly and visually appealing websites Accounting and
                                    Bookkeeping Services related to <b>financial record-keeping.</b></p>
                                <Link onClick={ClickHandler} href="/about" className="btn-style-1">More About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;