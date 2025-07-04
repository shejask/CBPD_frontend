import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aboutImg from '/public/images/about/about-us-13.jpg';

const About11 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="team-single-page separator-padding">
            <div className="container">
                <div className="row align-items-center">
                     
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="team-single-content">
                            <h2>About CBPD Authorised Partner</h2>
                            <p>An Authorized Partner is entrusted with promoting and managing CBPD centers within a designated geographical region of a country. The primary goal is to expand the reach of the CBPD curriculum and certification programs. Upon approval, partners gain immediate access to CBPD learning content and are authorized to deliver voucher-based and e-learning solutions, offering fast, flexible, and comprehensive education options. As a recognized CBPD Authorized Partner, you can offer your clients and associates the full advantages of a professionally developed and expertly delivered education platform. Whether you're a company, solution provider, or reseller, you'll gain access to a network of testing centers capable of distributing CBPD vouchers and services. Key Responsibilities of CBPD Authorized Partners: Establish and manage a network of certified testing centers. Enhance your service portfolio by offering recognized CBPD certifications. Expand your reach by integrating CBPD support centers and clients into your network.</p>
                              
                            <div className="features-btn">
                                <Link onClick={ClickHandler} href="/about" className="btn-style-1">Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="team-single-img">
                            <Image 
                                src={aboutImg} 
                                alt="CBPD Authorized Partner"
                                width={800}
                                height={600}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '10px',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default About11;