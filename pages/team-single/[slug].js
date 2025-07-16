import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Footer from '../../components/footer/Footer';
import Team from '../../api/team'
import ContactForm from '../../components/ContactFrom/ContactForm';
import shape from '/public/images/contact/pattern.png'
import Services from '../../api/service'
import CtaSection from '../../components/CtaSection/CtaSection';
import Image from 'next/image';


const TeamSinglePage = (props) => {
    const router = useRouter()

    const TeamDetails = Team.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={TeamDetails?.name} pagesub={'Team'} Bg={'/images/page-title/bg-4.jpg'} />
                <div className="team-single-page separator-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 order-lg-1 order-2">
                                <div className="team-single-sidebar">
                                    <div className="team-item">
                                        <div className="team-img">
                                            <Image src={TeamDetails?.tImg} alt="" />
                                        </div>
                                        <div className="right-title">
                                            <h3>Jone Willsone</h3>
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <ul>
                                            <li><i className="icon-31"></i> Phone : (303) 555-0105</li>
                                            <li><i className="icon-30"></i> Email : lawson@example.com</li>
                                            <li><i className="icon-43"></i> Specialist : Consulting</li>
                                            <li><i className="icon-44"></i> Experience : 7+ Years</li>
                                        </ul>
                                    </div>
                                    <div className="team-social">
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/"><i className="icon-35"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="/"><i className="icon-32"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="/"><i className="icon-34"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="/"><i className="icon-33"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 offset-xl-1 col-lg-8 order-lg-2 order-1">
                                <div className="team-single-content">
                                    <h2>Personal Experience</h2>
                                    <p>Global Business Head of consultees. Leads the global expansion of the consultees brand
                                        and overseas investment in solutions and innovation. Renowned coder and an authority on
                                        matters of industrial experience, and technological interface.</p>
                                    <p>Expertise in Team management, Performance Improvement, Transformation, Transformation
                                        Catalyst. We consider drawing leads to greater results. We share knowledge, tools, and
                                        resources to get the best desirable outcomes for our clients, our firm and our people.
                                        We are dedicated to producing measured value and results.</p>

                                    <div className="skill-section">
                                        <div className="skill-progress">
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <div className="progress-single">
                                                        <h5 className="progress-title">Professionality</h5>
                                                        <div className="progress">
                                                            <div className="progress-bar" style={{ width: "90%" }}></div>
                                                        </div>
                                                        <span className="progress-number">90%</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <div className="progress-single">
                                                        <h5 className="progress-title">Inventory Management</h5>
                                                        <div className="progress">
                                                            <div className="progress-bar" style={{ width: "95%" }}></div>
                                                        </div>
                                                        <span className="progress-number">95%</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <div className="progress-single">
                                                        <h5 className="progress-title">Client Service</h5>
                                                        <div className="progress">
                                                            <div className="progress-bar" style={{ width: "94%" }}></div>
                                                        </div>
                                                        <span className="progress-number">94%</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <div className="progress-single">
                                                        <h5 className="progress-title">Finance Marketing</h5>
                                                        <div className="progress">
                                                            <div className="progress-bar" style={{ width: "96%" }}></div>
                                                        </div>
                                                        <span className="progress-number">96%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-wrap">
                                        <h2>What We Do</h2>
                                        <p>Expertise in Team management, Performance Improvement, Transformation, Transformation Catalyst. We consider drawing leads to greater results. We share knowledge, tools, and resources to get the best desirable outcomes for our clients, our firm and our people. We are dedicated to producing measured value and results.</p>
                                        <div className="row">
                                            {Services.slice(0, 2).map((service, srv) => (
                                                <div className="col col-lg-6 col-md-6 col-12" key={srv}>
                                                    <div className="service-item">
                                                        <div className="service-top">
                                                            <div className="icon">
                                                                <i className={service.icon}></i>
                                                            </div>
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
                                    <div className="contact-area">
                                        <div className="contact-area-wrapper">
                                            <div className="contact-form-area">
                                                <div className="heading-title">
                                                    <small>Get In Touch</small>
                                                    <h2>Get a quote for start <span>new journey</span></h2>
                                                </div>
                                                <ContactForm />
                                                <div className="shape"><Image src={shape} alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CtaSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default TeamSinglePage;