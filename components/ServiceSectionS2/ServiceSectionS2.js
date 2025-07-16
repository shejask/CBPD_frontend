import React from "react";
import Link from 'next/link'

const services = [
    {
        Id: '01',
        slug: 'business-management',
        sTitle: 'Business and Management',
        description: 'Master essential business skills, leadership strategies, and management practices for organizational success in today\'s dynamic business environment.',
        icon: 'icon-briefcase',
    },
    {
        Id: '02',
        slug: 'education-training',
        sTitle: 'Education and Training',
        description: 'Comprehensive professional development programs designed to enhance teaching methodologies and learning outcomes across educational sectors.',
        icon: 'icon-graduation-cap',
    },
    {
        Id: '03',
        slug: 'technology-data',
        sTitle: 'Technology and Data',
        description: 'Explore cutting-edge technology solutions and data analytics to drive digital transformation and innovation in your organization.',
        icon: 'icon-laptop',
    },
    {
        Id: '04',
        slug: 'language-creative-arts',
        sTitle: 'Language and Creative Arts',
        description: 'Develop linguistic proficiency and creative expression through specialized programs in languages, arts, and cultural studies.',
        icon: 'icon-pencil',
    },
    {
        Id: '05',
        slug: 'health-safety',
        sTitle: 'Health and Safety',
        description: 'Expert training in workplace health, safety protocols, and wellness programs to ensure a secure and healthy professional environment.',
        icon: 'icon-shield',
    }
];

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS2 = () => {
    return (
        <section className="service-section-s2 separator-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-12">                <div className="heading-title-s2">
                            <small>All Programs</small>
                            <h2>Professional Development Programs</h2>
                        </div>
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        {services.map((service, srv) => (
                            <div className="col col-xl-6 col-lg-6 col-md-12 col-12" key={srv}>
                                <div className="service-item">
                                    <div className="service-top">
                                       
                                        <div className="service-text">
                                            <h2>{service.Id}.</h2>
                                            <h3><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.sTitle}</Link></h3>
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

export default ServiceSectionS2;