import React from "react";
import Link from 'next/link'
import chimg from '/public/images/choose/img-1.jpg'
import chimg2 from '/public/images/choose/img-2.jpg'
import Image from "next/image";

const ChooseSection = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (
        <section className="choose-section separator-padding" style={{ backgroundImage: `url(${'/images/choose/bg2.jpg'})` }}>
            <div className="container">
                <div className="choose-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="choose-items">
                                <div className="heading-title-s3">
                                    <small>Why Choose Us</small>
                                    <h2>Education Meets Personality & Professional Growth </h2>
                                </div>
                                <div className="choose-item">
                                    <i className="icon-12"></i>
                                    <h3>Master the Art of Living a Remarkable Life</h3>
                                    <p>CBPD offers a wide range of courses across disciplines, created with trusted educational partners. Assignments are tailored to suit each center’s needs and resources.</p>
                                </div>
                               <div className="choose-item">
    <i className="icon-12"></i>
    <h3>Claim Your Renowned Certifications & Membership</h3>
    <p>Earn UK-certified credentials and sharpen leadership, communication, and interview skills. Stay updated with exclusive insights as a CBPD member.</p>
</div>
<div className="choose-item">
    <i className="icon-12"></i>
    <h3>Unlock Your Ideal Career Path</h3>
    <p>CBPD prepares you for careers in management and proctoring with skill-based courses and personalized learning that drives professional success.</p>
</div>

                                {/* <Link onClick={ClickHandler} href="/contact" className="btn-style-1">Get A
                                    Quote</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose-right-wrap">
                <div className="choose-img">
                    {/* <Image src={chimg} alt="" /> */}
                    {/* <div className="flot-img"><Image src={chimg2} alt="" /></div> */}
                </div>
            </div>
        </section>
    );
}

export default ChooseSection;