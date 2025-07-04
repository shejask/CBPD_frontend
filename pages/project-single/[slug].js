import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Link from  'next/link'
import Projects from '../../api/project'
import Footer from '../../components/footer/Footer';
import Services from '../../api/service'
import Image from 'next/image';

const ProjectSinglePage = (props) => {

    const router = useRouter()
    const projectDetails = Projects.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={projectDetails?.title} pagesub={'404'} Bg={'/images/page-title/bg-1.jpg'} />
                <div className="project-single-page separator-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="project-single-text">
                                    <h2>{projectDetails?.title}</h2>
                                    <p>Global Business Head of consultees. Leads the global expansion of the consultees brand
                                        and
                                        overseas investment in solutions and innovation. Renowned coder and an authority on
                                        matters
                                        of industrial experience, and technological interface.
                                        Expertise in Team management, Performance Improvement, Transformation, Transformation
                                        Catalyst. We consider drawing leads to greater results. We share knowledge, tools, and
                                        resources to get the best desirable outcomes for our clients, our firm and our people.
                                        We
                                        are dedicated to producing measured value and results.T he banking industry is a
                                        multifaceted sector of the economy that involves the buying, selling, development,
                                        management, and financing of real property, which includes land and physical structures.
                                    </p>
                                    <p>
                                        It plays a significant role in the global economy and encompasses various aspects of
                                        real
                                        estate transactions and operations. The real estate industry is influenced by economic
                                        conditions, population growth, urbanization trends, and government policies. It is a
                                        vital
                                        part of the economy, providing housing, commercial spaces, and infrastructure for
                                        communities and businesses , helping individuals and organizations navigate property
                                        transactions and investments.
                                    </p>
                                </div>
                                <div className="problem">
                                    <h3>Problem Statements</h3>
                                    <p>It plays a significant role in the global economy and encompasses various aspects of real estate transactions and operations. The real estate industry is influenced by economic conditions, population growth, urbanization trends, and government policies. It is a vital part of the economy, providing housing, commercial spaces, and infrastructure for communities and businesses , helping individuals and organizations navigate property transactions and investments.</p>
                                </div>
                                <div className="challenges">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <h4><i className="icon-21"></i> Challenges</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <ul>
                                                <li>1. Improve operational efficiency.</li>
                                                <li>2. Enhance customer experience through digital.</li>
                                                <li>3. Streamline internal processes</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <ul>
                                                <li>1. Improve operational efficiency.</li>
                                                <li>2. Enhance customer experience through digital.</li>
                                                <li>3. Streamline internal processes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="project-sidebar">
                                    <div className="project-category">
                                        <ul>
                                            <li><span><i className="icon-42"></i>Category:</span> Finance</li>
                                            <li><span><i className="icon-41"></i>Clients:</span> Willeam Jason</li>
                                            <li><span><i className="icon-40"></i>Location:</span>  Newyork, USA</li>
                                            <li><span><i className="icon-39"></i>Date:</span>   12/05/202</li>
                                        </ul>
                                        <div className="cloud-btn">
                                            <button><span><i className="icon-38"></i> Download PDF</span> <i className="icon-37"></i></button>
                                            <button><span><i className="icon-38"></i> Download Docs</span> <i className="icon-37"></i></button>
                                        </div>
                                    </div>
                                    <div className="project-side">
                                        <Image src={projectDetails?.psImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="project-single-bottom">
                            <h2>Implementation & Details</h2>

                            <div className="challenges">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <h4><i className="icon-21"></i> Technology Upgrades</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <ul>
                                            <li>It plays a significant role in the global economy</li>
                                            <li>Helping individuals and organizations navigate property</li>
                                            <li>Helping individuals and organizations navigate property</li>
                                            <li>conditions, population growth, urbanization trends</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <ul>
                                            <li>It plays a significant role in the global economy and encompasses various aspects of real estate transactions and operations. It is a vital part of the economy, providing housing, commercial spaces, and infrastructure for communities and businesses</li>
                                            <li>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="service-section">
                                <div className="container">
                                    <div className="service-wrap">
                                        <div className="row">
                                            {Services.slice(0, 3).map((service, srv) => (
                                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12" key={srv}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSinglePage;