import React from "react";
import Link from 'next/link'
import Services from '../../api/service'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS3 = () => {
    return (
        <section className="service-section style-3 separator-padding pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-4 col-12">
                        <div className="service-left">
                            <div className="heading-title">
                                <small>Popular Services</small>
                                <h2>We Provide Modern Business Consulting <span>Solutions</span></h2>
                                <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget
                                    egestas magna mi ut arcu.</p>
                            </div>
                            <div className="service-top-text">
                                <Link onClick={ClickHandler} href="/contact" className="btn-style-1">Get A Quote</Link>
                                <div className="service-top-right">
                                    <p>25+ Years</p>
                                    <span>Experienced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-12">
                        <div className="service-wrap">
                            <div className="row">
                                {Services.slice(0, 4).map((service, srv) => (
                                    <div className="col col-xl-6 col-lg-6 col-md-6 col-12" key={srv}>
                                        <div className="service-item">
                                            <div className="service-top">
                                                <div className="icon">
                                                    <i className={service.icon}></i>
                                                </div>
                                                <div className="service-text">
                                                    <h2>{service.Id}.</h2>
                                                    <h3><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.sTitle}</Link></h3>
                                                </div>
                                            </div>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS3;