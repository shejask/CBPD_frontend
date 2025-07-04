import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const ContactSectionS2 = () => {

    return (
        <section className="contact-area-s2 separator-padding"
            style={{ backgroundImage: `url(${'/images/contact/bg.jpg'})` }}>
            <div className="container">
                <div className="contact-area-wrapper">
                    <div className="row">
                        <div className="col col-lg-6 offset-lg-6 col-md-12 col-12">
                            <div className="contact-form-area">
                                <div className="heading-title-s3">
                                    <small>Get In Touch</small>
                                    <h2>Get a quote for start <span>new journey</span></h2>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ContactSectionS2;
