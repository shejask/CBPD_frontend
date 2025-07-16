import React from 'react'
import { Slide } from "react-awesome-reveal";
import Link from 'next/link'

const Features = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (
        <section className={`features-section separator-padding ${props.featuresClass}`}>
            <div className="back-shape"
                style={{ backgroundImage: `url(${'/images/features-shape.png'})` }}>
            </div>
            <div className="container">
                <div className="row align-items-center features-main-title">
                    <div className="col-xl-5 col-lg-7 col-12">
                        <div className="heading-title">
                            <small>Our Features</small>
                            <h2>Our Main Gola To Modern <span>Business Solutions</span></h2>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-5 col-12">
                        <div className="features-btn">
                            <Link onClick={ClickHandler} href="/about" className="btn-style-1">Get Startd</Link>
                        </div>
                    </div>
                </div>
                <div className="features-wrap">
                    <div className="row">
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                            <Slide direction='up' triggerOnce={'false'}>
                                <div className="features-item">
                                    <h3><i className="icon-21"></i> Digital Transformation</h3>
                                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula.</p>
                                    <ul>
                                        <li>1. Improve product or service quality</li>
                                        <li>2. Increase customer satisfaction and loyalty.</li>
                                        <li>3. Reduce costs associated with rework</li>
                                    </ul>
                                </div>
                            </Slide>
                        </div>
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                            <Slide direction='up' triggerOnce={'false'}>
                                <div className="features-item">
                                    <h3><i className="icon-21"></i> Quality Management</h3>
                                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula.</p>
                                    <ul>
                                        <li>1. Improve operational efficiency.</li>
                                        <li>2. Enhance customer experience through digital.</li>
                                        <li>3. Streamline internal processes</li>
                                    </ul>
                                </div>
                            </Slide>
                        </div>
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                            <Slide direction='up' triggerOnce={'false'}>
                                <div className="features-item">
                                    <h3><i className="icon-21"></i> Sustainability Initiatives</h3>
                                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula.</p>
                                    <ul>
                                        <li>1. Improve product or service quality</li>
                                        <li>2. Increase customer satisfaction and loyalty.</li>
                                        <li>3. Reduce costs associated with rework</li>
                                    </ul>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;