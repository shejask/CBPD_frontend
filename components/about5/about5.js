import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about/about-img3.jpg'
import abimg2 from '/public/images/about/about-img4.jpg'
import abimg3 from '/public/images/about/about-img5.jpg'
import shape from '/public/images/about/radial.png'
import VideoModal from '../ModalVideo/VideoModal'
import Image from 'next/image'
import aboutImg from '/public/images/about/about-us-11.png'

const About5 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about-section-s2">
            <div className="back-shape"
                style={{ backgroundImage: `url(${'/images/about/tshape.png'})` }}>
            </div>
            <div className="container">
                <div className="about-wrap">
                    {/* <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                            <div className="about-top-left">
                                <div className="about-top-text">
                                    <Link onClick={ClickHandler} href="/about" className="btn-style-1">Get A Quote</Link>
                                    <div className="about-top-right">
                                        <p>25+ Years</p>
                                        <span>Experienced</span>
                                    </div>
                                </div>
                                <h2>Ready To Give A New Business Look</h2>
                                <p>Transforming ideas into user-friendly and visually appealing websites Accounting and
                                    Bookkeeping.</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
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
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="about-bottom-wrap">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="about-bottom-left">
                                <div className="heading-title">
                                   <small>About Us</small>
                                    <h2>Step into the future of career growth—Join the innovative way of career building today! </h2>
                                     <p>Turn learning into mastery with CBPD! Professional certifications designed for real-world impact in a short time</p>
                                    </div>
                                
                                <div className="row">
                                        <div className="about-bottom-left-text">
                                             {/* <p>The Central Board of Professional Development(CBPD) is a professional association dedicated to awarding certification based on the practical application of knowledge in real-world settings. 
                                                We believe academic courses must hold social relevance, and our programs are carefully designed to deliver in-depth subject mastery within a short time frame. CBPD is guided by 
                                                five golden principles that define the essence of true professional qualifications. </p> */}
                                            <ul>
                                                <li><i className="icon-21"></i>Strive for Professional Mastery </li>
                                                <li><i className="icon-21"></i>Climbing to Greater Heights in the Corporate World</li>
                                                <li><i className="icon-21"></i>Develop Career-Specific Skills </li>
                                                <li><i className="icon-21"></i>Connecting with Industry Experts </li>
   
                                            </ul>
                                            {/* <div className="icon-wraps">
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
                                            </div> */}
                                            {/* <Link onClick={ClickHandler} href="/about">More About Us</Link> */}
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="about-bottom-right">
                                <div className="about-bottom-right-img">
                                    <Image 
                                        src={aboutImg} 
                                        alt="CBPD Accreditation" 
                                        width={800}
                                        height={500}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '20px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                        {/* <div className="progress-wrap">
                                            <span>Success Rate</span>
                                            <div className="progress blue">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">95%</div>
                                            </div>
                                        </div> */}
                                </div>
                                {/* <div className="about-bottom-right-img">
                                    <Image src={abimg3} alt=""/>
                                        <div className="video-btn-wrap">
                                            <VideoModal />
                                        </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="ab-shape">
                        <Image src={shape} alt=""/>
                    </div>
                </div>
            </div>
            <div className="top-shape">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 92" fill="none">
                    <path d="M0 0L720 91.5V2L0 0Z" />
                </svg>
            </div>
        </section>
    )
}

export default About5;