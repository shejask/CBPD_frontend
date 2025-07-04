import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'
import shape1 from '/public/images/hero/vector4.png'
import shape2 from '/public/images/hero/customer-1.png'
import shape3 from '/public/images/hero/customer-2.png'
import Image from "next/image";



const Hero2 = () => {
    return (

        <section className="hero-slider">
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/hero/slide-1.jpg'})` }}>
                        <div className="container">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Step into a powerful growth experience with  

                                        <span>  CBPD.
                                            <i><Image src={shape1} alt="" /></i></span>
                                    </h2>
                                     
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Fuel your career, brighten your future.</p>
                                </div>
                                <div className="clearfix"></div>
                                {/* <div data-swiper-parallax="500" className="slide-btns">
                                    <Link href="/about" className="btn-style-1">Get A Quote</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/hero/slide-2.jpg'})` }}>
                        <div className="container">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Unlock Your True Potential Through
                                        <span> CBPD
                                            <i><Image src={shape1} alt="" /></i></span>
                                    </h2>
                                     
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Empower Your Journey, Shape Your Tomorrow</p>
                                </div>
                                <div className="clearfix"></div>
                                {/* <div data-swiper-parallax="500" className="slide-btns">
                                    <Link href="/about" className="btn-style-1">Get A Quote</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Hero2;