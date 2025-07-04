import React from "react";
import Link from "next/link"
import Image from "next/image"
import aboutImg1 from '/public/images/about/about-us-7.jpg'
import aboutImg2 from '/public/images/about/about-us-8.jpg'

const About4 = () => {
    return (
        <section className="about-one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="about-one__img-box-1">
                                        <div className="about-one__img-1">
                                            <Image 
                                                src={aboutImg1} 
                                                alt="Professional Development"
                                                width={400}
                                                height={500}
                                                style={{
                                                    maxWidth: "100%",
                                                    height: "auto"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about-one__cirtified">
                                        <div className="icon">
                                            <i className="icon-graduation-cap"></i>
                                        </div>
                                        <h3>Excellence in<br/> Education Since 2010</h3>
                                    </div>
                                    <div className="about-one__img-box-2">
                                        <div className="about-one__img-2">
                                            <Image 
                                                src={aboutImg2} 
                                                alt="Training Programs"
                                                width={400}
                                                height={500}
                                                style={{
                                                    maxWidth: "100%",
                                                    height: "auto"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Why Choose Us</span>
                                </div>
                                <div className="section-title__title-box">
                                    <h2 className="section-title__title">
                                        Transforming Careers Through Professional Excellence
                                    </h2>
                                </div>
                            </div>
                            <p className="about-one__text-1">
                                We are committed to delivering high-quality professional development programs that empower individuals 
                                and organizations to achieve their full potential. Our comprehensive approach combines practical skills, 
                                industry insights, and innovative learning methodologies.
                            </p>
                            <p className="about-one__text-2">
                                With a focus on excellence and continuous improvement, we provide tailored solutions that address 
                                the evolving needs of professionals across various sectors. Our programs are designed to create 
                                lasting impact and measurable results.
                            </p>
                            <div className="about-one__btn-box">
                                <Link href="/about" className="about-one__btn thm-btn">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About4;
