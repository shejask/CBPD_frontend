import React from "react";
import Link from 'next/link'

import techImg from '/public/images/service/tech.jpg'
import educationImg from '/public/images/service/Education.jpg'
import languageImg from '/public/images/service/arts.jpg'
import healthImg from '/public/images/service/Safety.jpg'
import businessImg from '/public/images/service/business.jpg'
import Image from 'next/image'

const Services = [
    {
        Id: '01',
        slug: 'technology-data',
        sTitle: 'Technology and Data',
        description: 'This field focuses on the development, application, and management of digital technologies, as well as the collection, analysis, and interpretation of data to support decision-making.',
        image: techImg,
    },
    {
        Id: '02',
        slug: 'education-training',
        sTitle: 'Education and Training',
        description: 'Effective education and training programs aim to enhance learning outcomes, critical thinking, and prepare individuals for professional and personal growth.',
        image: educationImg,
    },
    {
        Id: '03',
        slug: 'language-creative-arts',
        sTitle: 'Language and Creative Arts',
        description: 'Language studies focus on effective communication and the evolution of languages, while creative arts encourage artistic expression through painting, music and digital media.',
        image: languageImg,
    },
    {
        Id: '04',
        slug: 'health-safety',
        sTitle: 'Health and Safety',
        description: 'This course covers essential topics such as occupational health, emergency preparedness, and environmental health.',
        image: healthImg,
    },
    {
        Id: '05',
        slug: 'business-management',
        sTitle: 'Business and Management',
        description: 'Business management focuses on decision-making, problem-solving, and optimizing resources to achieve organizational goals.',
        image: businessImg,
    }
];

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = () => {
    return (
        <section className="service-section separator-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-12">
                        <div className="heading-title-s2">
                            <small>Popular Services</small>
                            <h2>Professional Development Programs <span>Solutions</span></h2>
                        </div>
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        {Services.map((service, srv) => (
                            <div className="col col-xl-4 col-lg-6 col-md-6 col-12" key={srv}>                                <div className="service-item">
                                    <div className="service-top">
                                        <div className="service-text">
                                            <div className="service-img" style={{ marginTop: '20px' }}>
                                        <Image 
                                            src={service.image} 
                                            alt={service.sTitle}
                                            width={400}
                                            height={250}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '8px',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                            <h2>{service.Id}.</h2>
                                            <h3> {service.sTitle} </h3>
                                        </div>
                                    </div>
                                    <p>{service.description}</p>
                                     
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;