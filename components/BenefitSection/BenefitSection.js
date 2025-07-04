import React from 'react'
import Link from 'next/link'
import simg from '/public/images/benefit/1.jpg'
import simg2 from '/public/images/benefit/2.jpg'
import simg3 from '/public/images/benefit/3.jpg'
import simg4 from '/public/images/benefit/4.jpg'
import backShape from '/public/images/benefit/pattern.png'
import Image from 'next/image'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Services = [
    {
        Id: '01',
        sImg: simg,
        sTitle: 'Global Reach',
        description: 'A global perspective, we empower learners to make an impact anywhere in the world.',
        icon: 'icon-11',
    },
    {
        Id: '02',
        sImg: simg2,
        sTitle: 'Recognition of Excellence',
        description: 'Honoring outstanding achievement and  professional and academic excellence.',
        icon: 'icon-10',
    },
    {
        Id: '09',
        sImg: simg3,
        sTitle: 'Dynamic Networking',
        description: 'Building powerful connections that foster collaboration, innovation.',
        icon: 'icon-14',
    },
    {
        Id: '08',
        sImg: simg4,
        sTitle: 'Comprehensive Learning',
        description: 'Empowering individuals with a holistic approach that blends knowledge, skills, and  experience.',
        icon: 'icon-25',
    },
    {
        Id: '09',
        sImg: simg3,
        sTitle: 'Personal Experiences',
        description: 'Inspiring growth through unique, transformative experiences that leave a lasting impact.',
        icon: 'icon-14',
    },
    {
        Id: '08',
        sImg: simg4,
        sTitle: 'Excellence as Standard',
        description: 'Setting the benchmark for success by making excellence   foundation of everything we do.',
        icon: 'icon-25',
    },
]


const BenefitSection = (props) => {
    return (
        <section className="benefit-section separator-padding"
            style={{ backgroundImage: `url(${backShape})` }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-12">
                        <div className="heading-title-s2">
                            <small>What You Gain</small>
                            <h2>Over 10+ Years in Education Skill Development  <span>Solutions</span></h2>
                        </div>
                    </div>
                </div>
                <div className="benefit-wrap">
                    <div className="row">
                        {Services.map((service, srv) => (
                            <div className="col col-xl-3 col-lg-3 col-sm-6 col-12" key={srv}>
                                <div className="benefit-item">
                                   
                                    <div className="benefit-top">
                                        <div className="icon">
                                            <i className={service.icon}></i>
                                        </div>
                                        <div className="benefit-text">
                                            <h3>{service.sTitle}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                     
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitSection;