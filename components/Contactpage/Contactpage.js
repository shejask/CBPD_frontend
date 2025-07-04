import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import Link from 'next/link'

const Contactpage = () => {

    return (
        <section className="contact-pagg-section">
            <div className="map-section separator-padding">
                <h2 className="hidden">Contact map</h2>
                {/* <div className="map">
                    <iframe title='map'
                        src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                        allowfullscreen></iframe>
                </div> */}
            </div>
            <div className="contact-page separator-padding pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="contact-area-wrapper">
                                <div className="contact-form-area">
                                    <h2>Drop A Line!</h2>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="office-info">
                                <div className="heading-title">
                                    <small>Contact us</small>
                                    <h2>Have any questions? <span>get in touch!</span></h2>
                                    {/* <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas.</p> */}
                                    <div className="contact-info">
                                        <ul>
                                            <li><i className="icon-31"></i> Phone : +44 20 38074300</li>
                                            <li><i className="icon-30"></i> Email : info@cbpd.co.uk</li>
                                            <li><i className="icon-45"></i> Address : Central Board of professional development 37th Floor 1 Canada Square London, E14 5DY</li>
                                        </ul>
                                    </div>
                                    {/* <div className="info-social">
                                        <ul>
                                            <li><Link href="/contact" ><i className="icon-35"></i></Link></li>
                                            <li><Link href="/contact" ><i className="icon-32"></i></Link></li>
                                            <li><Link href="/contact" ><i className="icon-34"></i></Link></li>
                                            <li><Link href="/contact" ><i className="icon-33"></i></Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contactpage;
