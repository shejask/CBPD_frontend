import React from 'react'
import pimg from '/public/images/price-bg.png'
import Link from 'next/link'
import Image from 'next/image'


const PricingSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="pricing-section separator-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-7 col-12">
                        <div className="heading-title-s2 text-center">
                            <small>Pricing Table</small>
                            <h2>Choose a plan that perfect <span>works for you</span></h2>
                        </div>
                    </div>
                </div>
                <div className="pricing-items">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="pricing-item">
                                <div className="price-price">
                                    <span>Basic</span>
                                    <h3>65$</h3>
                                </div>
                                <ul>
                                    <li><i className="icon-12"></i>Traditional Consulting</li>
                                    <li><i className="icon-12"></i>Investment Management</li>
                                    <li><i className="icon-12 gray"></i>Data Aggregation</li>
                                    <li><i className="icon-12 gray"></i>Professional Support</li>
                                </ul>
                                <Link onClick={ClickHandler} className="btn-style-1" href="/pricing">Purchase Now</Link>
                                <div className="price-bg"><Image src={pimg} alt=""/></div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="pricing-item">
                                <div className="price-price">
                                    <span>Standard</span>
                                    <h3>90$</h3>
                                </div>
                                <ul>
                                    <li><i className="icon-12"></i>Traditional Consulting</li>
                                    <li><i className="icon-12"></i>Investment Management</li>
                                    <li><i className="icon-12"></i>Data Aggregation</li>
                                    <li><i className="icon-12 gray"></i>Professional Support</li>
                                </ul>
                                <Link onClick={ClickHandler} className="btn-style-1" href="/pricing">Purchase Now</Link>
                                <div className="price-bg"><Image src={pimg} alt=""/></div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="pricing-item">
                                <div className="price-price">
                                    <span>Premium</span>
                                    <h3>100$</h3>
                                </div>
                                <ul>
                                    <li><i className="icon-12"></i>Traditional Consulting</li>
                                    <li><i className="icon-12"></i>Investment Management</li>
                                    <li><i className="icon-12"></i>Data Aggregation</li>
                                    <li><i className="icon-12"></i>Professional Support</li>
                                </ul>
                                <Link onClick={ClickHandler} className="btn-style-1" href="/pricing">Purchase Now</Link>
                                <div className="price-bg"><Image src={pimg} alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection;