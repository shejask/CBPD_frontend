import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '/public/images/testimonial/img-1.jpg'
import ts2 from '/public/images/testimonial/img-2.jpg'
import ts3 from '/public/images/testimonial/img-3.jpg'
import Image from "next/image";


const Testimonial = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const testimonial = [
        {
            tsImg: ts1,
            Des: "“Transforming ideas into user Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet.”",
            Title: 'Darlene Robertson',
            Sub: "Web design",
        },
        {
            tsImg: ts2,
            Des: "“Transforming ideas into user Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet.”",
            Title: 'Robert Miller',
            Sub: "UX/UI Designer",
        },
        {
            tsImg: ts3,
            Des: "“Transforming ideas into user Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet.”",
            Title: 'Ken William',
            Sub: "Programmer",
        }
    ]

    return (
        <section className="testimonial-section separator-padding">
            <div className="back-shape"
                style={{ backgroundImage: `url(${'/images/testimonial/pattern1.png'})` }}>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="testimonial-left">
                            <div className="heading-title">
                                <small>Testimonial</small>
                                <h2>What They Are Talking <span>About Consl.</span></h2>
                            </div>
                            <p>Transforming ideas into user-friendly and visually appealing websites Accounting and
                                Bookkeeping.</p>
                            <a href="contact.html" className="btn-style-1">Contact Us</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial-items">
                            <Slider {...settings}>
                                {testimonial.map((tesmnl, tsm) => (
                                    <div className="testimonial-item" key={tsm}>
                                        <div className="testimonial-text">
                                            <div className="ratting-wrap">
                                                <ul className="ratting">
                                                    <li><i className="icon-27"></i></li>
                                                    <li><i className="icon-27"></i></li>
                                                    <li><i className="icon-27"></i></li>
                                                    <li><i className="icon-27"></i></li>
                                                    <li><i className="icon-27"></i></li>
                                                </ul>
                                                <ul className="count">
                                                    <li>4.9 / </li>
                                                    <li>5.00</li>
                                                </ul>
                                            </div>
                                            <p>“ Transforming ideas into user Proin efficitur, mauris vel condimentum pulvinar,
                                                velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio
                                                orci. Nunc id massa ante. Suspendisse sit amet.</p>
                                            <div className="testimonial-avatar">
                                                <Image src={tesmnl.tsImg} alt="" />
                                            </div>
                                            <div className="testimonial-text-btm">
                                                <h3>{tesmnl.Title}</h3>
                                                <span>{tesmnl.Sub}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Testimonial;