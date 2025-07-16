import React from "react";
import Link from 'next/link'
import hImg1 from '/public/images/hero/middle.jpg'
import hImg2 from '/public/images/hero/vector.png'
import hImg3 from '/public/images/hero/vector2.png'
import hImg4 from '/public/images/hero/vector3.png'
import hImg5 from '/public/images/hero/banner2.jpg'
import hImg6 from '/public/images/hero/left-shape2.png'
import hImg7 from '/public/images/hero/radial2.png'
import FunFact from "../FunFact/FunFact";
import Image from "next/image";


const Hero3 = () => {
    return (

        <section className="static-hero-s2">
            <div className="container">
                <div className="static-hero-wrap">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12 col-12">
                            <div className="static-hero-text">
                                <h2>Ideas For <b><Image
                                    src={hImg1} alt="" /></b> Your Better <span>Consulting
                                        <i><Image src={hImg2} alt="" /></i></span><small><Image
                                            src={hImg3} alt="" /></small></h2>
                                <div className="vector-shape">
                                    <Image src={hImg4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
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
                                <Link href="/contact" className="btn-style-1">More About Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="static-banner-sec">
                                <Image src={hImg5} alt="" />
                                <div className="left-shape"><Image
                                    src={hImg6} alt="" /></div>
                                <div className="radial-shape">
                                    <Image src={hImg7} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FunFact />
        </section>
    )
}

export default Hero3;