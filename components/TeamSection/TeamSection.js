import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import Team from '../../api/team'
import Image from 'next/image';


const TeamSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="team-section section-padding pb-0" style={{ backgroundImage: `url(${'/images/team/bg.jpg'})` }}>
            <div className="container-fluid">
                <div className="team-wrap">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-4 col-lg-11 offset-lg-1 col-12">
                            <div className="heading-title">
                                <small>Testimonial</small>
                                <h2>The amazing team behind <span>our company</span></h2>
                            </div>
                            <div className="team-slider">
                                <Slider {...settings}>
                                    {Team.map((team, aitem) => (
                                        <div className="team-item" key={aitem}>
                                            <div className="team-img">
                                                <Image src={team.tImg} alt="" />
                                            </div>
                                            <div className="team-text">
                                                <h3><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>{team.name}</Link></h3>
                                                <span>{team.title}</span>
                                            </div>
                                            <div className="right-title">
                                                <h3>{team.name}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;