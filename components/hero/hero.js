import React from "react";
import vector1 from '/public/images/hero/vector.png'
import vector2 from '/public/images/hero/vector2.png'
import banner from '/public/images/hero/banner.jpg'
import hero from '/public/images/hero/hero-1.png'
import radial from '/public/images/hero/radial.png'
import shape from '/public/images/hero/vector3.png'
import { Slide } from "react-awesome-reveal";
import Image from "next/image";


const Hero = () => {
    return (

        <section className="static-hero">
            <div className="back-shape" style={{ backgroundImage: `url(${'/images/hero/back-shape.png'})` }}>
            </div>
            <div className="container">
                <div className="static-hero-wrap">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12 col-12">
                            <div className="static-hero-text">
                                <Slide direction='up' triggerOnce={'false'}>
                                    <h2>Creative Business <span>Agency
                                        <i><Image src={vector1} alt="" /></i></span><small><img
                                            src={vector2} alt="" /></small></h2>
                                </Slide>

                                <div className="rotate-text-wrap">
                                    <div className="rotate-text text-roted">
                                        <svg width="200" height="200">
                                            <path fill="white" d="M0,100a100,100 0 1,0 200,0a100,100 0 1,0 -200,0" />
                                            <path fill="none" id="innerCircle" d="M10,100a90,90 0 1,0 180,0a90,90 0 1,0 -180,0" />
                                            <text>
                                                <textPath href="#innerCircle" className="qr--label">
                                                    Years Experience Years Experience
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>
                                    <div className="icon"><i className="icon-22"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="static-banner-sec">
                            <Image src={banner} alt="" />
                            <div className="hero-img">
                                <Slide direction='right' triggerOnce={'false'}>
                                    <Image src={hero} alt="" />
                                </Slide>
                            </div>
                            <div className="radial-bar">
                                <Slide direction='left' triggerOnce={'false'}>
                                    <Image src={radial} alt="" />
                                </Slide>
                            </div>
                            <div className="progress-wrap">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vector-shape">
                <Image src={shape} alt="" />
            </div>
        </section>
    )
}

export default Hero;