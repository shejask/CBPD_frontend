import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import cImg1 from '/public/images/contact/contact-left.jpg'
import cImg2 from '/public/images/contact/right-shape.png'
import shape from '/public/images/contact/pattern.png'
import Bg from '/public/images/contact/bg-contact-pattern.png'
import Image from 'next/image';


const ContactSection = () => {

    return (
        <section className="contact-area separator-padding">
            <div className="left-img">
                <Image src={cImg1} alt="" />
                <div className="shape">
                    <Image src={cImg2} alt="" />
                </div>
            </div>
            <div className="right-shape"
                style={{ backgroundImage: `url(${'/images/contact/bg-contact-pattern.png'})` }}>
            </div>
            <div className="container">
                <div className="contact-area-wrapper">
                    <div className="row">
                        <div className="col col-lg-6 offset-lg-6 col-md-12 col-12">
                            <div className="heading-title">
                                <small>Get In Touch</small>
                                <h2>Get a quote for start <span>new journey</span></h2>
                            </div>
                            <div className="contact-form-area">
                                <ContactForm />
                                <div className="shape"><Image src={shape} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ContactSection;
