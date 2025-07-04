import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Footer from '../../components/footer/Footer';
import Services from '../../api/service'
import graph from '/public/images/graph/Bar-Chart-Vertical.png'
import icon from '/public/images/service/icon.png'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSinglePage = (props) => {

    const router = useRouter()

    const ServiceDetails = Services.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <div className='page-wrapper'>
                <Navbar2 hclass={'header-style-2'} />
                <PageTitle pageTitle={ServiceDetails?.sTitle} pagesub={'Services'} Bg={'/images/page-title/bg-3.jpg'} />
                <div className="service-single-page separator-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-12 order-lg-1 order-2">
                                <div className="service-sidebar">
                                    <div className="service-widget">
                                        <ul>
                                            {Services.map((service, srv) => (
                                                <li key={srv}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="info-widget">
                                        <h3>To Get Our Company Information's & Our working Status </h3>

                                        <div className="info-wrap">
                                            <div className="info-item">
                                                <h4><i className="icon-38"></i>Finance Advisor</h4>
                                                <i className="icon-37"></i>
                                            </div>
                                            <div className="info-item">
                                                <h4><i className="icon-38"></i>Terms & Conditions</h4>
                                                <i className="icon-37"></i>
                                            </div>
                                        </div>
                                        <div className="icon">
                                            <Image src={icon} alt="" />
                                        </div>
                                    </div>
                                    <div className="invest-widget" style={{ backgroundImage: `url(${'/images/service/bg.jpg'})` }}>
                                        <div className="invest-wrap">
                                            <h3>Giving Wings to your Investment.</h3>
                                            <p>Actual teachings of the great</p>
                                            <a href="contact.html" className="btn-style-1">Get Support</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 order-lg-2 order-1">
                                <div className="service-content">
                                    <div className="service-img">
                                        <Image src={ServiceDetails?.sImg} alt="" />
                                    </div>
                                    <div className="service-single-text">
                                        <h2>What To Expect From Us</h2>
                                        <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec quam ut tortor efficitur consectetur sed vitae nisi. Phasellus convallis vulputate euismod. Pellentesque lacinia rutrum libero, sit amet aliquam ante viverra a. Ut sem ipsum, tempor nec rutrum in, gravida eu ipsum.</p>
                                    </div>
                                    <div className="service-single-grap">
                                        <div className="row">
                                            <div className="col col-lg-6 col-12">
                                                <div className="service-single-grap-img">
                                                    <Image src={graph} alt="" />
                                                </div>
                                            </div>
                                            <div className="col col-lg-6 col-12">
                                                <div className="service-single-grap-text">
                                                    <h3>Sustainability Initiatives</h3>
                                                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante.</p>
                                                    <ul>
                                                        <li><i className="icon-21"></i>The Art and Science of Building</li>
                                                        <li><i className="icon-21"></i>Mastering the Construction Process</li>
                                                        <li><i className="icon-21"></i>Green Construction Practices</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-wrap">
                                        <div className="row">
                                            {Services.map((service, srv) => (
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default ServiceSinglePage;